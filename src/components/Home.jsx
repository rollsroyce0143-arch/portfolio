import { useEffect, useState } from "react";

function Home() {
  const text = "Crafting Smart Tech Experiences";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#00ffcc33_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Glow Background */}
      <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-primary opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-80 h-80 md:w-96 md:h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Content */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
          Karthick M
        </span>
      </h1>

      <h2 className="text-xl md:text-2xl mt-4 font-medium text-gray-300 h-8">
        {displayText}
      </h2>

      <p className="mt-4 text-gray-400 max-w-xl text-sm md:text-base">
        I am an ECE student passionate about building real-world solutions using
        embedded systems, IoT, and software development
      </p>
    </section>
  );
}

export default Home;