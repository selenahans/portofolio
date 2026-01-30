import DataImage from "../data";
import { listTools } from "../data";
import { listProyek } from "../data";
import { listSpeciality } from "../data";
const About = () => {
  return (
    <>
      <div
        className="hero grid md:grid-cols-2 items-center pt-32 xl:gap-0 gap-6 grid-cols-1 max-w-6xl mx-auto"
        id="tentang"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Selena Hans</h1>
          {/* <div className="flex items-center gap-3 mb-6 bg-amber-300 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.HeroImage}
              alt="Hero"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>lorem ipsum im so happy to see you!</q>
          </div> */}
          <p className="text-base/loose mb-6 font-semibold">
            ● Based in Surabaya, Indonesia
          </p>
          <p className="text-base/loose mb-6 opacity-50">
            As a third-year Informatics Engineering student at the University of
            Surabaya, I have a deep interest in Software Engineering, UI/UX
            Design, and Graphic Design. My main focus is on developing
            efficient, visually appealing, and user-friendly interfaces and
            systems. With hands-on experience in UI/UX and web development, I am
            committed to continuous learning, exploring new technologies, and
            adapting quickly to challenges in the tech industry.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-[#E5DFD3] p-4 rounded-2xl hover:bg-[#A39383] hover:scale-110 transition-transform duration-300 text-[#232323]"
            >
              Download CV <i className="ri-download-line ri-lg "></i>
            </a>
            <a
              href="#"
              className="bg-[#E5DFD3] p-4 rounded-2xl hover:bg-[#A39383] hover:scale-110 transition-transform duration-300 text-[#232323]"
            >
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>
      <div className="career mt-15 py-10 max-w-7xl mx-auto" id="career">
        <h1
          className="text-4xl font-bold mb-10 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Career
        </h1>
      </div>
      <div></div>
      <div className="education mt-15 py-10 max-w-7xl mx-auto" id="education">
        <h1
          className="text-4xl font-bold mb-10 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Education
        </h1>
        <div className="w-4/5 mx-auto flex flex-col gap-8">
          {listSpeciality.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-[#E5DFD3] rounded-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={item.gambar}
                alt={item.judul}
                className="w-20 h-20 object-contain rounded-md"
                loading="lazy"
              />
              <div>
                <h1 className="text-2xl font-bold mb-2">{item.judul}</h1>
                <p className="text-base/loose opacity-70">{item.desk}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
