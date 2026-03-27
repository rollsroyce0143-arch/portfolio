function Skills() {
  const skills = [
    { name: "C", level: "80%" },
    { name: "C++", level: "75%" },
    { name: "Java", level: "70%" },
    { name: "Python", level: "65%" },
    { name: "Arduino", level: "85%" },
    { name: "MATLAB", level: "60%" },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto">

      {/* Heading Animation */}
      <h2 data-aos="fade-up" className="text-3xl text-primary mb-10 text-center">
        Skills
      </h2>

      {/* Skills Animation */}
      {skills.map((skill, index) => (
        <div key={index} className="mb-6" data-aos="fade-right">
          <div className="flex justify-between mb-1">
            <span>{skill.name}</span>
            <span>{skill.level}</span>
          </div>

          <div className="w-full bg-gray-700 rounded h-3">
            <div
              className="bg-primary h-3 rounded transition-all duration-1000"
              style={{ width: skill.level }}
            ></div>
          </div>
        </div>
      ))}

    </section>
  );
}

export default Skills;