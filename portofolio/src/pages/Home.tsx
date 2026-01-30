import DataImage from "../data";
import { listTools } from "../data";
import { listProyek } from "../data";
import { listSpeciality } from "../data";
const Home = () => {
  return (
    <>
      {/* <h1 className="text-3xl text-red-600 text-shadow-black">hao</h1> */}
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
          list project yang sudah aku buat
        </p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 ">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-[#ECE9E5] rounded-md"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gallery} alt={proyek.nama} loading="lazy" />
              <div>
                <h1 className="text2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-[#A39383] bg-[#FBF7F4] rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-[#E5DFD3] p-3 rounded-lg block border border-[#D3CCBF] hover:bg-[#D3CCBF]"
                  >
                    Lihat detail
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="kontak mt-32 p-10">
        <h1 className="text-4xl mb-2 font-bold text-center">kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">
          let's connect
        </p>
        <form action="">
          <div>
            <div>
              <label>nama lengkap</label>
              <input
                type="text"
                name="nama"
                placeholder="masukkan nama"
                required
              />
            </div>
            <div>
              <label>email</label>
              <input
                type="email"
                name="email"
                placeholder="masukkan email"
                required
              />
            </div>
            <div>
              <label htmlFor="pesan">pesan</label>
              <textarea
                name="pesan"
                id="pesan"
                cols="30"
                rows="10"
                placeholder="masukkan pesan"
              ></textarea>
            </div>
            <div>
              <button type="submit">Kirim</button>
            </div>
          </div>
        </form>
      </div> */}

      <div></div>
    </>
  );
};
export default Home;
