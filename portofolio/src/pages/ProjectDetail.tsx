import { useParams, Link } from "react-router-dom";
import { listProyek, listTools } from "../data";

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
    <div className="min-h-screen bg-white pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="relative flex items-center mb-8">
          <Link
            to="/projects"
            className="flex items-center gap-2 text-[#A39383] hover:text-[#8E7F70] transition-colors z-10"
          >
            <span aria-hidden className="text-lg">←</span>
            <span className="font-semibold text-lg">Back</span>
          </Link>

          <h1 className="absolute inset-x-0 text-center text-2xl sm:text-4xl font-bold text-gray-900 pointer-events-none px-20">
            {proyek.nama}
          </h1>
        </div>

        <hr className="border-t border-dashed border-gray-300 mb-8" />
        <div className="flex flex-wrap justify-between gap-6 mb-8 text-sm sm:text-base">
          <div>
            <p className="text-[#A39383] hover:text-[#8E7F70] transition-colors z-10 uppercase tracking-wider font-medium">Year</p>
            <p className="text-gray-800 font-semibold">{proyek.year}</p>
          </div>
          <div className="sm:text-right">
            <p className="text-[#A39383] hover:text-[#8E7F70] transition-colors z-10 uppercase tracking-wider font-medium">Role</p>
            <p className="text-gray-800 font-semibold">{proyek.role}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4 mb-10">
          <span className="text-[#A39383] hover:text-[#8E7F70] transition-colors z-10 font-semibold">Tech Stack :</span>
          <div className="flex flex-wrap gap-3">
            {proyek.tools.map((tool, index) => (
              <img
                key={index}
                src={tool}
                alt="tech-icon"
                className="w-7 h-7 object-contain transition-all"
                title={listTools[index]?.nama || "Unknown Tool"}
              />
            ))}
          </div>
        </div>
        <div className="w-full rounded-2xl overflow-hidden shadow-lg aspect-video flex justify-center items-center bg-gray-50 p-6 sm:p-12 mb-16">
          <img
            src={proyek.thumbnail}
            alt={proyek.nama}
            className="w-full h-full object-contain drop-shadow-2xl"
          />
        </div>
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#A39383] hover:text-[#8E7F70] transition-colors z-10 mb-4">About Project</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            {proyek.fullDesc}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#F9F7F5] p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-[#A39383] hover:text-[#8E7F70] transition-colors z-10 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-[#A39383] rounded-full"></span>
              Key Features
            </h2>
            <ul className="space-y-3 text-gray-600">
              {proyek.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#A39383]">•</span> {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#F9F7F5] p-8 rounded-2xl">
            <h2 className="text-xl font-bold text-[#A39383] hover:text-[#8E7F70] transition-colors z-10 mb-4 flex items-center gap-2">
              <span className="w-2 h-6 bg-[#A39383] rounded-full"></span>
              Results & Impact
            </h2>
            <ul className="space-y-3 text-gray-600">
              {proyek.results.map((result, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-[#A39383]">•</span> {result}
                </li>
              ))}
            </ul>
          </div>
        </div>
        {proyek.challenges && proyek.challenges.length > 0 && (
          <div className="border border-gray-100 p-8 rounded-2xl mb-16">
            <h2 className="text-xl font-bold text-[#A39383] hover:text-[#8E7F70] transition-colors z-10 mb-4">Challenges</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {proyek.challenges.map((challenge, index) => (
                <div key={index} className="flex gap-4 items-start">
                  <div className="bg-gray-100 text-gray-500 w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold">
                    0{index + 1}
                  </div>
                  <p className="text-gray-600 italic">"{challenge}"</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;