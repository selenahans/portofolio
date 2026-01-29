import {useState, useEffect} from 'react';

const Navbar = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[]);

  return (
    /* Perubahan Utama: 
       - Menambahkan 'left-1/2 -translate-x-1/2' untuk posisi tengah.
       - Menambahkan 'w-[95%] max-w-[1200px]' agar lebar tidak full (chrome/desktop aman).
       - Menambahkan 'top-4' agar ada jarak dari atas (floating effect).
       - Menambahkan 'rounded-full' atau 'rounded-2xl' agar lebih modern.
    */
    <div className={`navbar fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-[1200px] py-4 px-8 flex justify-between items-center z-40 transition-all duration-300 rounded-2xl 
      ${active ? 'bg-white/20 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      
      <div className="logo">
        <h1 className="text-2xl font-bold text-[#675D54]">Selena's Portofolio</h1>
      </div>

      <ul className={`menu flex font-light items-center gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0
      md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-2xl md:bg-transparent transition-all md:transition-none z-40 
      ${active ? 'top-0 opacity-100' : '-top-10 opacity-0'}`}>
        <li>
          <a className="font-medium sm:text-lg text-base hover:text-white transition-colors" href="#home">home</a>
        </li>
        <li>
          <a className="font-medium sm:text-lg text-base hover:text-white transition-colors" href="#tentang">project</a>
        </li>
        <li>
          <a className="font-medium sm:text-lg text-base hover:text-white transition-colors" href="#project">project</a>
        </li>
        <li>
          <a className="font-medium sm:text-lg text-base hover:text-white transition-colors" href="#about">about me</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;