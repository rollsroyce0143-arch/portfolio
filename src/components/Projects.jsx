import { useState } from "react";

// import images
import constructionImg from "../assets/construction.png";
import expenseImg from "../assets/expense.png";
import vitalsImg from "../assets/vitals.png";
import acImg from "../assets/ac.png";

function Projects() {
  const [filter, setFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const projects = [
    {
      title: "Construction Company Website",
      category: "Software",
      desc: "Designed and developed a responsive construction company website showcasing services and projects.",
      image: constructionImg,
    },
    {
      title: "Company Expense Management App",
      category: "Software",
      desc: "Developed a daily expense tracking application for managing company expenditures efficiently.",
      image: expenseImg,
    },
    {
      title: "Patient Vitals Monitoring (Web)",
      category: "Software",
      desc: "Real-time patient health monitoring system with web-based data visualization.",
      image: vitalsImg,
    },
    {
      title: "Smart AC System (Concept)",
      category: "Hardware",
      desc: "Designed an IoT-based smart AC system focused on automation and energy efficiency.",
      image: acImg,
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
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
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

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredProjects.map((proj, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            className="bg-[#112240] rounded-xl overflow-hidden shadow-lg hover:shadow-primary/40 transition group"
          >

            {/* Image */}
            <div className="relative">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <button
                  onClick={() => setSelectedImage(proj.image)}
                  className="px-4 py-2 bg-primary text-black rounded hover:scale-105 transition"
                >
                  🔍 View Output
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-primary mb-2">
                {proj.title}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                {proj.desc}
              </p>

              <span className="text-xs bg-primary text-black px-2 py-1 rounded">
                {proj.category}
              </span>
            </div>

          </div>
        ))}

      </div>

      {/* Image Modal */}
{selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
  >

    {/* Close Button */}
    <button
      onClick={() => setSelectedImage(null)}
      className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-primary transition"
    >
      ✖
    </button>

    {/* Image */}
    <img
      src={selectedImage}
      alt="Project Output"
      className="max-w-[90%] max-h-[80%] rounded-lg shadow-lg"
    />

  </div>
)}

    </section>
  );
}

export default Projects;