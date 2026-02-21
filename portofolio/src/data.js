import vscode from "/assets/tools/vscode.png";
import reactjs from "/assets/tools/reactjs.png";
import nextjs from "/assets/tools/nextjs.png";
import tailwind from "/assets/tools/tailwind.png";
import bootstrap from "/assets/tools/bootstrap.png";
import javascript from "/assets/tools/js.png";
import nodejs from "/assets/tools/nodejs.png";
import github from "/assets/tools/github.png";
import illustrator from "/assets/tools/ai.png"; 
import canva from "/assets/tools/canva.png";
import figma from "/assets/tools/figma.png";
import pusdakota from "./assets/proyek/proyek1.webp";

// import Proyek2 from "./assets/proyek/proyek2.webp";
// import Proyek3 from "./assets/proyek/proyek3.webp";
// import Proyek4 from "./assets/proyek/proyek4.webp";
// import Proyek5 from "./assets/proyek/proyek5.webp";
// import Proyek6 from "./assets/proyek/proyek6.webp";

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
  {
    id: "student-employee-pusdakota",
    nama: "Student Employee - Pusdakota",
    slug: "student-employee-pusdakota",
    kategori: [PROJECT_CATEGORY.GRAPHIC_DESIGN],
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
    title: "Teaching Assistant - Operating Systems", 
    company: "Universitas Surabaya", 
    location: "Surabaya, Indonesia",
    period: "Aug 2025 - Jan 2026", 
    type: "Internship",
    logo: "/assets/experience/ubaya-logo.webp",

    // Detail dalam bentuk objek list
    details: {
      responsibilities: [
        "Facilitated learning for 60+ students by explaining the fundamentals and architecture of Windows and Linux operating systems.",
        "Assisted in setting up operating system via command prompt, including configuration, troubleshooting, and optimization for both Linux and Windows environments.",
      ],
      whatILearned: [
        "Gained hands-on expertise in CLI-based system administration, mastering shell scripting, and environment configuration.",
        "Improving public speaking and the ability to explain technical concepts simply.",
        "Time management between academic responsibilities and teaching duties.",
      ],
      impact: [
        "Guided students through the end-to-end OS setup process, fostering a hands-on learning environment that translated theory into practical technical skills.",
        "Streamlined the assignment collection process using a custom automated script.",
      ],
    },
  },
  {
    id: 2,
    title: "Student Employee - Pusdakota Ubaya",
    company: "Pusdakota Universitas Surabaya",
    location: "Surabaya, Indonesia",
    period: "Juli 2024 - Desember 2025",
    type: "Internship",
    logo: "/assets/experience/pusdakota.webp",

    details: {
      responsibilities: [
        "Visual Content Creation: Designing a wide range of visual materials for internal and external needs, including posters, infographics, social media content, and presentation assets.",
        "Brand Identity Management: Developing and maintaining a consistent visual identity across all organizational outputs to ensure brand integrity.",
        "Digital Presence & Collaboration: Partnering with cross-functional teams to manage and publish visual content on Pusdakota’s official website and social media platforms, driving audience engagement and reach.",
      ],
      whatILearned: [
        "Developed the ability to translate complex data into compelling infographics and layouts that resonate with diverse audiences.",
        "Gained deep insights into maintaining brand ecosystem consistency and its role in building organizational trust.",
        "Enhanced communication skills while working with diverse teams to align creative output.",
      ],
      impact: [
        "Produced high-quality assets that improved the delivery of organizational messages across all platforms.",
        "Successfully unified Pusdakota’s visual presence, resulting in a more professional and recognizable public image.",
      ],
    },
  },
  {
    id: 3,
    title: "Teaching Assistant - PBA", 
    company: "Universitas Surabaya", 
    location: "Surabaya, Indonesia",
    period: "Aug 2025 - Jan 2026", 
    type: "Internship",
    logo: "/assets/experience/ubaya-logo.webp",

    // Detail dalam bentuk objek list
    details: {
      responsibilities: [
        "Facilitated learning for 60+ students by explaining the fundamentals and architecture of Windows and Linux operating systems.",
        "Assisted in setting up operating system via command prompt, including configuration, troubleshooting, and optimization for both Linux and Windows environments.",
      ],
      whatILearned: [
        "Gained hands-on expertise in CLI-based system administration, mastering shell scripting, and environment configuration.",
        "Improving public speaking and the ability to explain technical concepts simply.",
        "Time management between academic responsibilities and teaching duties.",
      ],
      impact: [
        "Guided students through the end-to-end OS setup process, fostering a hands-on learning environment that translated theory into practical technical skills.",
        "Streamlined the assignment collection process using a custom automated script.",
      ],
    },
  },
];
