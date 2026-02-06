import DataImage from "../data";
import { listTools } from "../data";
import { listProyek } from "../data";
import { listSpeciality } from "../data";
import { listEducation } from "../data";
import { listExperience } from "../data";
import { useState } from "react";

const ExperienceItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-[#E5DFD3] rounded-lg w-full transition-all duration-300"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <img
        src={item.logo}
        alt={item.title}
        className="w-20 h-20 object-contain rounded-md shrink-0"
        loading="lazy"
      />
      <div className="flex-1 w-full">
        <h1 className="text-xl font-semibold text-slate-900">{item.title}</h1>

        {/* Baris Pertama: Company & Location */}
        <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-slate-600">
          <span>{item.company}</span>
          <span className="text-slate-300">•</span>
          <span>{item.location}</span>
        </div>

        {/* Baris Kedua: Period & Type */}
        <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-slate-500 mt-1">
          <span>{item.period}</span>
          <span className="text-slate-300">•</span>
          <span>{item.type}</span>
        </div>

        {/* Tombol View Details */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-all flex items-center gap-2"
        >
          {isOpen ? "Hide Details" : "View Details"}
          <i
            className={`ri-arrow-down-s-line transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          ></i>
        </button>

        {/* Konten Detail */}
        {isOpen && (
          <div className="mt-6 space-y-6 border-t border-slate-300/30 pt-4 animate__animated animate__fadeIn">
            {/* Responsibilities */}
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
                Responsibilities
              </h4>
              <ul className="space-y-1">
                {item.details.responsibilities.map((res, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-600 leading-relaxed flex gap-2"
                  >
                    <span className="text-slate-400">•</span> {res}
                  </li>
                ))}
              </ul>
            </div>

            {/* What I Learned */}
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
                Key Learning
              </h4>
              <ul className="space-y-1">
                {item.details.whatILearned.map((learn, idx) => (
                  <li
                    key={idx}
                    className="text-sm text-slate-600 leading-relaxed flex gap-2"
                  >
                    <span className="text-slate-400">•</span> {learn}
                  </li>
                ))}
              </ul>
            </div>

            {/* Impact */}
            <div>
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">
                Impact
              </h4>
              <ul className="space-y-1">
                {item.details.impact.map((imp, idx) => (
                  <li
                    key={idx}
                    className="text-sm font-semibold text-slate-700 leading-relaxed flex gap-2"
                  >
                    <span className="text-slate-400">→</span> {imp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
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

      <div></div>
      <div className="experience mt-15 py-10 max-w-7xl mx-auto" id="experience">
        <h1
          className="text-4xl font-bold mb-10 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Experience
        </h1>
        {/* <div className="w-4/5 mx-auto flex flex-col gap-8">
          {listExperience.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-[#E5DFD3] rounded-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={item.logo}
                alt={item.title}
                className="w-20 h-20 object-contain rounded-md"
                loading="lazy"
              />
              <div>
                <h1 className="text-xl font-semibold text-slate-900">
                  {item.title}
                </h1>
                <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-slate-600">
                  <span>{item.company}</span>
                  <span className="text-slate-300">•</span>
                  <span>{item.location}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-slate-500 mt-1">
                  <span>{item.period}</span>
                  <span className="text-slate-300">•</span>
                  <span>{item.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className="w-4/5 mx-auto flex flex-col gap-8">
          {listExperience.map((item) => (
            <ExperienceItem key={item.id} item={item} />
          ))}
        </div>
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
          {listEducation.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-[#E5DFD3] rounded-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img
                src={item.gambar}
                alt={item.institution}
                className="w-20 h-20 object-contain rounded-md"
                loading="lazy"
              />
              <div>
                <h1 className="text-xl font-semibold text-slate-900">
                  {item.institution}
                </h1>

                {/* Baris Pertama: Degree, Major, GPA */}
                <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-slate-600">
                  <span>{item.degree}</span>
                  <span className="text-slate-300">•</span>
                  <span>{item.major}</span>
                  <span className="text-slate-300">•</span>
                  <span>GPA: {item.gpa}</span>
                </div>

                {/* Baris Kedua: Period & Location */}
                <div className="flex flex-wrap items-center gap-2 text-sm md:text-base text-slate-500 mt-1">
                  <span>{item.period}</span>
                  <span className="text-slate-300">•</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tools mt-15 py-10 max-w-7xl mx-auto" id="tools">
        <h1
          className="text-4xl font-bold mb-10 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Tools
        </h1>
      </div>
    </>
  );
};

export default About;
