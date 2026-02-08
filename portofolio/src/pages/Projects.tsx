import { Link } from "react-router-dom";
// import DataImage from "../data";
// import { listProyek } from "../data/data"
import { listProyek } from "../data";
const Projects = () => {
  return (
    <>
    <br />
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
              <img src={proyek.thumbnail} alt={proyek.nama} loading="lazy" />
              <div>
                <h1 className="text2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {proyek.shortDesc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    // <p
                    //   className="py-1 px-3 border border-[#A39383] bg-[#FBF7F4] rounded-md font-semibold"
                    //   key={index}
                    // >
                    //   {tool}
                    // </p>
                    <img
                      src={tool}
                      alt="tool-icon"
                      className="w-6 h-6 object-contain" // Ukuran icon (bisa disesuaikan)
                      key={index}
                    />
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Link
                    to={`/projectdetail/${proyek.slug}`}
                    className="bg-[#E5DFD3] p-3 rounded-lg block border border-[#D3CCBF] hover:bg-[#D3CCBF]"
                  >
                    Lihat detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
