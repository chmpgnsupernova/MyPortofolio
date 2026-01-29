const About = () => {
const skills = [
    "React", "Tailwind CSS",          
    "Laravel", "PHP", "MySQL",         
    "Kotlin", "Jetpack Compose",      
    "Java", "Android XML",             
    "Bootstrap",                       
    "Figma", "UI/UX Design", "Git"  
  ];  
  return (
    <section id="about" className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16">About Me</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        <div className="md:pr-8">
          <p className="text-text-muted leading-relaxed text-justify mb-4">
            I am a Front-End Engineer dedicated to turning complex designs into smooth and responsive web interfaces. Specializing in the React ecosystem, I focus on creating user experiences that are not only visually appealing but also fast and accessible.
          </p>
          <p className="text-text-muted leading-relaxed text-justify mb-8">
            I approach challenges with a solution-oriented mindset. I take ownership of my work, paying close attention to detail to ensure bug-free and maintainable code.
          </p>
          
          <h3 className="text-xl font-semibold mb-4 text-white">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="bg-card border border-border px-4 py-2 rounded-full text-sm text-text-muted hover:border-accent hover:text-accent transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-64 h-64 mx-auto md:w-80 md:h-80">
          <img 
            src="/Profile_Picture.jpg" 
            alt="Profile" 
            className="w-full h-full object-cover rounded-xl relative z-10 bg-gray-800" 
          />
          <div className="absolute top-4 left-4 w-full h-full border-2 border-accent rounded-xl z-0"></div>
        </div>

      </div>
    </section>
  );
};
export default About;