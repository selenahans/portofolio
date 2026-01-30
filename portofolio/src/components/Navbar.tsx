import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {

      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const textColorClass = active ? 'text-[#F5F5F0]' : 'text-[#675D54]';
  const hoverColorClass = active ? 'hover:text-white' : 'hover:text-black';

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] py-4 px-6 md:px-8 flex flex-col md:flex-row justify-between items-center z-40 transition-all duration-300 rounded-2xl border border-transparent
      ${
        active || isMobileOpen
          ? 'bg-[#675D54]/85 backdrop-blur-lg shadow-xl border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center">

        <div className="logo">
          <h1 className={`text-2xl font-bold transition-colors duration-300 ${isMobileOpen ? 'text-[#F5F5F0]' : textColorClass}`}>
            Selena's Portofolio
          </h1>
        </div>


        <button
          className="md:hidden block focus:outline-none"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >

          <div className={`w-6 h-6 flex flex-col justify-center gap-1.5 ${isMobileOpen || active ? 'text-[#F5F5F0]' : 'text-[#675D54]'}`}>
            <span className={`block w-full h-0.5 rounded-full transition-all duration-300 bg-current ${isMobileOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-full h-0.5 rounded-full transition-all duration-300 bg-current ${isMobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-full h-0.5 rounded-full transition-all duration-300 bg-current ${isMobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </div>
        </button>
      </div>

      <ul
        className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 w-full md:w-auto transition-all duration-500 ease-in-out overflow-hidden md:overflow-visible
        ${isMobileOpen ? 'max-h-[300px] opacity-100 mt-6 pb-2' : 'max-h-0 opacity-0 md:max-h-full md:opacity-100 md:mt-0 md:pb-0'}`}
      >
        {[
          { label: 'home', path: '/' },
          { label: 'project', path: '/projects' },
          { label: 'about', path: '/about' },
        ].map((item) => (
          <li key={item.label} className="w-full md:w-auto text-center">
            <Link
              to={item.path}
              className={`font-medium text-lg capitalize transition-colors duration-300
              ${isMobileOpen ? 'text-[#F5F5F0] hover:text-white' : `${textColorClass} ${hoverColorClass}`}`}
              onClick={() => setIsMobileOpen(false)} 
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;