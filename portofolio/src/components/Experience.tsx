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

const ExperienceItem = ({ item, index }: ExperienceItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="group w-full border-b border-slate-200 last:border-none"
      data-aos="fade-up"
      data-aos-delay={index * 50}
    >
      {/* Header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer flex items-center gap-6 py-8 px-2 transition-all duration-300 hover:bg-slate-50/50 rounded-xl"
      >
        {item.logo && (
          <div className="hidden sm:block shrink-0">
            <img
              src={item.logo}
              alt={item.company}
              className="w-12 h-12 transition-all duration-500 object-contain opacity-70 group-hover:opacity-100"
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
            <span className="text-xs italic text-[#3D2B1F]/40">
              {item.location}
            </span>
          </div>
        </div>
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-8 pt-2 px-2 md:ml-[72px]">
              <ul className="space-y-4">
                {item.details.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="text-[15px] text-[#483b32] leading-relaxed flex gap-3 items-start"
                  >
                    <span className="text-[#3D2B1F] mt-1.5 shrink-0 text-[10px]">
                      ●
                    </span>
                    {resp}
                  </li>
                ))}
              </ul>
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
      <div
        className="w-4/5 mx-auto mb-12 flex flex-col items-center text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="text-[#372922] text-lg mb-4 text-center">
          A timeline of my professional work and career development.
        </p>
        <div className="w-full border-b border-dashed border-slate-300"></div>
      </div>
      <div className="w-4/5 mx-auto flex flex-col">
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
