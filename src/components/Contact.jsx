function Contact() {
  return (
    <section id="contact" className="py-20 px-6 text-center">

      <h2 data-aos="fade-up" className="text-3xl text-primary mb-6">
        Contact
      </h2>

      <p data-aos="fade-up" data-aos-delay="200" className="text-gray-400 mb-6">
        Feel free to reach out for collaboration or opportunities.
      </p>

      <div className="space-y-3">

        <p data-aos="fade-right">📧 Email: your@email.com</p>
        <p data-aos="fade-right" data-aos-delay="200">💻 GitHub: github.com/yourprofile</p>
        <p data-aos="fade-right" data-aos-delay="400">🔗 LinkedIn: linkedin.com/in/yourprofile</p>

      </div>

    </section>
  );
}

export default Contact;