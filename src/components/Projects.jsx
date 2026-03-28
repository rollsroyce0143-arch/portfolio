import { useState } from "react";

function Projects() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Company Expense Management App",
      category: "Software",
      desc: "Developed a daily expense tracking application for managing company expenditures efficiently.",
      github: "https://github.com/rollsroyce0143-arch/jk_centring_works",
      demo: "https://portfolio-gamma-two-66.vercel.app/",
    },
    {
      title: "Patient Vitals Monitoring (Web)",
      category: "Software",
      desc: "Real-time patient health monitoring system with web-based data visualization.",
      github: "#",
      demo: "#",
    },
    {
      title: "IoT Patient Health Monitoring System",
      category: "Hardware",
      desc: "Built using ESP modules to monitor patient vitals using sensors and embedded systems.",
      github: "#",
      demo: "#",
    },
    {
      title: "Smart AC System (Concept)",
      category: "Hardware",
      desc: "Designed an IoT-based smart AC system focused on automation and energy efficiency.",
      github: "#",
      demo: "#",
    },
    {
      title: "Arduino & IoT Mini Projects",
      category: "Hardware",
      desc: "Developed multiple small projects using Arduino and IoT concepts for automation.",
      github: "#",
      demo: "#",
    },
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 px-6 bg-secondary text-white">

      {/* Title */}
      <h2 data-aos="fade-up" className="text-3xl text-primary text-center mb-10">
        Projects
      </h2>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "Software", "Hardware"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded border transition ${
              filter === cat
                ? "bg-primary text-black"
                : "border-primary text-primary hover:bg-primary hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredProjects.map((proj, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="bg-[#112240] p-6 rounded-lg hover:scale-105 transition shadow-lg hover:shadow-primary/40"
          >
            <h3 className="text-xl font-bold text-primary mb-2">
              {proj.title}
            </h3>

            <p className="text-gray-400 text-sm mb-3">
              {proj.desc}
            </p>

            <span className="text-xs bg-primary text-black px-2 py-1 rounded">
              {proj.category}
            </span>

            {/* Buttons (FIXED) */}
            <div className="mt-4 flex gap-3">
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border border-primary px-3 py-1 rounded hover:bg-primary hover:text-black transition"
              >
                GitHub
              </a>

              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm border border-primary px-3 py-1 rounded hover:bg-primary hover:text-black transition"
              >
                Live Demo
              </a>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;