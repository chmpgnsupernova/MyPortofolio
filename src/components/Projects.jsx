import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // --- CAROUSEL LOGIC ---
  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === selectedProject.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? selectedProject.images.length - 1 : prev - 1));
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  // --- PROJECT DATA ---
  const projects = [ 
   { 
      id: 1, 
      title: "Moodlens", 
      category: "Mobile App / AI & Mental Health",
      desc: "AI-based mental health tracking app detecting real-time facial emotions.", 
      details: "In this project, I acted as a Front-End Specialist, developing core UI components and pages using Jetpack Compose. I also took on a Full-Stack role for the critical 'Reflection' and 'Journal' features, handling the end-to-end logic from the user interface to data persistence, ensuring a seamless experience for emotional tracking.",
      tech: ["Kotlin", "Jetpack Compose", "TensorFlow Lite"], 
      thumbnail: "/projects/Moodlens.png",
      images: [
        "/projects/Moodlens.png",
        "/projects/Moodlens_1.png",        
        "/projects/Moodlens_2.png",        
        "/projects/Moodlens_3.png",        
        "/projects/Moodlens_4.png",
        "/projects/Moodlens_5.png"         
         
      ]
    },
    { 
      id: 2, 
      title: "ByBrandy", 
      category: "Web App / E-Commerce & Rental Platform",
      desc: "Laravel-based hybrid fashion platform for custom gown rental and sales.", 
      details: "I served as the Full-Stack Engineer responsible for the entire Admin Panel architecture. My primary focus was managing the complex data flow between the admin interface and the database. This included building systems for real-time product management, order processing, and user validation to ensure accurate inventory tracking.",
      tech: ["Laravel (PHP)", "Bootstrap", "MySQL"], 
      thumbnail: "/projects/ByBrandy.png",
      images: [
        "/projects/ByBrandy.png",
        "/projects/ByBrandy_1.png",        
        "/projects/ByBrandy_2.png",        
        "/projects/ByBrandy_3.png",
        "/projects/ByBrandy_4.png",
        "/projects/ByBrandy_5.png"          
      ]
    },
    { 
      id: 3, 
      title: "Holinery", 
      category: "Mobile App Prototype / UI/UX",
      desc: "Mobile app prototype of a culinary encyclopedia focused on preserving traditional recipes.", 
      details: "Acting as the Team Leader, I spearheaded the UI/UX conceptualization and feature roadmap. I designed the majority of the prototype pages (High-Fidelity), focusing on intuitive user journeys for culinary exploration and ensuring a cohesive visual identity across the application.",
      tech: ["Figma", "UI/UX Design", "Prototyping"], 
      thumbnail: "/projects/Holinery.png",
      images: [
        "/projects/Holinery.png", 
        "/projects/Holinery_1.png",        
        "/projects/Holinery_2.png",        
        "/projects/Holinery_3.png",
        "/projects/Holinery_4.jpeg"         
         
      ]
    },
    { 
      id: 4, 
      title: "Beautiful Central Java", 
      category: "Web Design / Tourism",
      desc: "Tourism web portal showcasing the beauty of priority destinations in Central Java.", 
      details: "I specialized in Front-End Development with a strong emphasis on UI/UX Design. I crafted a responsive, immersive interface that highlights the cultural beauty of Central Java, ensuring an optimal user experience using Bootstrap.",
      tech: ["HTML5", "CSS3", "JavaScript", "Bootstrap 5"], 
      thumbnail: "/projects/BCJ.png",
      images: [
        "/projects/BCJ.png", 
        "/projects/BCJ_1.png",        
        "/projects/BCJ_2.png",        
        "/projects/BCJ_3.png"         
      ]
    },
    { 
      id: 5, 
      title: "Rehub", 
      category: "UI/UX Design / E-Health & Rehabilitation",
      desc: "Digital rehabilitation ecosystem platform connecting medical and mental services with ensured privacy.", 
      details: "I focused heavily on the user-centric modules, specifically designing the Dashboard, Statistics, and 'MyPlan' pages. I was responsible for prototyping approximately 17 out of 30 total pages, defining the core user experience for tracking rehabilitation progress and therapy schedules.",
      tech: ["Figma", "UI/UX Design", "Prototyping"], 
      thumbnail: "/projects/Rehub.png",
      images: [
        "/projects/Rehub.png", 
        "/projects/Rehub_1.png",        
        "/projects/Rehub_2.png",        
        "/projects/Rehub_3.png",
        "/projects/Rehub_4.png"         
         
      ]
    }
  ];

  return (
    <section id="projects" className="container mx-auto px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
      
      {/* GRID KARTU PROJECT */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj) => (
          <div 
            key={proj.id} 
            onClick={() => openModal(proj)} 
            className="bg-card border border-border rounded-2xl overflow-hidden hover:border-accent transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
          >
            {/* THUMBNAIL DEPAN (Tetap Asli/Cover) */}
            <div className="h-48 overflow-hidden bg-gray-900 relative">
              <img src={proj.thumbnail} alt={proj.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <span className="text-accent font-bold px-5 py-2 border border-accent rounded-full bg-black/50 backdrop-blur-md transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  View Details
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors">{proj.title}</h3>
              <p className="text-xs text-text-muted mb-3 uppercase tracking-wider">{proj.category}</p>
              <p className="text-text-muted text-sm mb-4 line-clamp-2">{proj.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- MODAL POP-UP --- */}
      {selectedProject && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={() => setSelectedProject(null)}></div>

          {/* Wrapper Modal */}
          <div className="relative bg-card border border-border rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in zoom-in duration-300 no-scrollbar flex flex-col md:flex-row overflow-hidden">
            
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:text-accent hover:bg-black transition-colors z-50">
              <X size={24} />
            </button>

            {/* --- BAGIAN KIRI: CAROUSEL GAMBAR (ASPECT VIDEO 16:9) --- */}
            {/* - aspect-video: Memaksa rasio 16:9
                - w-full: Lebar ngikutin container
                - bg-zinc-900: Background gelap kalau gambar gak full (misal screenshot HP)
            */}
            <div className="w-full md:w-1/2 bg-zinc-900 relative group aspect-video flex items-center justify-center overflow-hidden">
              <img 
                src={selectedProject.images[currentImageIndex]} 
                alt={`Slide ${currentImageIndex}`} 
                className="w-full h-full object-contain" // object-contain biar gambar full kelihatan (gak ke-crop) dalam kotak 16:9
              />
              
              {selectedProject.images.length > 1 && (
                <>
                  <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-accent hover:text-black transition-colors opacity-0 group-hover:opacity-100">
                    <ChevronLeft size={24} />
                  </button>
                  <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-accent hover:text-black transition-colors opacity-0 group-hover:opacity-100">
                    <ChevronRight size={24} />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? "bg-accent w-4" : "bg-white/50 hover:bg-white"}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* --- BAGIAN KANAN: DETAIL TEXT --- */}
            <div className="w-full md:w-1/2 p-8 overflow-y-auto bg-card flex flex-col">
              <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
              <p className="text-accent text-sm font-medium mb-6 uppercase tracking-wider">{selectedProject.category}</p>

              <div className="mb-8">
                <h4 className="text-white font-semibold mb-3">Project Overview</h4>
                <p className="text-text-muted leading-relaxed text-sm md:text-base text-justify">
                  {selectedProject.details}
                </p>
              </div>

              <div className="mb-8 mt-auto">
                <h4 className="text-white font-semibold mb-3">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t, i) => (
                    <span key={i} className="bg-border text-text-muted px-3 py-1 rounded-md text-sm hover:text-white transition-colors cursor-default">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;