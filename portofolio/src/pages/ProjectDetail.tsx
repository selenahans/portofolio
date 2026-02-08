import { useParams, Link } from "react-router-dom";
import { listProyek } from "../data";
const ProjectDetail = () => {
  const { slug } = useParams();
  const proyek = listProyek.find((p) => p.slug === slug);
  if (!proyek) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800">Project Not Found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-white pt-28 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Tombol Back */}
          <div className="relative flex items-center mb-8">
            {/* Tombol Back Warna Cokelat */}
            <Link
              to="/projects"
              className="flex items-center gap-2 text-[#A39383] hover:text-[#8E7F70] transition-colors z-10"
            >
              <span aria-hidden className="text-lg">←</span>
              <span className="font-semibold text-lg">Back</span>
            </Link>

            {/* Judul Proyek Rata Tengah */}
            <h1 className="absolute inset-x-0 text-center text-3xl sm:text-4xl font-bold text-gray-900 pointer-events-none">
              {proyek.nama}
            </h1>
          </div>

          <hr className="border-t border-dashed border-gray-300 mb-8" />

          {/* Bagian Tech Stack */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <span className="text-gray-700 font-semibold">Tech Stack :</span>
            <div className="flex flex-wrap gap-3">
              {proyek.tools.map((tool, index) => (
                <img
                  key={index}
                  src={tool}
                  alt="tech-icon"
                  className="w-7 h-7 object-contain"
                  title="Technology Tool"
                />
              ))}
            </div>
          </div>

          {/* Gambar Utama / Hero Image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg aspect-video flex justify-center items-center p-6 sm:p-12">
            <img
              src={proyek.thumbnail}
              alt={proyek.nama}
              className="w-full h-full object-contain drop-shadow-2xl"
            />
          </div>

          {/* Detail Tambahan (Features & Results) - Opsional */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Key Features
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {proyek.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Results & Impact
              </h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {proyek.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProjectDetail;
