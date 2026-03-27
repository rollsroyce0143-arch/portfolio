import { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    { title: "IoT Smart System", category: "IoT" },
    { title: "Arduino Automation", category: "Embedded" },
    { title: "Signal Processing", category: "Software" },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-6">

      <h2 className="text-3xl text-primary text-center mb-6">
        Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-8">
        {["All", "IoT", "Embedded", "Software"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded border ${
              filter === cat
                ? "bg-primary text-black"
                : "border-primary text-primary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredProjects.map((proj, i) => (
          <div
            key={i}
            className="bg-[#112240] p-6 rounded-lg hover:scale-105 transition"
          >
            <h3 className="text-xl font-bold text-primary">
              {proj.title}
            </h3>
            <p className="text-gray-400 mt-2">
              Category: {proj.category}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Projects;