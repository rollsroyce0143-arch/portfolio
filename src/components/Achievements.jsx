function Achievements() {
  return (
    <section id="achievements" className="py-20 px-6 text-center bg-secondary text-white">

      {/* Title */}
      <h2 data-aos="fade-up" className="text-3xl text-primary mb-12">
        Achievements
      </h2>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-8">

        {/* CodeChef */}
        <div
          data-aos="zoom-in"
          className="bg-[#112240] p-6 rounded-xl shadow-lg hover:shadow-primary/40 hover:scale-105 transition duration-300"
        >
          <h3 className="text-xl font-semibold text-primary mb-3">
            💻 Competitive Programming
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Actively engaged in problem-solving on <span className="text-primary">CodeChef</span>,
            maintaining a consistent coding streak of <span className="text-primary">180+ days</span>
            and solving over <span className="text-primary">1500+ problems</span>.
            This has significantly strengthened my algorithmic thinking and coding efficiency.
          </p>
        </div>

        {/* Skillrack */}
        <div
          data-aos="zoom-in"
          data-aos-delay="100"
          className="bg-[#112240] p-6 rounded-xl shadow-lg hover:shadow-primary/40 hover:scale-105 transition duration-300"
        >
          <h3 className="text-xl font-semibold text-primary mb-3">
            🧠 Problem Solving Practice
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Solved over <span className="text-primary">630+ problems</span> on
            <span className="text-primary"> Skillrack</span>, enhancing logical reasoning,
            structured programming, and analytical problem-solving skills.
          </p>
        </div>

        {/* Paper Presentation */}
        <div
          data-aos="zoom-in"
          data-aos-delay="200"
          className="bg-[#112240] p-6 rounded-xl shadow-lg hover:shadow-primary/40 hover:scale-105 transition duration-300"
        >
          <h3 className="text-xl font-semibold text-primary mb-3">
            🎤 Paper Presentation
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            Presented a technical paper at Chennai Institute of Technology,
            demonstrating concepts related to electronics and communication engineering.
            This experience strengthened my presentation and technical communication skills.
          </p>
        </div>

        {/* Certifications */}
        <div
          data-aos="zoom-in"
          data-aos-delay="300"
          className="bg-[#112240] p-6 rounded-xl shadow-lg hover:shadow-primary/40 hover:scale-105 transition duration-300"
        >
          <h3 className="text-xl font-semibold text-primary mb-3">
            📜 Certifications
          </h3>

          <p className="text-gray-400 text-sm mb-4">
            Completed multiple technical certifications in software development,
            embedded systems, and electronics. Click below to view all certifications.
          </p>

          <a
            href="https://www.linkedin.com/in/m-karthick-69585a353"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-primary px-4 py-2 rounded hover:bg-primary hover:text-black transition"
          >
            View Certificates
          </a>
        </div>

      </div>
    </section>
  );
}

export default Achievements;