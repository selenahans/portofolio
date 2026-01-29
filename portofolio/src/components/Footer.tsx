const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center ">
      <h1 className="text-2xl font-bold text-[#675D54]"> Selena's Portofolio </h1>
      {/* <div className="flex gap-7 text-[#A39383]">
        <a href="#beranda">home</a>
        <a href="#tentang">about me</a>
        <a href="#speciality">speciality</a>
        <a href="#project">project</a>
      </div> */}
      <div className="flex items-center gap-3">
        <a href="https://github.com/selenahans">
          <i className="ri-github-fill ri-2x text-[#A39383] transition-all duration-300 ease-in-out hover:scale-125 hover:text-[#675D54]"></i>
        </a>
        <a href="https://www.instagram.com/selenahans_/ ">
          <i className="ri-instagram-fill ri-2x text-[#A39383] transition-all duration-300 ease-in-out hover:scale-125 hover:text-[#675D54]"></i>
        </a>
        <a href="https://www.linkedin.com/in/selenahans/">
          <i className="ri-linkedin-fill ri-2x text-[#A39383] transition-all duration-300 ease-in-out hover:scale-125 hover:text-[#675D54]"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
