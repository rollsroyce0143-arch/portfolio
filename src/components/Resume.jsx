function Resume() {
  return (
    <section className="py-20 text-center">

      <h2 data-aos="fade-up" className="text-3xl text-primary mb-6">
        Resume
      </h2>

      <p data-aos="fade-up" data-aos-delay="200" className="mb-6 text-gray-400">
        Download my resume to know more about my skills and experience.
      </p>

      <div data-aos="zoom-in" data-aos-delay="400">
        <button className="bg-primary text-black px-6 py-2 rounded hover:scale-105 transition">
          Download Resume
        </button>
      </div>

    </section>
  );
}

export default Resume;