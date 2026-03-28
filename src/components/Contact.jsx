import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_z4keihg",
        "template_3f6dyp1",
        form.current,
        "GmQInrkKFQ002Dtcg"
      )
      .then(
        () => {
          alert("Message sent successfully ✅");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6 bg-secondary text-white">

      {/* Title */}
      <h2 className="text-3xl text-primary text-center mb-4">
        Have an Idea? Let’s Connect
      </h2>

      <p className="text-center text-gray-400 mb-12">
        I'm open to collaborations, innovative projects, and exciting opportunities.
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-stretch">

        {/* LEFT SIDE */}
        <div className="flex flex-col gap-6">

          {/* Contact Info */}
          <div className="flex-1 bg-[#112240] p-6 rounded-xl 
          border border-transparent
          shadow-md shadow-black/20
          hover:border-primary hover:shadow-primary/50 hover:shadow-xl
          transition duration-300">

            <h3 className="text-xl font-semibold text-primary mb-3">
              Contact Info
            </h3>

            <p className="text-gray-400 mb-2">📧 m.j.karthick2006@gmail.com</p>
            <p className="text-gray-400 mb-2">📱 +91 88837 89915</p>
            <p className="text-gray-400">📍 Chennai, Tamil Nadu, India</p>
          </div>

          {/* Social */}
          <div className="flex-1 bg-[#112240] p-6 rounded-xl 
          border border-transparent
          shadow-md shadow-black/20
          hover:border-primary hover:shadow-primary/50 hover:shadow-xl
          transition duration-300">

            <h3 className="text-xl font-semibold text-primary mb-3">
              Connect Online
            </h3>

            <div className="flex flex-col gap-2">
              <a
                href="https://www.linkedin.com/in/m-karthick-69585a353"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                🌐 LinkedIn
              </a>

              <a
                href="https://github.com/rollsroyce0143-arch"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex">

          <div className="w-full bg-[#112240] p-6 rounded-xl 
          border border-transparent
          shadow-md shadow-black/20
          hover:border-primary hover:shadow-primary/50 hover:shadow-xl
          transition duration-300 flex flex-col justify-between">

            <h3 className="text-xl font-semibold text-primary mb-4">
              Work Together
            </h3>

            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">

              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                required
                className="p-3 rounded bg-[#0a192f] border border-gray-600 focus:border-primary outline-none"
              />

              <input
                type="email"
                name="from_email"
                placeholder="Your Email"
                required
                className="p-3 rounded bg-[#0a192f] border border-gray-600 focus:border-primary outline-none"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="p-3 rounded bg-[#0a192f] border border-gray-600 focus:border-primary outline-none"
              ></textarea>

              <button
                type="submit"
                className="mt-2 bg-gradient-to-r from-cyan-400 to-green-400 text-black py-2 rounded-lg
                shadow-lg shadow-cyan-400/40
                hover:scale-105 hover:shadow-cyan-400/80
                transition duration-300"
              >
                Send Message
              </button>

            </form>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Contact;