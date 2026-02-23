import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
      className="group w-full border-b border-slate-200 last:border-none"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      {/* Header: Dibuat sangat bersih tanpa background kotak yang berat */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center gap-6 py-8 px-2 transition-all duration-300 hover:bg-slate-50/50 rounded-xl"
      >
        {/* Logo dengan desain minimalis */}
        {item.logo && (
          <div className="hidden sm:block shrink-0">
            <img
              src={item.logo}
              alt={item.company}
              className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-500 object-contain opacity-70 group-hover:opacity-100"
            />
          </div>
        )}

        <div className="grow">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-1">
            <h3 className="text-xl font-medium text-[#2D241E] tracking-tight">
              {item.title}
            </h3>
            <span className="text-xs font-bold text-[#3D2B1F]/40 uppercase tracking-[0.2em]">
              {item.period}
            </span>
          </div>

          <div className="flex items-center gap-3 mt-1.5">
            <span className="text-sm font-semibold text-[#3D2B1F]/70">
              {item.company}
            </span>
            <span className="h-1 w-1 rounded-full bg-slate-300"></span>
            <span className="text-xs italic text-slate-400">
              {item.location}
            </span>
          </div>
        </div>

        {/* Indikator Simpel */}
        <div className="text-slate-300 group-hover:text-[#3D2B1F] transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-500 ${isOpen ? "rotate-45" : "rotate-0"}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </div>
      </div>

      {/* Konten: Fokus pada pembacaan poin-poin singkat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 pt-2 px-2 md:ml-[72px] grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Kolom Kiri: Responsibilities & Impact */}
              <div className="md:col-span-8 space-y-6">
                <div>
                  <ul className="space-y-3">
                    {item.details.responsibilities.map((resp, idx) => (
                      <li
                        key={idx}
                        className="text-[15px] text-slate-600 leading-relaxed flex gap-3"
                      >
                        <span className="text-[#3D2B1F]/30">•</span>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Impact: Ditampilkan seperti quote kecil yang elegan */}
                <div className="border-l-2 border-[#3D2B1F]/10 pl-4 py-1">
                  {item.details.impact.map((imp, idx) => (
                    <p
                      key={idx}
                      className="text-sm text-[#3D2B1F]/80 italic font-medium"
                    >
                      " {imp} "
                    </p>
                  ))}
                </div>
              </div>

              {/* Kolom Kanan: Skills (Dibuat sangat kecil dan bersih) */}
              <div className="md:col-span-4">
                <h4 className="text-[10px] font-black text-[#3D2B1F]/30 uppercase tracking-[0.2em] mb-3">
                  Tools & Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {item.details.whatILearned.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-medium border border-slate-200 text-slate-500 px-2.5 py-1 rounded-md hover:border-[#3D2B1F]/20 hover:text-[#3D2B1F] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

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
          .sort((a, b) => b.id - a.id)
          .map((item, index) => (
            <ExperienceItem key={item.id} item={item} index={index} />
          ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
