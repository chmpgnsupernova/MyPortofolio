import { Megaphone, Handshake, Package, Trophy, Award, Database, Brain, Globe, CheckCircle, ExternalLink, ImageIcon } from 'lucide-react';

const Experience = () => {
  // --- KOLOM KIRI: ORGANISASI (Tetap) ---
  const organizations = [
    { 
      id: 1, 
      role: "Floor Director", 
      company: "Dewa United (Event Division)", 
      desc: "Demonstrated strong leadership by orchestrating on-ground operations and directing crew movements. Responsible for real-time decision-making to ensure rundown precision.", 
      icon: <Megaphone size={20} /> 
    },
    { 
      id: 2, 
      role: "Liaison Officer (LO)", 
      company: "Tangerang Hawks Basketball", 
      desc: "Acted as the primary bridge between the committee, athletes, and VIP guests. Excelled in interpersonal communication and hospitality under high pressure.", 
      icon: <Handshake size={20} /> 
    },
    { 
      id: 3, 
      role: "Equipment Coordinator", 
      company: "Feel d'Flow 2024", 
      desc: "Led the logistics division, managing comprehensive inventory tracking and resource allocation. Showcased meticulous attention to detail to prevent technical shortages.", 
      icon: <Package size={20} /> 
    },
    { 
      id: 4, 
      role: "Logistics Staff (Awarded Best Staff)", 
      company: "OMB UMN (New Student Orientation)", 
      desc: "Served in the logistics division for the university's largest annual event. Recognized as the 'Best Logistics Staff' for exceptional dedication, rapid agility, and proactive support during the orientation week.", 
      icon: <Award size={20} /> 
    },
    { 
      id: 5, 
      role: "Logistics Staff", 
      company: "Feel d'Flow 2023", 
      desc: "Supported the technical execution of the event by managing stage equipment and inventory. Demonstrated reliability and strong teamwork in a fast-paced environment before being promoted to Coordinator in the following year.", 
      icon: <CheckCircle size={20} /> 
    }
  ];

  // --- KOLOM KANAN: AWARDS & CERTIFICATES (Updated Image Logic) ---
  const awards = [
    {
      id: 1,
      title: "Top 5 Finalist UI/UX Design",
      issuer: "ISFEST (Healthcare Sector)",
      desc: "Secured a top position in a national design competition by creating an accessible and user-centric mobile solution for healthcare services.",
      icon: <Trophy size={20} />,
      img: "/certificates/Top_5_Finalist.jpg" // Sesuai request
    },
    {
      id: 2,
      title: "2nd Place Career Path Competition",
      issuer: "Career Development Center (CDC)",
      desc: "Awarded for demonstrating exceptional strategic planning and presenting a comprehensive professional roadmap in the technology industry.",
      icon: <Trophy size={20} />,
      img: "/certificates/2nd_Winner.jpg" // Rename file lo jadi ini
    },
    {
      id: 3,
      title: "Huawei Certified in Database",
      issuer: "Huawei Talent / ICT Academy",
      desc: "Validated proficiency in database management systems (DBMS), SQL architecture, and data modeling concepts.",
      icon: <Database size={20} />,
      img: "/certificates/Database_Certificate.jpg" // Rename file lo jadi ini
    },
    {
      id: 4,
      title: "Huawei Certified in AI",
      issuer: "Huawei Talent / ICT Academy",
      desc: "Certified understanding of Artificial Intelligence fundamentals, Machine Learning algorithms, and Neural Networks.",
      icon: <Brain size={20} />,
      img: "/certificates/Artificial_Intellegence_Certificate.jpg" // Rename file lo jadi ini
    },
    {
      id: 5,
      title: "EF SET Certificate (C2 Proficient)",
      issuer: "EF Standard English Test",
      desc: "Achieved the highest level of English proficiency (C2), demonstrating mastery suitable for professional and academic international environments.",
      icon: <Globe size={20} />,
      // Khusus EF tetep Link
      href: "https://cert.efset.org/id/h7qVrd" 
    }
  ];

  return (
    <section id="experience" className="container mx-auto px-6 py-20">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* --- KOLOM KIRI: ORGANIZATIONAL --- */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-accent">#</span> Organizational
          </h2>
          <div className="flex flex-col gap-6">
            {organizations.map((org) => (
              <div key={org.id} className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-colors group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 flex items-center justify-center bg-accent/10 text-accent rounded-lg shrink-0 group-hover:bg-accent group-hover:text-black transition-colors">
                    {org.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{org.role}</h3>
                    <h4 className="text-accent text-sm font-medium mb-2">{org.company}</h4>
                    <p className="text-text-muted text-sm leading-relaxed text-justify">
                      {org.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- KOLOM KANAN: AWARDS & CERTIFICATES --- */}
        <div>
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <span className="text-accent">#</span> Awards & Certs
          </h2>
          <div className="flex flex-col gap-6">
            {awards.map((awd) => {
              // Logic: Cek apakah dia punya link (href) ATAU gambar (img)
              const linkTarget = awd.href || awd.img;
              const isClickable = !!linkTarget;

              // Render sebagai <a> kalau bisa diklik, atau <div> kalau ga ada link/gambar
              const Wrapper = isClickable ? 'a' : 'div';
              
              return (
                <Wrapper 
                  key={awd.id} 
                  href={linkTarget}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`bg-card p-6 rounded-xl border border-border transition-all group relative block ${isClickable ? 'hover:border-accent/50 hover:-translate-y-1 cursor-pointer' : ''}`}
                >
                  {/* Icon Indikator (Pojok Kanan Atas) */}
                  {isClickable && (
                    <div className="absolute top-4 right-4 text-gray-500 group-hover:text-accent opacity-0 group-hover:opacity-100 transition-all">
                      {/* Kalau ada gambar pake icon Image, kalau link pake icon Panah */}
                      {awd.img ? <ImageIcon size={18} /> : <ExternalLink size={18} />}
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 flex items-center justify-center bg-zinc-800 text-gray-300 rounded-lg shrink-0 group-hover:bg-yellow-500 group-hover:text-black transition-colors">
                      {awd.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-accent transition-colors">
                        {awd.title}
                      </h3>
                      <h4 className="text-gray-400 text-sm font-medium mb-2">{awd.issuer}</h4>
                      <p className="text-text-muted text-sm leading-relaxed text-justify">
                        {awd.desc}
                      </p>
                      
                      {/* Label Kecil "View Certificate" biar user ngeh bisa diklik */}
                      {isClickable && (
                        <span className="inline-block mt-3 text-xs font-semibold text-accent border border-accent/30 px-2 py-1 rounded bg-accent/5">
                          {awd.img ? "View Image" : "View Credential"}
                        </span>
                      )}
                    </div>
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;