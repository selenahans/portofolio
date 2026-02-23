import { Link } from "react-router-dom";
import { useState } from "react";
// import DataImage from "../data";
// import { listProyek } from "../data/data"
import { listProyek, PROJECT_CATEGORY_LIST } from "../data";

const Projects = () => {
  // State untuk menyimpan kategori yang dipilih (default: "All")
  const [activeCategory, setActiveCategory] = useState("all");

  // Logika Filter: Jika "all", tampilkan semua. Jika tidak, filter berdasarkan properti kategori
  const filteredProjects =
    activeCategory === "all"
      ? listProyek
      : listProyek.filter((proyek) => proyek.kategori.includes(activeCategory));
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
          Project
        </h1>
        <div
          className="w-4/5 mx-auto mb-12 flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <p className="text-[#372922] text-lg mb-4 text-center">
            Selected works and technical contributions. <br />
            A mix of personal experiments and collaborative open-source projects.
          </p>
          <div className="w-full border-b border-dashed border-slate-300"></div>
        </div>
        <br />
        <div
          className="flex flex-wrap justify-center gap-4 mb-14"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-2 rounded-full font-semibold transition-all border ${
              activeCategory === "all"
                ? "bg-[#A39383] text-white border-[#A39383]"
                : "bg-transparent text-gray-500 border-gray-300 hover:border-[#A39383]"
            }`}
          >
            All
          </button>
          {PROJECT_CATEGORY_LIST.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold capitalize transition-all border ${
                activeCategory === cat
                  ? "bg-[#A39383] text-white border-[#A39383]"
                  : "bg-transparent text-gray-500 border-gray-300 hover:border-[#A39383]"
              }`}
            >
              {cat.replace("-", " ")}
            </button>
          ))}
        </div>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {filteredProjects.map((proyek) => (
            <Link
              to={`/projectdetail/${proyek.slug}`}
              key={proyek.id}
              className="group bg-[#ECE9E5] rounded-2xl overflow-hidden flex flex-col shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={"dad" in proyek ? proyek.dad : 0}
            >
              <div
                // key={proyek.id}
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

                  {/* List Tools */}
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
            </Link>
          ))}
        </div>
        {/* Pesan jika proyek tidak ditemukan pada kategori tertentu */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-400 mt-10">Tidak ada proyek dalam kategori ini.</p>
        )}
      </div>
    </>
  );
};

export default Projects;
