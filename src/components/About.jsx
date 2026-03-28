function About() {
  return (
    <section id="about" className="py-20 px-6 bg-secondary text-white">

      {/* Title */}
      <h2 data-aos="fade-up" className="text-3xl text-primary text-center mb-10">
        About Me
      </h2>

      {/* About Content */}
      <div className="max-w-4xl mx-auto text-center">
        <p data-aos="fade-up" className="text-gray-300 leading-relaxed">
          I am an Electronics and Communication Engineering (ECE) student 
          passionate about building real-world solutions using 
          <span className="text-primary"> IoT</span>, 
          <span className="text-primary"> Embedded Systems</span>, and 
          <span className="text-primary"> Software Development</span>.
        </p>

        <p data-aos="fade-up" className="text-gray-400 mt-4">
          My goal is to become an embedded systems engineer solving real-world problems 
          by integrating hardware and software.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-16 max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

        {/* Card Style (reused) */}
        {[
          {
            title: "🏫 School",
            text: "Developed interest in electronics and science fundamentals."
          },
          {
            title: "🎓 College",
            text: "Studying ECE with focus on communication systems and programming."
          },
          {
            title: "🛠 Projects",
            text: "Building IoT and embedded systems projects for real-world applications."
          },
          {
            title: "🚀 Future Goal",
            text: "To become an embedded systems engineer creating innovative solutions."
          }
        ].map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="bg-[#112240] p-6 rounded-xl 
            border border-transparent
            shadow-md shadow-black/20
            hover:scale-105 
            hover:border-primary
            hover:shadow-primary/50 hover:shadow-xl
            transition duration-300"
          >
            <h4 className="text-xl font-semibold text-primary">
              {item.title}
            </h4>
            <p className="text-gray-400 mt-2">
              {item.text}
            </p>
          </div>
        ))}

      </div>

    </section>
  );
}

export default About;