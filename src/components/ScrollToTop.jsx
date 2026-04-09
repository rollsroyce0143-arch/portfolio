import { useEffect, useState } from "react";

function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        showButton
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <button
        onClick={scrollTop}
        className="relative p-4 rounded-full bg-primary text-black 
        shadow-lg shadow-primary/40 
        hover:scale-110 hover:shadow-primary/80 
        transition duration-300 animate-float"
      >
        {/* Glow Pulse */}
        <span className="absolute inset-0 rounded-full bg-primary opacity-30 animate-ping"></span>

        {/* Arrow Icon (SVG) */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 relative z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </div>
  );
}

export default ScrollToTop;