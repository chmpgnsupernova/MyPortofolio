const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-main/90 backdrop-blur-md z-50 border-b border-border flex items-center">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">
          Portfolio<span className="text-accent">.</span>
        </h2>
        
        <ul className="hidden md:flex gap-8">
          {['About', 'Projects', 'Experience'].map((item) => (
            <li key={item}>
              <a 
                href={`#${item.toLowerCase()}`} 
                className="text-text-muted text-sm font-medium hover:text-accent transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        <button className="md:hidden text-text-muted">☰</button>
      </div>
    </nav>
  );
};
export default Navbar;