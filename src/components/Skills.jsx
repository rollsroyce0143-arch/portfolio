function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-secondary text-white">

      {/* Title */}
      <h2
        data-aos="fade-up"
        className="text-3xl text-primary text-center mb-12"
      >
        Skills
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Software Skills */}
        <div
          data-aos="fade-right"
          className="bg-[#112240] p-6 rounded-xl shadow-lg hover:shadow-primary/40 hover:-translate-y-2 transition duration-300 h-full flex flex-col"
        >
          <h3 className="text-2xl text-primary mb-6">
            💻 Software Skills
          </h3>

          <ul className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">

            <li className="flex gap-3">
              <span className="mt-1">⚡</span>
              <p>
                Strong foundation in programming with{" "}
                <span className="text-primary">
                  C, C++, Java, and Python
                </span>
              </p>
            </li>

            <li className="flex gap-3">
              <span className="mt-1">🌐</span>
              <p>
                Skilled in web development using{" "}
                <span className="text-primary">
                  HTML, CSS, JavaScript, and React
                </span>
              </p>
            </li>

            <li className="flex gap-3">
              <span className="mt-1">📱</span>
              <p>
                Familiar with mobile app development using{" "}
                <span className="text-primary">
                  Flutter and Dart
                </span>
              </p>
            </li>

          </ul>
        </div>

        {/* Hardware Skills */}
        <div
          data-aos="fade-left"
          className="bg-[#112240] p-6 rounded-xl shadow-lg hover:shadow-primary/40 hover:-translate-y-2 transition duration-300 h-full flex flex-col"
        >
          <h3 className="text-2xl text-primary mb-6">
            🔌 Hardware Skills
          </h3>

          <ul className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">

            <li className="flex gap-3">
              <span className="mt-1">🔧</span>
              <p>
                Hands-on experience with{" "}
                <span className="text-primary">
                  Arduino and ESP-based embedded systems
                </span>
              </p>
            </li>

            <li className="flex gap-3">
              <span className="mt-1">📊</span>
              <p>
                Experience using{" "}
                <span className="text-primary">MATLAB</span>{" "}
                for analysis and simulation
              </p>
            </li>

            <li className="flex gap-3">
              <span className="mt-1">💡</span>
              <p>
                Basic to intermediate knowledge of{" "}
                <span className="text-primary">
                  VLSI design concepts
                </span>
              </p>
            </li>

          </ul>
        </div>

      </div>

    </section>
  );
}

export default Skills;