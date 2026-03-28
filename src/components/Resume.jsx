function Resume() {
  return (
    <section id="resume" className="py-20 px-6 bg-secondary text-white text-center">

      <h2 data-aos="fade-up" className="text-3xl text-primary mb-6">
        Resume
      </h2>

      <p data-aos="fade-up" className="text-gray-400 max-w-xl mx-auto mb-8">
        Download my resume to explore my academic background, technical skills, and project experience in embedded systems, IoT, and software development.
      </p>

      <a
        href="/resume.pdf"
        download
        className="inline-block bg-primary text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition shadow-lg shadow-primary/40"
      >
        Download Resume
      </a>

    </section>
  );
}

export default Resume;