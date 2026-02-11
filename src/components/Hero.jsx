// HAPUS IMPORT LUCIDE-REACT DISINI. JANGAN ADA IMPORT APAPUN DARI LUCIDE.

const Hero = () => {
  const data = {
    role: "Front-End Engineer",
    headline: "Building Digital Experiences",
    desc: "Passionate about creating beautiful, responsive, and user-friendly web applications with a focus on seamless user experiences.",
    links: { 
      github: "https://github.com/chmpgnsupernova", 
      linkedin: "https://www.linkedin.com/in/fransiskus-asisi-brian-nugrah-mariarvin-ab852828a/", 
      email: "https://mail.google.com/mail/?view=cm&fs=1&to=brianmariarvin@gmail.com" 
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden bg-neutral-950">
      
      <style>{`
        @keyframes drift {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(50px, 50px) scale(1.1); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        @keyframes drift-reverse {
          0% { transform: translate(0px, 0px) scale(1); }
          50% { transform: translate(-50px, -20px) scale(1.2); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-drift {
          animation: drift 10s ease-in-out infinite;
        }
        .animate-drift-reverse {
          animation: drift-reverse 12s ease-in-out infinite;
        }
      `}</style>

      {/* 1. Base Dark Green Gradient (Static) - Supaya ga hitam polos */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-green-950/30 to-black z-0"></div>

      {/* 2. Giant Moving Orb Top-Left (Bright Green) */}
      <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-green-600/40 rounded-full blur-[100px] animate-drift z-0 mix-blend-screen"></div>

      {/* 3. Giant Moving Orb Bottom-Right (Emerald) */}

      {/* 4. Center Glow (Subtle) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-900/20 rounded-full blur-[120px] z-0"></div>

      {/* --- CONTENT (Z-INDEX 10 BIAR DI ATAS BACKGROUND) --- */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Available Badge */}
        <div className="flex items-center gap-2 bg-green-950/50 border border-green-500/30 px-4 py-2 rounded-full mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(34,197,94,0.2)]">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></span>
          <span className="text-sm text-green-100 font-medium">Available for work</span>
        </div>

        {/* Main Text */}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-white drop-shadow-xl">
          {data.role} <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 animate-pulse">
            {data.headline}
          </span>
        </h1>

        <p className="text-gray-300 text-lg max-w-xl mb-10 leading-relaxed font-medium drop-shadow-md">
          {data.desc}
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto">
          <a 
            href={data.links.email} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 text-black px-8 py-3 rounded-lg font-bold hover:bg-green-400 transition-all hover:scale-105 shadow-[0_0_30px_rgba(34,197,94,0.5)]"
          >
            Contact Me
          </a>
          
          <a 
            href={data.links.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-black/40 border border-green-500/50 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-500/10 hover:border-green-400 transition-all hover:scale-105 backdrop-blur-md"
          >
            View GitHub
          </a>
        </div>
      </div>

    </section>
  );
};
export default Hero;