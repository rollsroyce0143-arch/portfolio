import { useEffect, useState } from "react";

function Home() {
  const text = "Embedded Systems Enthusiast";
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
      className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#00ffcc33_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-primary opacity-20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-cyan-500 opacity-20 blur-3xl rounded-full bottom-10 right-10"></div>

      {/* Content */}
      <h1 className="text-5xl md:text-6xl font-bold">
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
          Karthick M
        </span>
      </h1>

      {/* ✅ FIXED HERE (USE displayText) */}
      <h2 className="text-2xl mt-4 font-medium text-gray-300 h-8">
        {displayText}
      </h2>

      <p className="mt-4 font-light text-gray-400 max-w-xl">
        Building smart electronic solutions using code & circuits
      </p>

      {/* Buttons */}
      <div className="mt-6 flex gap-4">
        <button className="bg-primary text-black px-6 py-2 rounded shadow-lg shadow-primary/40 hover:scale-105 hover:shadow-primary/80 transition duration-300">
          View Projects
        </button>

        <button className="border border-primary px-6 py-2 rounded hover:bg-primary hover:text-black transition duration-300">
          Contact Me
        </button>
      </div>
    </section>
  );
}

export default Home;