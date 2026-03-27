function Achievements() {
  return (
    <section className="py-20 px-6 text-center">

      <h2 data-aos="fade-up" className="text-3xl text-primary mb-10">
        Achievements
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div data-aos="zoom-in" className="bg-[#112240] p-6 rounded-lg">
          <h3 className="text-xl font-bold">Hackathons</h3>
          <p className="mt-2 text-gray-400">Participated in multiple events</p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="200" className="bg-[#112240] p-6 rounded-lg">
          <h3 className="text-xl font-bold">Certifications</h3>
          <p className="mt-2 text-gray-400">Completed technical courses</p>
        </div>

        <div data-aos="zoom-in" data-aos-delay="400" className="bg-[#112240] p-6 rounded-lg">
          <h3 className="text-xl font-bold">Awards</h3>
          <p className="mt-2 text-gray-400">Academic & technical achievements</p>
        </div>

      </div>
    </section>
  );
}

export default Achievements;