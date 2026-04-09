import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 120;
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
    `cursor-pointer ${
      active === id ? "text-primary" : "hover:text-primary"
    }`;

  // Smooth scroll
  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="fixed w-full bg-white/5 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="text-white">Karthick</span>{" "}
          <span className="text-primary">M</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          <li onClick={() => handleClick("home")} className={linkClass("home")}>Home</li>
          <li onClick={() => handleClick("about")} className={linkClass("about")}>About</li>
          <li onClick={() => handleClick("skills")} className={linkClass("skills")}>Skills</li>
          <li onClick={() => handleClick("projects")} className={linkClass("projects")}>Projects</li>
          <li onClick={() => handleClick("contact")} className={linkClass("contact")}>Contact</li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <span className="text-2xl text-white">
              {menuOpen ? "✖" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a192f] px-6 pb-4 space-y-4 text-center">

          <div onClick={() => handleClick("home")} className={linkClass("home")}>Home</div>
          <div onClick={() => handleClick("about")} className={linkClass("about")}>About</div>
          <div onClick={() => handleClick("skills")} className={linkClass("skills")}>Skills</div>
          <div onClick={() => handleClick("projects")} className={linkClass("projects")}>Projects</div>
          <div onClick={() => handleClick("contact")} className={linkClass("contact")}>Contact</div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;