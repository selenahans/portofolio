import { useState } from 'react';

interface ExperienceDetails {
  responsibilities: string[];
  impact: string[];
  whatILearned: string[];
}

interface Experience {
  id: number;
  logo?: string;
  company: string;
  title: string;
  type: string;
  period: string;
  location: string;
  details: ExperienceDetails;
}

interface ExperienceItemProps {
  item: Experience;
  index: number;
}

interface ExperienceSectionProps {
  listExperience: Experience[];
}

// Sub-komponen untuk tiap baris pengalaman
const ExperienceItem = ({ item, index }: ExperienceItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group flex flex-col w-full"
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-duration="1000"
      data-aos-once="true"
    >
      {/* Header Accordion */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`cursor-pointer flex flex-col md:flex-row items-center md:items-start gap-6 p-6 transition-all duration-500 ease-in-out transform ${
          isOpen
            ? "bg-[#E5DFD3] rounded-t-2xl shadow-lg border-x border-t border-slate-300"
            : "bg-[#f1efe9] rounded-2xl border border-transparent hover:border-slate-300 hover:bg-[#E5DFD3] hover:shadow-xl hover:-translate-y-2"
        }`}
      >
        {item.logo && (
          <div className="relative overflow-hidden rounded-xl bg-white p-2 shadow-sm transition-transform duration-500 group-hover:scale-110 shrink-0">
            <img
              src={item.logo}
              alt={item.company}
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
              loading="lazy"
            />
          </div>
        )}

        <div className="text-center md:text-left grow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <h1 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors duration-300">
              {item.title}
            </h1>
            <div className={`hidden md:block transition-transform duration-500 ${isOpen ? "rotate-180" : "rotate-0"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm md:text-base text-slate-600 mt-1">
            <span className="font-semibold">{item.company}</span>
            <span className="text-slate-400">•</span>
            <span className="bg-white/50 px-2 py-0.5 rounded-md border border-slate-200 text-[10px] font-bold uppercase tracking-wider">
              {item.type}
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-500 mt-3 opacity-80 font-medium">
            <span>{item.period}</span>
            <span className="hidden md:block text-slate-300">•</span>
            <span className="italic">{item.location}</span>
          </div>
        </div>
      </div>

      {/* Konten Detail (Buka-Tutup) */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out border-x border-b border-slate-300 rounded-b-2xl bg-[#E5DFD3]/40 ${
          isOpen ? "max-h-300 opacity-100 pb-6" : "max-h-0 opacity-0 border-none"
        }`}
      >
        <div className="p-6 md:ml-28 grid grid-cols-1 lg:grid-cols-2 gap-8 border-t border-slate-300/50 text-left">
          <div>
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Core Responsibilities</h4>
            <ul className="space-y-3">
              {item.details.responsibilities.map((resp: string, idx: number) => (
                <li key={idx} className="text-sm text-slate-700 flex gap-3 leading-relaxed">
                  <span className="text-blue-600 mt-1 font-bold">▹</span>
                  {resp}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4 italic">Key Impact</h4>
              <ul className="space-y-2">
                {item.details.impact.map((imp: string, idx: number) => (
                  <li key={idx} className="text-sm text-slate-800 font-medium flex gap-2 italic">
                    <span className="text-green-600 font-bold">✓</span> {imp}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-3">Skills Enhanced</h4>
              <div className="flex flex-wrap gap-2">
                {item.details.whatILearned.map((skill: string, idx: number) => (
                  <span key={idx} className="text-[10px] bg-slate-800 text-white px-3 py-1 rounded-full shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Komponen Utama Section
const ExperienceSection = ({ listExperience }: ExperienceSectionProps) => {
  return (
    <div className="experience mt-15 py-10 max-w-7xl mx-auto" id="experience">
      <h1
        className="text-4xl font-bold mb-10 text-center"
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        Experience
      </h1>

      <div className="w-4/5 mx-auto flex flex-col gap-6">
        {[...listExperience]
          .sort((a: Experience, b: Experience) => b.id - a.id)
          .map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
      </div>
    </div>
  );
};

export default ExperienceSection;