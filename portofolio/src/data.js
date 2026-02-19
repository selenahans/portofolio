import vscode from "/assets/tools/vscode.png";
import reactjs from "/assets/tools/reactjs.png";
import nextjs from "/assets/tools/nextjs.png";
import tailwind from "/assets/tools/tailwind.png";
import bootstrap from "/assets/tools/bootstrap.png";
import javascript from "/assets/tools/js.png";
import nodejs from "/assets/tools/nodejs.png";
import github from "/assets/tools/github.png";
import illustrator from "/assets/tools/ai.png"; // Biasanya 'ai' merujuk ke Adobe Illustrator
import canva from "/assets/tools/canva.png";
import figma from "/assets/tools/figma.png";
import Proyek1 from "./assets/proyek/proyek1.webp";
import Proyek2 from "./assets/proyek/proyek2.webp";
import Proyek3 from "./assets/proyek/proyek3.webp";
import Proyek4 from "./assets/proyek/proyek4.webp";
import Proyek5 from "./assets/proyek/proyek5.webp";
import Proyek6 from "./assets/proyek/proyek6.webp";

export const PROJECT_CATEGORY = {
  WEB_DEV: "web-development",
  UI_UX: "UI-UX",
  GRAPHIC_DESIGN: "graphic-design",
};

import HeroImage from "/assets/hero-img.webp";
export const PROJECT_CATEGORY_LIST = [
  PROJECT_CATEGORY.WEB_DEV,
  PROJECT_CATEGORY.UI_UX,
  PROJECT_CATEGORY.GRAPHIC_DESIGN,
];
const Image = {
  HeroImage,
};

export default Image;

export const listSpeciality = [
  {
    id: 1,
    gambar: "/assets/speciality/ui-ux.webp",
    judul: "UI / UX Design",
    desk: "I enjoy designing clean, intuitive, and user-centered interfaces that focus on usability and visual harmony.",
  },
  {
    id: 2,
    gambar: "/assets/speciality/web-dev.webp",
    judul: "Web Development",
    desk: "Building responsive and efficient web applications using modern frameworks and best practices.",
  },
  {
    id: 3,
    gambar: "/assets/speciality/graphic-design.webp",
    judul: "Graphic Design",
    desk: "Creating visual assets that communicate ideas clearly through typography, color, and layout.",
  },
];
export const listTools = [
  {
    id: 1,
    gambar: vscode,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: reactjs,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: nextjs,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: tailwind,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: bootstrap,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: javascript,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: nodejs,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: github,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: illustrator,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: canva,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: figma,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];
export const listProyek = [
  {
    id: "website-portofolio",
    nama: "Website Portofolio",
    slug: "website-portofolio",
    kategori: [PROJECT_CATEGORY.WEB_DEV, PROJECT_CATEGORY.UI_UX],
    thumbnail: Proyek1,

    shortDesc:
      "A clean and well-structured personal portfolio website designed to showcase personal branding, resume, skills, and selected projects in a professional and engaging way.",

    fullDesc:
      "This portfolio website was developed to present personal branding, professional background, and technical skills in a clear and organized manner. The design emphasizes a clean layout, structured content hierarchy, and smooth navigation to ensure visitors can easily explore information. Interactive animations are integrated to enhance user engagement without compromising performance. The website is fully responsive, ensuring a consistent and polished experience across desktop, tablet, and mobile devices. A dedicated project showcase section highlights selected works to demonstrate expertise and practical experience.",
    tools: [reactjs, tailwind, javascript],

    features: [
      "Informative and structured content presentation",
      "Smooth scroll animations for enhanced interaction",
      "Well-organized layout and content hierarchy",
      "Fully responsive design across all devices",
      "Dedicated project showcase section",
    ],

    challenges: [
      "Maintaining optimal performance despite content-heavy sections",
      "Ensuring a clean and consistent layout on smaller screen sizes",
    ],

    results: [
      "Improved clarity and user understanding of the portfolio content",
      "Faster loading times",
    ],

    gallery: [Proyek1],
    year: 2025,
    role: "Fullstack Developer",
  },


];

export const listEducation = [
  {
    id: 1,
    institution: "Universitas Surabaya",
    degree: "Bachelor's Degree",
    major: "Information Systems (S.Kom)",
    gpa: "3.90 / 4.00",
    period: "2023 - 2027",
    location: "Surabaya, Indonesia 🇮🇩",
    description:
      "Focused on information systems development, software engineering, databases, and UI/UX design with strong academic performance.",
    gambar: "/assets/education/logo-ubaya.webp",
  },
  {
    id: 2,
    institution: "SMA Kristen Petra 2",
    degree: "Senior High School",
    major: "Science",

    period: "2020 - 2023",
    location: "Surabaya, Indonesia 🇮🇩",
    description: "",
    gambar: "/assets/education/logo-sma.webp",
  },
];

export const listExperience = [
  {
    id: 1,
    title: "Teaching Assistant", // Nama Pengalaman
    company: "Universitas Surabaya", // Tempat
    location: "Surabaya, Indonesia", // Kota
    period: "Aug 2025 - Jan 2026", // Rentang Waktu
    type: "Part-time", // Jenis (Internship/Full-time/etc)
    logo: "/assets/experience/ubaya-logo.webp",

    // Detail dalam bentuk objek list
    details: {
      responsibilities: [
        "Assisting professors in delivering Database and Algorithm course materials.",
        "Grading student assignments and providing constructive feedback.",
        "Conducting additional tutoring sessions for students struggling with coding logic.",
      ],
      whatILearned: [
        "Deepening understanding of complex data structures and SQL optimization.",
        "Improving public speaking and the ability to explain technical concepts simply.",
        "Time management between academic responsibilities and teaching duties.",
      ],
      impact: [
        "Increased the average class score by 15% through intensive tutoring.",
        "Streamlined the assignment collection process using a custom automated script.",
      ],
    },
  },
  {
    id: 2,
    title: "Freelance Web Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jan 2024 - Present",
    type: "Freelance",
    logo: "/assets/experience/freelance-logo.webp",

    details: {
      responsibilities: [
        "Developing custom websites for small to medium enterprises (SMEs).",
        "Translating UI/UX designs from Figma into responsive React components.",
        "Maintaining and updating client websites to ensure high performance.",
      ],
      whatILearned: [
        "Mastering Tailwind CSS for rapid UI development.",
        "Learning how to manage client expectations and project timelines independently.",
        "Gaining experience in SEO optimization and web performance best practices.",
      ],
      impact: [
        "Delivered 5+ successful web projects with 100% client satisfaction.",
        "Improved client site loading speeds by up to 40% using Next.js optimization.",
      ],
    },
  },
];
