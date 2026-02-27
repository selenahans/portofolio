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
import porto from "./assets/proyek/webdev-porto.webp";

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
    nama: "Personal Branding & Digital Portfolio",
    slug: "website-portofolio",
    kategori: [PROJECT_CATEGORY.WEB_DEV, PROJECT_CATEGORY.UI_UX],
    thumbnail: porto,

    shortDesc:
      "A high-performance digital ecosystem engineered to bridge the gap between sophisticated UI/UX design and robust Software Engineering principles.",

    fullDesc:
      "To solve the challenge of effectively showcasing a dual-competency in design and engineering, I architected this digital ecosystem from the ground up using React.js and Tailwind CSS. Beyond a simple gallery, I engineered a 'minimalist-premium' experience that prioritizes performance and content hierarchy. By implementing advanced asset optimization and a clean Single Page Application (SPA) architecture, I ensured near-instant load times and fluid transitions. This project serves as a live demonstration of my ability to translate complex branding identities into functional, pixel-perfect, and high-converting web environments.",

    tools: [reactjs, tailwind, javascript],

    features: [
      "Custom-engineered 'Minimalist-Premium' UI framework tailored for high-end professional branding",
      "Dynamic Routing & Slug-based navigation logic for a seamless, SEO-optimized project exploration",
      "Adaptive Typography and Fluid Grid system for consistent, pixel perfect responsiveness across all devices",
      "High-performance asset optimization and lazy loading, significantly reducing initial payload and load times",
      "Cinematic user journey integration using Animate On Scroll (AOS) for a sophisticated interactive experience",
    ],

    challenges: [
      "Developing a scalable custom design system that maintains visual integrity across highly diverse screen resolutions and aspect ratios.",
      "Engineered advanced scroll restoration and state management logic to eliminate navigation friction inherent in Single Page Applications (SPA).",
    ],

    results: [
      "Delivered a centralized digital hub that successfully communicates technical proficiency and design sensibility to global stakeholders.",
      "Achieved a lightweight, accessible, and high-speed platform through 100% manual design-to-code execution, bypassing bloated third-party frameworks.",
    ],

    gallery: [porto],
    year: 2026,
    role: "Web Developer & UI/UX Designer",
  },
  // PIMUS
  {
    id: "website-pimus",
    nama: "Website PIMUS",
    slug: "website-pimus",
    kategori: [PROJECT_CATEGORY.WEB_DEV, PROJECT_CATEGORY.UI_UX],
    thumbnail: pimus,

    shortDesc:
      "Engineered a high-performance, mobile-responsive hub for the PIMUS event, transforming complex schedules into a seamless digital experience for all participants.",

    fullDesc:
      "To address the confusion and information silos during the PIMUS event, I developed a centralized web platform that served as the primary information hub. As a Front-End Developer, I focused on bridging the gap between dense event data and user accessibility. By leveraging Tailwind CSS and Laravel, I built an interface that turned complicated activity schedules into an intuitive, interactive experience. The project prioritized a mobile-first approach, ensuring that participants could access real-time updates and program details instantly from their devices during the event sessions.",

    tools: [tailwind, javascript, laravel, bootstrap],

    features: [
      "Centralized event ecosystem for real-time schedules and program details",
      "Mobile-optimized interface for on-the-go participant access",
      "High-performance navigation system for seamless information retrieval",
      "Interactive layouts designed for maximum user engagement",
      "Clean, scalable front-end architecture using utility-first CSS",
    ],

    challenges: [
      "Creating a navigation flow that remains intuitive even with a high volume of concurrent users and data",
      "Optimizing complex, data-heavy schedules for 100% responsiveness across various mobile screen sizes",
    ],

    results: [
      "Streamlined the event's digital touchpoints, reducing participant confusion regarding schedules",
      "Delivered a robust, lag-free interface that maintained layout integrity under heavy mobile usage",
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
      "Transformed Pusdakota's digital presence by establishing a cohesive visual identity and high-impact content strategy that boosted audience engagement.",

    fullDesc:
      "At Pusdakota, I took charge of the organization’s visual communication, moving beyond simple asset creation to build a unified brand identity. I designed a wide array of materials—from technical infographics to social media campaigns—ensuring every piece reflected Pusdakota's core values. By collaborating with various departments, I bridged the gap between complex organizational goals and digestible visual storytelling. My work focused on creating a design system that stayed consistent across the official website and social platforms, making the brand more recognizable and professional to the public.",

    tools: [figma, illustrator],

    features: [
      "End-to-end design of strategic infographics, posters, and presentation materials",
      "Development of a unified brand style guide to ensure organizational consistency",
      "Cross-functional collaboration to align visual content with departmental goals",
      "End-to-end asset management for the official website and social media growth",
      "Creative storytelling through modern and accessible graphic design",
    ],

    challenges: [
      "Translating complex community development programs into clear and engaging visual formats",
      "Maintaining a strict, professional brand identity while managing high-volume content requests from multiple teams",
    ],

    results: [
      "Boosted digital engagement by delivering more cohesive and visually appealing social media content",
      "Elevated the organization’s professional image through a standardized and modern design language",
    ],

    gallery: [pusdakota],
    year: "2024 - 2025",
    role: "Graphic Designer & Content Strategist",
  },
  // ECOSROT V
  {
    id: "ui-ux-ecosrot",
    nama: "UI/UX Design - Ecosrot",
    slug: "ui-ux-ecosrot",
    kategori: [PROJECT_CATEGORY.UI_UX],
    thumbnail: ecosrot,

    shortDesc:
      "Designed a seamless directory platform connecting eco-conscious consumers with local sustainable MSMEs, focusing on waste reduction and circular economy values.",

    fullDesc:
      "Ecosrot was born from the need to make sustainable living more accessible by showcasing local MSMEs committed to waste reduction. As the UI/UX Designer, I translated the complexity of diverse eco-friendly business models into a streamlined directory experience. I focused on building a design system that feels organic yet professional, ensuring that users could easily filter through various sustainability practices. The goal was to bridge the gap between ethical producers and conscious consumers through an interface that prioritizes clarity, trust, and effortless discovery.",

    tools: [figma],

    features: [
      "Intuitive discovery engine for eco-friendly MSMEs and upcycled products",
      "Dynamic filtering system based on specific sustainable practices and waste types",
      "Visual-heavy business profiles designed to build consumer trust and engagement",
      "Seamless navigation flow optimized for exploring local green ecosystems",
      "Modern and accessible interface built on circular economy principles",
    ],

    challenges: [
      "Synthesizing fragmented data from various MSMEs into a unified and easy-to-read information architecture",
      "Maintaining a clean, minimalist aesthetic while handling data-heavy directory layouts across mobile and desktop devices",
    ],

    results: [
      "Created a high-fidelity, fully responsive design that maintains a premium user experience on any screen size",
      "Established a professional digital bridge that empowers local green businesses to reach a wider, targeted audience",
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
    kategori: [PROJECT_CATEGORY.WEB_DEV],
    thumbnail: mobft,

    shortDesc:
      "Developed an interactive orientation hub for the Engineering Faculty, featuring real-time point tracking and a mobile-optimized event management system.",

    fullDesc:
      "As a Front-End Developer for the Engineering Faculty’s orientation (MobFT), I was tasked with building a digital gateway for hundreds of new students. The challenge was to integrate a high-volume information hub with a dynamic daily point-tracking system. I leveraged Tailwind CSS and Laravel to create a clean, performance-focused interface that ensured students could access their schedules and track their progress without friction. By prioritizing a mobile-first architecture, I ensured that critical orientation updates were always accessible, helping students stay focused and engaged throughout the program.",

    tools: [tailwind, javascript, laravel],

    features: [
      "Dynamic dashboard for real-time activity and point tracking",
      "Interactive event hub for centralized schedules and program guidelines",
      "Mobile-optimized UI designed for high-traffic student access",
      "Seamless navigation architecture for rapid information retrieval",
      "User-centric layouts focused on accessibility and readability",
    ],

    challenges: [
      "Structuring a multi-layered point system and complex schedules into a single, cohesive user experience",
      "Ensuring consistent performance and layout stability across a wide variety of student mobile devices",
    ],

    results: [
      "Successfully onboarded hundreds of students with zero friction in navigating event schedules",
      "Enhanced student motivation through an accessible and transparent digital point-tracking ecosystem",
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
      "Designed an inclusive mobile career platform that bridges the employment gap with AI-driven job matching and dedicated accessibility features for all users.",

    fullDesc:
      "Producera was designed to tackle the fragmented job market by creating a truly inclusive career ecosystem. As the UI/UX Designer, I faced the challenge of housing multiple complex functions—such as smart job matching, skill upscaling, and company transparency—within a single, intuitive mobile interface. I prioritized accessibility as a core pillar, ensuring that users with diverse needs can navigate the platform with ease. My design approach focused on reducing cognitive load, allowing job seekers to transition seamlessly from discovering opportunities to enhancing their skills through integrated course recommendations.",

    tools: [figma],

    features: [
      "Smart matching algorithm that aligns user profiles with relevant career opportunities",
      "Integrated 'Upskill' module offering curated courses based on industry demand",
      "Transparency-first company profiles featuring authentic culture reviews and ratings",
      "Inclusive design system with dedicated accessibility options for users with disabilities",
      "Multi-category job filters optimized for remote, part-time, and flexible work arrangements",
    ],

    challenges: [
      "Implementing accessibility standards without compromising the modern and clean aesthetic of the mobile UI",
      "Organizing a feature-heavy ecosystem (jobs, courses, and reviews) into a simplified, non-overwhelming user journey",
    ],

    results: [
      "Produced a high-fidelity prototype that balances rich functionality with an empathetic, user-centric interface",
      "Streamlined the path to employment by connecting job discovery with direct skill development in one cohesive flow",
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
      "Designed a holistic health ecosystem that personalizes the wellness journey through habit tracking, home workouts, and a curated healthy food marketplace.",

    fullDesc:
      "Fitflow was designed to help busy individuals integrate healthy habits into their daily routines without feeling overwhelmed. As the UI/UX Designer, I built an adaptable interface that shifts its focus based on the user's personal goals—whether it’s weight loss or general wellness. I focused on creating a seamless flow that connects data tracking (sleep and hydration) with actionable solutions, such as no-equipment workouts and a built-in marketplace for healthy meals. The goal was to transform health management from a chore into an engaging, unified experience that feels personal and motivating.",

    tools: [figma],

    features: [
      "Adaptive UI architecture that tailors content based on user-specific wellness goals",
      "Integrated health dashboard for real-time hydration and sleep cycle monitoring",
      "Seamless marketplace integration for frictionless healthy food ordering and delivery",
      "Curated library of equipment-free home workouts designed for busy schedules",
      "Local community hub for discovering nearby sports events and running activities",
    ],

    challenges: [
      "Harmonizing three distinct pillars—lifestyle tracking, e-commerce, and event discovery—into a single, uncluttered mobile interface",
      "Designing a dynamic onboarding process that effectively personalizes the entire app experience without increasing user drop-off",
    ],

    results: [
      "Established a high-engagement interface that lowers the barrier to maintaining daily health habits",
      "Delivered a cohesive design system that balances functional utility with a clean, motivating aesthetic",
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
      "A gamified environmental ecosystem designed to drive climate action through AI-powered personalization, community networking, and a reward-based engagement system.",

    fullDesc:
      "Hijauin was built to bridge the gap between environmental awareness and real-world impact in Indonesia. As the UI/UX Designer, my mission was to turn sustainability into a rewarding lifestyle rather than a burden. I integrated AI-driven insights to help users track their personal carbon footprint and receive personalized green activity recommendations. To drive long-term retention, I designed a comprehensive gamification layer—featuring a leveling system and eco-product rewards—that makes saving the planet feel like a shared achievement. The result is a vibrant community hub where social networking and environmental education meet intuitive, high-impact design.",

    tools: [figma],

    features: [
      "AI-powered impact calculator and personalized green activity engine",
      "Robust gamification framework including weekly leaderboards and leveling systems",
      "Redeemable reward points for sustainable and eco-friendly products",
      "Interactive education hub with AI-integrated chatbots and multimedia content",
      "Social networking layer for collaborative event planning and community building",
    ],

    challenges: [
      "Integrating high-density features like AI tools, community chats, and gaming mechanics without cluttering the mobile user journey",
      "Designing a reward flow that provides enough dopamine to keep users motivated without distracting from the core environmental mission",
    ],

    results: [
      "Produced a high-engagement prototype that effectively converts passive environmental concern into consistent, trackable action",
      "Established a seamless, community-centric digital space that lowers the barrier to collective climate participation",
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
      "Designed a civic-tech ecosystem for Smart City innovation, enabling transparent public reporting and data-driven urban collaboration through an interactive web interface.",

    fullDesc:
      "Berprogress was designed to redefine how citizens interact with their urban environment. As the UI/UX Designer, I transformed the concept of 'Smart Cities' into a tangible, user-centric platform that prioritizes transparency and civic agency. I engineered a flow that allows residents to report urban issues and track progress in real-time, bridging the gap between local government and the community. By integrating spatial data through interactive maps and centralized discussion forums, the design fosters a sense of collective ownership over city development, ensuring that urban innovation is accessible to every citizen, regardless of their technical background.",

    tools: [figma],

    features: [
      "Interactive spatial mapping for real-time urban data visualization",
      "Streamlined public reporting module with status tracking and transparency logs",
      "Dynamic community forums for collaborative urban problem-solving",
      "Real-time news feed integration for centralized civic updates",
      "Data-driven dashboards designed for high readability and public trust",
    ],

    challenges: [
      "Translating complex spatial data and municipal reports into an intuitive interface that doesn't overwhelm non-technical users",
      "Designing a universal navigation system that remains accessible for a diverse demographic, including elderly residents",
    ],

    results: [
      "Delivered a comprehensive high-fidelity design that effectively promotes digital democracy and civic participation",
      "Simplified the reporting process into a frictionless, multi-step journey that encourages residents to take action",
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
      "Elevated FBE Ubaya's visual communication through professional brand assets and promotional materials designed to maintain academic prestige and faculty integrity.",

    fullDesc:
      "Working with the Faculty of Business and Economics at Ubaya, I was responsible for producing high-quality visual assets that align with the faculty's established brand identity. My role went beyond simple execution; I focused on creating a structured content hierarchy for academic posters, event banners, and digital promotional materials. I prioritized a clean, professional aesthetic to ensure that every piece of information was both visually engaging and easy to digest. By maintaining a consistent design language across various media, I helped strengthen the faculty's professional image for both internal academic needs and external public engagement.",

    tools: [figma, illustrator],

    features: [
      "Strategic design of academic posters, event banners, and promotional assets",
      "Consistent application of faculty brand guidelines across diverse media formats",
      "High-clarity information architecture for complex academic data and schedules",
      "End-to-end visual content creation for faculty-wide events and social media",
      "Premium, professional-grade layouts tailored for academic prestige",
    ],

    challenges: [
      "Balancing formal academic requirements with modern, engaging design trends to attract student interest",
      "Managing high-volume design requests while ensuring strict consistency with the university's brand identity",
    ],

    results: [
      "Increased visual clarity and professionalism across all faculty-led communication channels",
      "Delivered a cohesive and recognizable design language that reinforced FBE Ubaya's brand presence",
    ],

    gallery: [fbeubaya],
    year: 2024,
    role: "Graphic Designer",
  },
  // ILPC V
  {
    id: "graphic-design-ilpc",
    nama: "Graphic Design - ILPC",
    slug: "graphic-design-ilpc",
    kategori: [PROJECT_CATEGORY.GRAPHIC_DESIGN],
    thumbnail: ilpc,

    shortDesc:
      "Directed the end-to-end visual identity and creative strategy for ILPC 2025, ensuring a unified brand experience across social media, digital assets, and live event documentation.",

    fullDesc:
      "As the Vice Coordinator for Design, Documentation, and Decoration, I was responsible for building the visual soul of ILPC 2025. I spearheaded the creation of a comprehensive design system—defining typography, color theory, and core visual elements—that stayed consistent across every touchpoint. My role involved high-level coordination with multiple divisions to deliver everything from high-traffic social media campaigns to complex rally game assets and website graphics. Beyond design, I managed the full documentation of the event, ensuring that the brand’s story was captured and preserved through a professional and cohesive lens.",

    tools: [figma, illustrator, premiere_pro],

    features: [
      "Development of a complete brand identity system and style guide",
      "Strategic social media content design and digital campaign management",
      "Custom asset creation for website UI, promotional materials, and interactive rally games",
      "Comprehensive event documentation strategy, covering photography and videography",
      "Leadership in cross-divisional creative workflows to ensure on-time delivery",
    ],

    challenges: [
      "Orchestrating a unified visual language across hundreds of disparate assets—from physical banners to digital interfaces",
      "Balancing creative leadership with high-volume production under tight, event-critical deadlines",
    ],

    results: [
      "Established a powerful and recognizable event brand that resonated with participants and partners alike",
      "Streamlined the creative production pipeline, delivering 100% of event-critical assets ahead of schedule",
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
      "Crafted high-engagement digital content and managed on-site visual documentation to amplify the Maniac event's digital reach and brand storytelling.",

    fullDesc:
      "As part of the Design, Documentation, and Decoration division, I focused on creating a vibrant social media presence for the Maniac event. My role involved translating the event's energy into a cohesive Instagram grid, designing promotional assets that maintained brand consistency while driving audience interest. Beyond digital design, I was on the front lines during the event, capturing the momentum through photography and videography. I worked to ensure that every key moment was documented with high quality, creating a professional visual archive that told the full story of the event's success.",

    tools: [figma, illustrator],

    features: [
      "Strategic design of cohesive Instagram feeds and digital promotional kits",
      "Real-time visual identity implementation across high-traffic social platforms",
      "Dynamic on-site event documentation including photography and videography",
      "Collaborative content creation within the DDD team to meet rapid production needs",
      "Curation of a high-quality visual archive for post-event marketing",
    ],

    challenges: [
      "Producing high-quality promotional content under tight schedules during the peak event cycle",
      "Adapting to fast-paced event environments to capture critical, unscripted moments with precision",
    ],

    results: [
      "Boosted event engagement and online visibility through a polished and attractive social media aesthetic",
      "Delivered a comprehensive visual record that effectively captured the event's atmosphere and key highlights",
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
      "Crafted a high-energy visual identity and digital content strategy for Industrial Games, driving participant engagement through strategic design and documentation.",

    fullDesc:
      "For the Industrial Games event, I served as a key contributor to the Design, Documentation, and Decoration division, where I was responsible for translating the event's competitive spirit into a compelling digital narrative. I designed a cohesive series of Instagram assets and promotional materials that maintained strict brand alignment while capturing the audience's attention. During the event, I pivoted to on-site documentation, utilizing photography and videography to capture high-stakes moments and key highlights. My work ensured a professional and consistent visual presence that bridged the gap between the live competition and its digital audience.",

    tools: [figma, illustrator],

    features: [
      "Creation of a cohesive and high-impact Instagram grid and promotional kit",
      "Strict implementation of the event's visual identity across all digital touchpoints",
      "Dynamic on-site photography and videography capturing key competitive moments",
      "Cross-divisional collaboration to produce rapid-response visual assets",
      "Comprehensive archival of event highlights for post-event engagement",
    ],

    challenges: [
      "Ensuring visual consistency across a high volume of diverse promotional assets under rapid-fire deadlines",
      "Navigating a high-energy, fast-paced event environment to document unscripted highlights without disruption",
    ],

    results: [
      "Significantly improved the event's digital reach through a polished and high-energy social media aesthetic",
      "Successfully delivered a high-quality visual library that effectively preserved the event's competitive atmosphere",
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
    logo: "/assets/experience/asah.webp",

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
