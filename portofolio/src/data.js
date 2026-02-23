import vscode from "/assets/tools/vscode.png";
import laravel from "/assets/tools/laravel.png";
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
import pusdakota from "./assets/proyek/graphic-design-pusdakota.webp";
import fbeubaya from "./assets/proyek/graphic-design-fbeubaya.webp";
import ecosrot from "./assets/proyek/ui-ux-ecosrot.webp";
import berprogress from "./assets/proyek/ui-ux-berprogress.webp";
import fitflow from "./assets/proyek/ui-ux-fitflow.webp";
import producera from "./assets/proyek/ui-ux-producera.webp";
import hijauin from "./assets/proyek/ui-ux-hijauin.webp";
import mobft from "./assets/proyek/webdev-mobft.webp";
import ilpc from "./assets/proyek/graphic-design-ilpc.webp";
import maniac from "./assets/proyek/graphic-design-maniac.webp";
import ig from "./assets/proyek/graphic-design-ig.webp";
import pimus from "./assets/proyek/webdev-pimus.webp";

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
  {
    id: 12,
    gambar: laravel,
    nama: "Laravel",
    ket: "Framework",
    dad: "1200",
  },
];
export const listProyek = [
  // WEBSITE PORTOFOLIO
  {
    id: "website-portofolio",
    nama: "Website Portofolio",
    slug: "website-portofolio",
    kategori: [PROJECT_CATEGORY.WEB_DEV, PROJECT_CATEGORY.UI_UX],
    thumbnail: pusdakota,

    shortDesc:
      "A dynamic and highly responsive personal portfolio website built to showcase my professional journey, creative projects, and dual expertise in design and development.",

    fullDesc:
      "This personal portfolio website was meticulously crafted from scratch to serve as a digital showcase of my professional identity. Built with modern web technologies and heavily utilizing Tailwind CSS, the platform emphasizes a clean, minimalist, yet engaging UI/UX design. The development process involved translating custom design mockups into a fully responsive front-end. It features smooth scrolling, interactive animations, and a well-structured content hierarchy to ensure an optimal user experience across all devices. This project stands as a testament to my ability to bridge the gap between aesthetic design and functional code.",
    tools: [reactjs, tailwind, javascript],

    features: [
      "Custom-built responsive UI tailored specifically for personal branding",
      "Smooth scroll animations and interactive elements for enhanced engagement",
      "Structured project showcase with detailed and categorized case studies",
      "Clean, maintainable codebase utilizing Tailwind CSS utility classes",
      "Optimized performance ensuring fast load times across desktop and mobile",
    ],

    challenges: [
      "Translating custom UI/UX designs into pixel-perfect, responsive code across various screen sizes",
      "Balancing rich animations and interactive UI elements with optimal web performance",
    ],

    results: [
      "Successfully launched a professional digital footprint that effectively highlights my technical and design skills",
      "Achieved seamless cross-device compatibility and a highly intuitive user browsing experience",
    ],

    gallery: [pusdakota],
    year: 2026,
    role: "Front-End Developer & UI/UX Designer",
  },
  // PIMUS
  {
    id: "website-pimus",
    nama: "Website PIMUS",
    slug: "website-pimus",
    kategori: [PROJECT_CATEGORY.WEB_DEV, PROJECT_CATEGORY.UI_UX],
    thumbnail: pimus,

    shortDesc:
      "Developed the front-end interface for the PIMUS web platform, serving as a centralized and interactive information hub for participants.",

    fullDesc:
      "Serving as a Front-End Developer for the PIMUS platform, I was responsible for building the main website to function as a comprehensive information hub. Similar to my work on faculty orientation platforms, this project focused on presenting event details, activity schedules, and essential program information in a highly accessible manner. My work involved designing and implementing user interfaces, page layouts, and interaction flows to ensure an intuitive, responsive, and engaging user experience for all event participants.",
    tools: [reactjs, tailwind, javascript, laravel, bootstrap],

    features: [
      "Centralized information hub for PIMUS event details and schedules",
      "Intuitive and accessible user interface design",
      "Seamless interaction flows and structured page layouts",
      "Fully responsive design across desktop and mobile devices",
      "Clean and maintainable codebase using modern web frameworks",
    ],

    challenges: [
      "Designing an interface that is easily navigable for a large volume of event participants",
      "Structuring complex event schedules and information into a clean, responsive layout",
    ],

    results: [
      "Delivered a platform that kept participants well-informed and actively engaged",
      "Streamlined the event's digital experience with an intuitive and accessible ecosystem",
    ],

    gallery: [pimus],
    year: 2026,
    role: "Front-End Developer",
  },
  // PUSDAKOTA V
  {
    id: "student-employee-pusdakota",
    nama: "Student Employee - Pusdakota",
    slug: "student-employee-pusdakota",
    kategori: [PROJECT_CATEGORY.GRAPHIC_DESIGN],
    thumbnail: pusdakota,

    shortDesc:
      "Managed visual content creation, brand identity, and digital presence to drive audience engagement across Pusdakota's official platforms.",

    fullDesc:
      "During my role as a Student Employee at Pusdakota, I was responsible for producing a diverse range of visual materials for both internal and external needs, including posters, infographics, and social media assets. A major focus of my work was developing and enforcing a consistent visual identity to maintain brand integrity across all organizational outputs. Furthermore, I collaborated closely with cross-functional teams to strategize, manage, and publish compelling visual content on Pusdakota’s website and social media platforms, ultimately enhancing the organization's digital reach and engagement.",
    tools: [figma, illustrator],

    features: [
      "End-to-end design of posters, infographics, and presentation assets",
      "Development and maintenance of a consistent organizational brand identity",
      "Cross-functional collaboration for seamless content publication",
      "Management of visual assets for the official website and social media",
    ],

    challenges: [
      "Ensuring strict brand consistency across diverse media formats and platforms",
      "Coordinating with multiple teams to align visual content with organizational goals",
    ],

    results: [
      "Successfully drove audience engagement and reach across digital platforms",
      "Established a cohesive, professional visual identity for all Pusdakota outputs",
    ],

    gallery: [pusdakota],
    year: "2024 - 2025",
    role: "Student Employee",
  },
  // ECOSROT V
  {
    id: "ui-ux-ecosrot",
    nama: "UI/UX Design - Ecosrot",
    slug: "ui-ux-ecosrot",
    kategori: [PROJECT_CATEGORY.UI_UX],
    thumbnail: ecosrot,

    shortDesc:
      "A user-friendly directory website designed to showcase eco-friendly local MSMEs dedicated to reducing waste and promoting sustainable products.",

    fullDesc:
      "ECOsrot is a directory platform designed to highlight local MSMEs (UMKM) that are committed to environmental sustainability. The platform specifically features businesses that actively minimize waste or upcycle waste materials into their products. As the UI/UX Designer, my goal was to design an intuitive and engaging interface that makes it easy for users to discover and support these eco-conscious brands. The design focuses on clear categorization, accessible information, and a seamless browsing experience to connect environmentally aware consumers with sustainable local businesses.",
    tools: [figma],

    features: [
      "Comprehensive directory of eco-friendly local MSMEs",
      "Clear categorization of sustainable practices and products",
      "Intuitive search and filtering system for easy discovery",
      "Detailed and engaging profile pages for each business",
      "Seamless navigation flow tailored for both eco-conscious consumers and MSMEs",
    ],

    challenges: [
      "Gathering and structuring accurate, reliable data for various eco-friendly MSMEs",
      "Designing a highly responsive UI/UX that adapts seamlessly across all devices while handling complex directory layouts and data",
    ],

    results: [
      "Delivered a fully responsive design that provides a consistent and engaging user experience on both mobile and desktop",
      "Successfully created an accessible platform that bridges the gap between eco-conscious consumers and sustainable businesses",
    ],

    gallery: [ecosrot],
    year: 2025,
    role: "UI/UX Designer",
  },
  // MOBFT V
  {
    id: "web-dev-mobft",
    nama: "Web Development - MobFT",
    slug: "web-dev-mobft",
    kategori: [PROJECT_CATEGORY.WEB_DEVELOPMENT],
    thumbnail: mobft,

    shortDesc:
      "Developed the front-end interface for the Engineering Faculty's new student orientation web application, serving as a centralized information hub.",

    fullDesc:
      "Served as a Front-End Developer for the Engineering Faculty's new student orientation program. I was responsible for building the main website, which functioned as a comprehensive information hub featuring event details, activity schedules, and a daily point-tracking system. My work focused on designing and implementing user interfaces, page layouts, and interaction flows to ensure accessibility and an intuitive user experience. Ultimately, the platform successfully helped new students stay informed, guided, and actively engaged throughout the entire orientation process.",
    tools: [tailwind, javascript, laravel],

    features: [
      "Centralized information hub for event details and schedules",
      "Daily point tracking system for student activities",
      "Intuitive and accessible user interface design",
      "Seamless interaction flows and structured page layouts",
    ],

    challenges: [
      "Designing an interface that is easily navigable for a large volume of new users",
      "Structuring complex orientation schedules and point systems into a clean layout",
    ],

    results: [
      "Delivered a platform that kept new students well-informed and actively engaged",
      "Streamlined the orientation process with an intuitive and accessible digital ecosystem",
    ],

    gallery: [mobft],
    year: 2025,
    role: "Front-End Developer",
  },
  // PRODUCERA V
  {
    id: "ui-ux-producera",
    nama: "UI/UX Design - Producera",
    slug: "ui-ux-producera",
    kategori: [PROJECT_CATEGORY.GRAPHIC_DESIGN, PROJECT_CATEGORY.UI_UX],
    thumbnail: producera,

    shortDesc:
      "An inclusive mobile job search application designed to provide comprehensive employment opportunities, featuring smart job matching and transparent company reviews.",

    fullDesc:
      "Producera is a mobile application developed to address modern job market challenges by providing comprehensive and sustainable employment access. As the UI/UX Designer, I focused on creating an inclusive and intuitive interface that empowers job seekers. The app aims to simplify the job search process by offering personalized job matching, transparent company culture insights, and dedicated accessibility options for users with disabilities. Additionally, it integrates skill enhancement features by recommending relevant courses to help users meet current market demands.",
    tools: [figma],

    features: [
      "Algorithm-driven job matching tailored to user skills and preferences",
      "Integrated online training and courses for continuous skill enhancement",
      "Transparent company reviews and work culture insights from employees",
      "Advanced job filtering options (full-time, part-time, internship, remote)",
      "Dedicated job search options and accessibility features for users with disabilities",
    ],

    challenges: [
      "Designing an inclusive interface that is fully accessible for users with diverse needs and disabilities",
      "Balancing a feature-rich platform (job searching, upskilling, and reviewing) within a clean, intuitive mobile UI",
    ],

    results: [
      "Delivered a highly accessible and user-centric mobile application design",
      "Created a seamless user journey from job discovery to application and continuous learning",
    ],

    gallery: [producera],
    year: 2024,
    role: "UI/UX Designer",
  },
  // FITFLOW V
  {
    id: "ui-ux-fitflow",
    nama: "UI/UX Design - Fitflow",
    slug: "ui-ux-fitflow",
    kategori: [PROJECT_CATEGORY.GRAPHIC_DESIGN, PROJECT_CATEGORY.UI_UX],
    thumbnail: fitflow,

    shortDesc:
      "A versatile health and wellness mobile app designed to motivate busy individuals through personalized lifestyle tracking, home workouts, and a healthy food marketplace.",

    fullDesc:
      "Fitflow is a comprehensive mobile application dedicated to helping users maintain a healthy lifestyle amidst their busy schedules. As the UI/UX Designer, I focused on creating an adaptable and motivating interface that personalizes the user experience based on specific goals, such as weight loss or general wellness. The app integrates various health-focused features into a seamless journey, including hydration and sleep trackers, no-equipment home workout routines, information on local sports events, and a built-in marketplace for delivering healthy meals directly to users.",
    tools: [figma],

    features: [
      "Flexible UI that adapts to user-specific goals (e.g., weight loss vs. healthy lifestyle)",
      "Daily hydration reminders and comprehensive sleep habit monitoring",
      "Integrated marketplace for ordering and delivering healthy food",
      "Curated no-equipment home workout routines and fitness guides",
      "Information hub for local sports activities and running events",
    ],

    challenges: [
      "Integrating multiple distinct features (tracking, e-commerce, and event discovery) into a cohesive and uncluttered mobile experience",
      "Designing a flexible user journey that seamlessly adapts its content based on the user's initial health goals",
    ],

    results: [
      "Created a highly personalized and motivating user interface that encourages daily health habits",
      "Delivered a clean, unified app design that successfully balances lifestyle tracking with marketplace functionalities",
    ],

    gallery: [fitflow],
    year: 2025,
    role: "UI/UX Designer",
  },
  // HIJAUIN V
  {
    id: "ui-ux-hijauin",
    nama: "UI/UX Design - Hijauin",
    slug: "ui-ux-hijauin",
    kategori: [PROJECT_CATEGORY.GRAPHIC_DESIGN, PROJECT_CATEGORY.UI_UX],
    thumbnail: hijauin,

    shortDesc:
      "An engaging, gamified mobile app design aimed at bridging environmental awareness and action through AI-driven recommendations, community building, and a reward system.",

    fullDesc:
      "Hijauin was designed to address environmental challenges in Indonesia by providing a centralized platform for users to discover and participate in green activities. As the UI/UX Designer, I focused on creating an intuitive interface that motivates positive behavioral change. The design integrates AI to estimate environmental impact and personalize activity recommendations. It also features comprehensive learning media, including an AI environmental chatbot, alongside robust community networking tools. To ensure long-term user retention and motivation, I implemented gamification concepts such as weekly leaderboards, a leveling system, and reward points redeemable for eco-friendly products.",
    tools: [figma],

    features: [
      "Centralized hub for discovering and participating in eco-friendly events",
      "AI-powered environmental impact estimation and personalized activity recommendations",
      "Gamification system featuring weekly leaderboards, user levels, and reward points",
      "Interactive learning media, including videos, articles, and an AI chatbot",
      "Community networking tools to add friends, chat, and invite others to green events",
    ],

    challenges: [
      "Balancing a complex array of features (AI chat, community, gamification, and events) within a clean, uncluttered mobile interface",
      "Designing an intuitive gamification and reward flow that genuinely motivates users without feeling overwhelming",
    ],

    results: [
      "Delivered a cohesive, engaging app design that successfully translates environmental awareness into actionable steps",
      "Created an interactive, community-driven user experience seamlessly enhanced by AI and gamification",
    ],

    gallery: [hijauin],
    year: 2025,
    role: "UI/UX Designer",
  },
  // BERPROGRESS V
  {
    id: "ui-ux-berprogress",
    nama: "UI/UX Design - Berprogress",
    slug: "ui-ux-berprogress",
    kategori: [PROJECT_CATEGORY.UI_UX],
    thumbnail: berprogress,

    shortDesc:
      "A smart city web platform designed to foster urban innovation, civic engagement, and transparency through interactive maps and public reporting.",

    fullDesc:
      "Berprogress is a web-based platform conceptualized around the theme of 'Smart Cities and Urban Innovation'. As the UI/UX Designer, my objective was to create an interface that utilizes technology to improve public service efficiency and overall quality of life. The design encourages active citizen participation in urban development through an integrated digital map, a streamlined public reporting system, community discussion forums, and real-time news updates. By prioritizing data-driven planning and transparency, the platform serves not just as a digital service, but as a collaborative space to build a more participatory, efficient, and sustainable city.",
    tools: [figma],

    features: [
      "Interactive digital map for spatial data and urban visualization",
      "Accessible public reporting system for civic issues",
      "Community discussion forums to drive active citizen collaboration",
      "Real-time news integration to keep the public informed",
      "Transparent, data-driven layout to bridge the gap between residents and city planning",
    ],

    challenges: [
      "Organizing complex urban data, maps, and community features into a cohesive, user-friendly layout",
      "Designing a highly accessible interface that can be easily navigated by a diverse demographic of city residents",
    ],

    results: [
      "Delivered a visually engaging and responsive platform that promotes active civic participation",
      "Created a streamlined user flow for public reporting and collaborative urban discussions",
    ],

    gallery: [berprogress],
    year: 2025,
    role: "UI/UX Designer",
  },
  // FBEUBAYA
  {
    id: "graphic-design-fbeubaya",
    nama: "Graphic Design - FBE Ubaya",
    slug: "graphic-design-fbeubaya",
    kategori: [PROJECT_CATEGORY.GRAPHIC_DESIGN],
    thumbnail: fbeubaya,

    shortDesc:
      "A clean and well-structured personal portfolio website designed to showcase personal branding, resume, skills, and selected projects in a professional and engaging way.",

    fullDesc:
      "This portfolio website was developed to present personal branding, professional background, and technical skills in a clear and organized manner. The design emphasizes a clean layout, structured content hierarchy, and smooth navigation to ensure visitors can easily explore information. Interactive animations are integrated to enhance user engagement without compromising performance. The website is fully responsive, ensuring a consistent and polished experience across desktop, tablet, and mobile devices. A dedicated project showcase section highlights selected works to demonstrate expertise and practical experience.",
    tools: [figma],

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

    gallery: [fbeubaya],
    year: 2025,
    role: "Fullstack Developer",
  },
  // ILPC V
  {
    id: "graphic-design-ilpc",
    nama: "Graphic Design - ILPC",
    slug: "graphic-design-ilpc",
    kategori: [PROJECT_CATEGORY.GRAPHIC_DESIGN],
    thumbnail: ilpc,

    shortDesc:
      "Spearheaded the comprehensive visual identity, social media design, and full event documentation for ILPC 2025, ensuring a cohesive brand experience.",

    fullDesc:
      "For ILPC 2025, I was entrusted with crafting and maintaining a consistent visual identity from the ground up, defining core design elements, typography, and color palettes. This cohesive branding was applied across all event materials and videos. My role involved extensive coordination with other divisions to design a wide array of assets, ranging from social media campaigns (feeds, stories, promotional materials) to specific event needs like website assets and rally game requirements. Additionally, I managed the end-to-end documentation of the entire event.",
    tools: [figma, illustrator],

    features: [
      "Creation of a consistent visual identity (typography, colors, and design elements)",
      "End-to-end social media content design (feeds, stories, promos)",
      "Design of event-specific assets, including website graphics and rally game materials",
      "Full-scale event documentation and photography/videography",
      "Seamless cross-divisional coordination for all design requirements",
    ],

    challenges: [
      "Maintaining strict visual consistency across a wide variety of digital and physical assets",
      "Managing and delivering multiple design requests from various divisions under tight event deadlines",
    ],

    results: [
      "Successfully established a strong, recognizable, and cohesive brand identity for ILPC 2025",
      "Delivered all promotional and event assets on time, ensuring a smooth and visually appealing event experience",
    ],

    gallery: [ilpc],
    year: 2025,
    role: "Vice Coordinator of Design, Documentation, and Decoration",
  },
  // MANIAC V
  {
    id: "graphic-design-maniac",
    nama: "Graphic Design - Maniac",
    slug: "graphic-design-maniac",
    kategori: [PROJECT_CATEGORY.GRAPHIC_DESIGN],
    thumbnail: maniac,

    shortDesc:
      "Contributed to the visual presence of the Maniac event by designing engaging social media content and capturing comprehensive on-site documentation.",

    fullDesc:
      "As a member of the Design, Documentation, and Decoration (DDD) division for the Maniac event, my primary focus was on elevating the event's digital presence through social media. I was responsible for designing cohesive, engaging Instagram feeds and promotional assets that aligned perfectly with the event's visual identity. In addition to my digital design responsibilities, I played an active role during the event days, providing hands-on documentation through photography and videography to capture key moments and ensure a complete visual record of the event.",
    tools: [figma, illustrator],

    features: [
      "Design and production of engaging Instagram feeds and promotional materials",
      "Consistent application of the event's visual identity across digital platforms",
      "On-site photography and videography during the main event days",
      "Active collaboration within the DDD division to fulfill various visual needs",
    ],

    challenges: [
      "Delivering high-quality social media content consistently under tight promotional deadlines",
      "Capturing clear, dynamic, and comprehensive documentation during fast-paced event activities",
    ],

    results: [
      "Enhanced the event's online visibility and engagement through an attractive social media presence",
      "Successfully delivered a complete and high-quality visual archive of the event's key moments",
    ],

    gallery: [maniac],
    year: 2025,
    role: "Member of Design, Documentation, and Decoration",
  },
  // INDUSTRIAL GAMES V
  {
    id: "graphic-design-ig",
    nama: "Graphic Design - Industrial Games",
    slug: "graphic-design-ig",
    kategori: [PROJECT_CATEGORY.GRAPHIC_DESIGN],
    thumbnail: ig,

    shortDesc:
      "Contributed to the visual presence of Industrial Games by designing engaging social media content and capturing comprehensive on-site documentation.",

    fullDesc:
      "As a member of the Design, Documentation, and Decoration (DDD) division for Industrial Games, my primary focus was on elevating the event's digital presence through social media. I was responsible for designing cohesive, engaging Instagram feeds and promotional assets that aligned perfectly with the event's visual identity. In addition to my digital design responsibilities, I played an active role during the event days, providing hands-on documentation through photography and videography to capture key moments and ensure a complete visual record of the event.",
    tools: [figma, illustrator],

    features: [
      "Design and production of engaging Instagram feeds and promotional materials",
      "Consistent application of the event's visual identity across digital platforms",
      "On-site photography and videography during the main event days",
      "Active collaboration within the DDD division to fulfill various visual needs",
    ],

    challenges: [
      "Delivering high-quality social media content consistently under tight promotional deadlines",
      "Capturing clear, dynamic, and comprehensive documentation during fast-paced event activities",
    ],

    results: [
      "Enhanced the event's online visibility and engagement through an attractive social media presence",
      "Successfully delivered a complete and high-quality visual archive of the event's key moments",
    ],

    gallery: [ig],
    year: 2025,
    role: "Member of Design, Documentation, and Decoration",
  },
];

