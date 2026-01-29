import { Github, Linkedin, Mail } from 'lucide-react';

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
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20">
      
      <div className="flex items-center gap-2 bg-card border border-border px-4 py-2 rounded-full mb-8 animate-in fade-in zoom-in duration-500">
        <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_#22c55e]"></span>
        <span className="text-sm text-gray-300">Available for work</span>
      </div>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 animate-in slide-in-from-bottom-4 duration-700">
        {data.role} <br /> 
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-green-800">
          {data.headline}
        </span>
      </h1>

      <p className="text-text-muted text-lg max-w-xl mb-10 leading-relaxed animate-in slide-in-from-bottom-6 duration-1000">
        {data.desc}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mb-12 w-full sm:w-auto animate-in slide-in-from-bottom-8 duration-1000">
        <a 
          href={data.links.email} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-accent text-black px-6 py-3 rounded-lg font-bold hover:bg-green-400 transition-all hover:scale-105 shadow-[0_0_15px_rgba(34,197,94,0.4)]"
        >
          <Mail size={20} /> Contact Me
        </a>
        
        <a href={data.links.github} target="_blank" className="flex items-center justify-center gap-2 bg-transparent border border-border text-white px-6 py-3 rounded-lg font-semibold hover:border-accent hover:text-accent transition-all hover:scale-105">
          <Github size={20} /> View GitHub
        </a>
      </div>

      <div className="flex gap-6 animate-in fade-in duration-1000 delay-300">
        <a href={data.links.github} target="_blank" className="text-text-muted hover:text-accent transition-colors hover:scale-110"><Github /></a>
        <a href={data.links.linkedin} target="_blank" className="text-text-muted hover:text-accent transition-colors hover:scale-110"><Linkedin /></a>
        <a href={data.links.email} target="_blank" className="text-text-muted hover:text-accent transition-colors hover:scale-110"><Mail /></a>
      </div>
    </section>
  );
};
export default Hero;