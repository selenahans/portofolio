import DataImage from "../data";
import { listEducation } from "../data";
import { listExperience } from "../data";
import ExperienceSection from "../components/Experience";
import Dauroma from "../components/Dauroma";

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
          <p className="text-base/loose mb-6 opacity-50 whitespace-pre-line">
            I’m an Informatics Engineering student at the University of
            Surabaya, dedicated to the intersection of Software Engineering,
            UI/UX, and Graphic Design. I specialize in building digital
            experiences that are not only technically robust but also visually
            compelling and user-centric. <br />
            <br />
            My primary focus is on developing efficient systems and intuitive
            interfaces using a modern tech stack. I believe that great software
            is built on the balance between clean, scalable code and a seamless
            user journey. <br />
            <br />I blend my technical skills in web development with a strong
            design sensibility and proactive communication. Whether working as a
            teaching assistant or a developer, I thrive in collaborative
            environments and am committed to continuous learning to solve
            real-world challenges in the tech industry.
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
          className="w-125 md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          loading="lazy"
        />
      </div>

      <div></div>

      {/* <div className="experience mt-15 py-10 max-w-7xl mx-auto" id="experience">
        <h1
          className="text-4xl font-bold mb-10 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Experience
        </h1>

        <div className="w-4/5 mx-auto flex flex-col gap-8">
          {[...listExperience]
            .sort((a, b) => b.id - a.id)
            .map((item) => (
              <ExperienceItem key={item.id} item={item} />
            ))}
        </div>
      </div> */}
      <ExperienceSection listExperience={listExperience} />

      <div></div>
      <div className="education mt-15 py-10 max-w-7xl mx-auto" id="education">
        <h1
          className="text-4xl font-bold mb-10 text-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Education
        </h1>
        <div
          className="w-4/5 mx-auto mb-12 flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-[#372922] text-lg mb-4 text-center">
            A brief overview of my academic journey and formal qualifications.
          </p>
          <div className="w-full border-b border-dashed border-slate-300"></div>
        </div>
        <div className="w-4/5 mx-auto flex flex-col gap-8">
          {[...listEducation]
            .sort((a, b) => b.id - a.id)
            .map((item, index) => (
              <div
                key={item.id}
                className="group flex flex-col md:flex-row items-center md:items-start gap-6 p-6 bg-[#f1efe9] rounded-2xl border border-transparent hover:border-slate-300 hover:bg-[#E5DFD3] hover:shadow-xl transition-all duration-500 ease-in-out transform hover:-translate-y-2"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="1000"
                data-aos-once="true"
              >
                {item.gambar && (
                  <div className="relative overflow-hidden rounded-xl bg-white p-2 shadow-sm transition-transform duration-500 group-hover:scale-110">
                    <img
                      src={item.gambar}
                      alt={item.institution}
                      className="w-20 h-20 object-contain"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="text-center md:text-left grow">
                  <h1 className="text-xl font-bold text-[#372d29] group-hover:text-[#524743] transition-colors duration-300">
                    {item.institution}
                  </h1>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm md:text-base text-[#483b32] mt-1">
                    {item.degree && (
                      <span className="font-medium">{item.degree}</span>
                    )}
                    {item.degree && item.major && (
                      <span className="text-[#3D2B1F]">•</span>
                    )}
                    {item.major && <span>{item.major}</span>}
                    {(item.major || item.degree) && item.gpa && (
                      <span className="text-[#3D2B1F]">•</span>
                    )}
                    {item.gpa && (
                      <span className="bg-[#3D2B1F]/10 px-2 py-0.5 rounded-md border border-slate-200 shadow-sm font-medium">
                        GPA: {item.gpa}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm md:text-base mt-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#3D2B1F]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {item.period && <span>{item.period}</span>}
                    </div>
                    {item.period && item.location && (
                      <span className="text-[#3D2B1F]">•</span>
                    )}
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-[#3D2B1F]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {item.location && <span>{item.location}</span>}
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <Dauroma />

      {/* TOOLS -> SOON */}
      {/* <div className="tools mt-15 py-10 max-w-7xl mx-auto" id="tools">
        <h1
          className="text-4xl font-bold mb-10 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Tools
        </h1>
      </div> */}
    </>
  );
};

export default About;