export const listEducation = [
  {
    id: 2,
    institution: "Universitas Surabaya",
    degree: "Bachelor's Degree",
    major: "Information Systems (S.Kom)",
    gpa: "3.922 / 4.00",
    period: "2023 - 2027",
    location: "Surabaya, Indonesia 🇮🇩",
    description:
      "Focused on information systems development, software engineering, databases, and UI/UX design with strong academic performance.",
    gambar: "/assets/education/logo-ubaya.webp",
  },
  {
    id: 1,
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
  //OS
  {
    id: 1,
    title: "Teaching Assistant - Operating Systems",
    company: "Universitas Surabaya",
    location: "Surabaya, Indonesia",
    period: "Aug 2025 - Jan 2026",
    type: "Teaching Assistant",
    logo: "/assets/experience/ubaya.webp",

    details: {
      responsibilities: [
        "Facilitated technical learning for 60+ students on OS architecture and CLI-based administration, bridging theoretical concepts with practical hands-on skills.",
        "Mastered shell scripting and environment configuration while mentoring students through complex troubleshooting and OS optimization tasks.",
        "Streamlined academic workflows by implementing custom automated scripts for assignment collection, improving overall time management and operational efficiency.",
      ],
      whatILearned: [""],
      impact: [""],
    },
  },
  //PUSDAKOTA
  {
    id: 2,
    title: "Student Employee - Pusdakota Ubaya",
    company: "Pusdakota Universitas Surabaya",
    location: "Surabaya, Indonesia",
    period: "Juli 2024 - Desember 2025",
    type: "Student Employee",
    logo: "/assets/experience/pusdakota.webp",

    details: {
      responsibilities: [
        "Produced high-quality visual assets and infographics for social media and official websites, enhancing audience engagement and the delivery of organizational messages.",
        "Developed and maintained a consistent brand identity across all platforms, resulting in a more professional and unified public image for Pusdakota.",
        "Collaborated with cross-functional teams to translate complex data into compelling visual materials while mastering brand ecosystem management and creative alignment.",
      ],
      whatILearned: [""],
      impact: [""],
    },
  },
  //PBA
  {
    id: 3,
    title: "Teaching Assistant - PBA",
    company: "Universitas Surabaya",
    location: "Surabaya, Indonesia",
    period: "Aug 2025 - Jan 2026",
    type: "Teaching Assistant",
    logo: "/assets/experience/ubaya.webp",

    details: {
      responsibilities: [
        "Facilitated learning for 30+ students on Unity fundamentals and physics-based animation, including the implementation of projectile motion and kinematics.",
        "Bridged the gap between theoretical physics and game development by mentoring students in building interactive simulations using C# and Unity's physics engine.",
        "Enhanced students' technical problem-solving skills through hands-on guidance in debugging scripts and optimizing real-time physical simulations.",
      ],
      whatILearned: [""],
      impact: [""],
    },
  },
  // ASAH
  {
    id: 4,
    title: "Machine Learning Cohort",
    company: "Asah Program by Dicoding & Accenture",
    location: "Remote",
    period: "Aug 2025 - Jan 2026",
    type: "Cohort",
    logo: "/assets/experience/dicoding.webp",

    details: {
      responsibilities: [
        "Developed end-to-end Machine Learning solutions through intensive, industry-aligned training under the Kampus Berdampak Mandiri initiative.",
        "Built and deployed practical AI applications by transitioning theoretical models into real-world projects that meet industry benchmarks.",
        "Mastered high-demand digital skills and software architecture within a corporate-aligned environment.",
      ],
      whatILearned: [""],
      impact: [""],
    },
  },
];
