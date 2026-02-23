import DataImage from "../data";
import { listProyek } from "../data";
import { listSpeciality } from "../data";

const getYearValue = (year: string | number) => {
  if (typeof year === "number") return year;
  const parsedYear = parseInt(year, 10);
  return Number.isNaN(parsedYear) ? 0 : parsedYear;
};

const Home = () => {
  return (
    <>
      <div
        className="hero grid md:grid-cols-2 items-center pt-32 xl:gap-0 gap-6 grid-cols-1 max-w-6xl mx-auto"
        id="tentang"
      >
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <h1 className="text-5xl/tight font-bold mb-6">Hi, I'm Selena Hans</h1>
          <p className="text-base/loose mb-6 font-semibold">
            ● Based in Surabaya, Indonesia
          </p>
          <p className="text-base/loose mb-6 opacity-50">
            Informatics Engineering student at University of Surabaya with a
            passion for Software Engineering, UI/UX, and Graphic Design. I focus
            on building efficient, user-friendly systems and interfaces through
            continuous learning and tech exploration.
          </p>
          {/* <div className="flex items-center sm:gap-4 gap-2">
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
          </div> */}
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero"
          className="w-125 md:ml-auto animate__animated animate__fadeInUp animate__delay-3s"
          loading="lazy"
        />
      </div>
      <div className="tentang mt-15 py-10 max-w-7xl mx-auto" id="speciality">
        <h1
          className="text-4xl font-bold mb-10 text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Speciality
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

      <div className="proyek mt-15 py-10 max-w-6xl mx-auto" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Recent Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Showcasing a collection of web development, UI/UX, and design projects.
        </p>

        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listProyek
            .sort((a, b) => getYearValue(b.year) - getYearValue(a.year))
            .slice(0, 3)
            .map((proyek) => (
              <a
                href={`/projectdetail/${proyek.slug}`}
                key={proyek.id}
                className="group bg-[#ECE9E5] rounded-2xl overflow-hidden flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={"dad" in proyek ? proyek.dad : 0}
              >
                <div
                  className="bg-[#ECE9E5] rounded-2xl overflow-hidden flex flex-col shadow-sm"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={"dad" in proyek ? proyek.dad : 0}
                >
                  <div className="relative overflow-hidden h-56 flex justify-center items-center p-6">
                    <img
                      src={proyek.thumbnail}
                      alt={proyek.nama}
                      loading="lazy"
                      className="h-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 flex flex-col grow">
                    <h1 className="text-2xl font-bold mb-3 text-gray-800">
                      {proyek.nama}
                    </h1>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {proyek.shortDesc}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-auto">
                      {proyek.tools.map((tool, index) => (
                        <div
                          key={index}
                          className="p-1.5 bg-white/50 rounded-lg border border-white/20 shadow-sm"
                        >
                          <img
                            src={tool}
                            alt="tool-icon"
                            className="w-5 h-5 object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </a>
            ))}
        </div>
      </div>

      <div></div>
    </>
  );
};
export default Home;
