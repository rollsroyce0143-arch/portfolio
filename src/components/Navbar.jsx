import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 100;
          if (window.scrollY >= top) {
            setActive(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    active === id ? "text-primary" : "hover:text-primary";

  return (
    <nav className="fixed w-full bg-white/5 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-2xl font-bold">
          <span className="text-white">Karthick</span>{" "}
          <span className="text-primary">M</span>
        </h1>

        <ul className="flex space-x-6">
          <li><a href="#home" className={linkClass("home")}>Home</a></li>
          <li><a href="#about" className={linkClass("about")}>About</a></li>
          <li><a href="#skills" className={linkClass("skills")}>Skills</a></li>
          <li><a href="#projects" className={linkClass("projects")}>Projects</a></li>
          <li><a href="#contact" className={linkClass("contact")}>Contact</a></li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;