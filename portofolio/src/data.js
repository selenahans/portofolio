import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Proyek1 from "./assets/proyek/proyek1.webp";
import Proyek2 from "./assets/proyek/proyek2.webp";
import Proyek3 from "./assets/proyek/proyek3.webp";
import Proyek4 from "./assets/proyek/proyek4.webp";
import Proyek5 from "./assets/proyek/proyek5.webp";
import Proyek6 from "./assets/proyek/proyek6.webp";

export const PROJECT_CATEGORY = {
  WEB_DEV: "web-dev",
  UI_UX: "ui-ux",
  GRAPHIC_DESIGN: "graphic-design",
};

import HeroImage from "/assets/hero-img.webp";
export const PROJECT_CATEGORY_LIST = [
  PROJECT_CATEGORY.WEB_DEV,
  PROJECT_CATEGORY.UI_UX,
  PROJECT_CATEGORY.GRAPHIC_DESIGN,
]
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
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Adobe Illustrator",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Figma",
    ket: "Design App",
    dad: "1100",
  },
];
export const listProyek = [
  {
    id: "website-sekolah",
    nama: "Website Sekolah",
    kategori: [PROJECT_CATEGORY.WEB_DEV, PROJECT_CATEGORY.UI_UX],
    thumbnail: Proyek1,

    shortDesc:
      "Website informasi sekolah dengan tampilan modern dan struktur konten yang jelas.",

    fullDesc:
      "Website sekolah ini dibuat untuk memudahkan siswa dan orang tua dalam mengakses informasi akademik, berita sekolah, dan agenda kegiatan. Fokus utama pada keterbacaan, navigasi sederhana, dan performa ringan.",

    tools: ["HTML", "CSS", "JavaScript", "AOS"],

    features: [
      "Landing page informatif",
      "Animasi scroll (AOS)",
      "Struktur konten rapi",
      "Responsive design",
    ],

    challenges: [
      "Menjaga performa meski banyak konten",
      "Membuat tampilan tetap rapi di layar kecil",
    ],

    results: [
      "Website lebih mudah dipahami oleh pengguna",
      "Waktu loading lebih cepat",
    ],

    gallery: [Proyek1],
    year: 2023,
    role: "Frontend Developer",
  },

  {
    id: "company-profile",
    nama: "Company Profile",
    kategori: [PROJECT_CATEGORY.WEB_DEV],
    thumbnail: Proyek2,

    shortDesc:
      "Website company profile profesional untuk meningkatkan branding perusahaan.",

    fullDesc:
      "Company profile ini dirancang untuk memperkenalkan layanan dan identitas perusahaan secara profesional dengan tampilan visual yang bersih dan modern.",

    tools: ["HTML", "CSS", "JavaScript", "Swiper", "Lightbox"],

    features: [
      "Slider interaktif",
      "Galeri foto",
      "Desain profesional",
    ],

    challenges: [
      "Menyesuaikan desain dengan identitas brand",
      "Optimasi tampilan visual",
    ],

    results: [
      "Brand terlihat lebih profesional",
      "Meningkatkan kepercayaan klien",
    ],

    gallery: [Proyek2],
    year: 2023,
    role: "Web Developer",
  },

  {
    id: "web-pernikahan",
    nama: "Web Pernikahan 2.0",
    kategori: [PROJECT_CATEGORY.WEB_DEV, PROJECT_CATEGORY.UI_UX],
    thumbnail: Proyek3,

    shortDesc:
      "Website undangan pernikahan digital yang modern dan interaktif.",

    fullDesc:
      "Web pernikahan ini memungkinkan pasangan membagikan undangan secara digital lengkap dengan informasi acara, galeri foto, dan animasi interaktif.",

    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],

    features: [
      "Single page application",
      "Animasi halus",
      "Desain elegan",
    ],

    challenges: [
      "Mengatur animasi agar tidak berlebihan",
      "Menjaga UX tetap nyaman",
    ],

    results: [
      "Undangan mudah dibagikan",
      "Tampilan lebih modern dibanding undangan cetak",
    ],

    gallery: [Proyek3],
    year: 2024,
    role: "Frontend Developer",
  },

  {
    id: "website-course",
    nama: "Website Course",
    kategori: [PROJECT_CATEGORY.WEB_DEV],
    thumbnail: Proyek4,

    shortDesc:
      "Website course online dengan layout terstruktur dan mudah dipahami.",

    fullDesc:
      "Website course ini dirancang untuk menampilkan materi pembelajaran, daftar kelas, dan informasi mentor dengan struktur yang jelas.",

    tools: ["Vite", "ReactJS", "Bootstrap"],

    features: [
      "Halaman kursus",
      "Struktur materi jelas",
      "Responsive layout",
    ],

    challenges: [
      "Mengatur banyak konten dalam satu halaman",
    ],

    results: [
      "User lebih mudah menemukan materi",
    ],

    gallery: [Proyek4],
    year: 2024,
    role: "Frontend Developer",
  },

  {
    id: "web-portfolio",
    nama: "Web Portfolio",
    kategori: [
      PROJECT_CATEGORY.WEB_DEV,
      PROJECT_CATEGORY.UI_UX,
      PROJECT_CATEGORY.GRAPHIC_DESIGN,
    ],
    thumbnail: Proyek5,

    shortDesc:
      "Portfolio personal untuk menampilkan karya dan skill.",

    fullDesc:
      "Portfolio ini berfungsi sebagai personal branding untuk menampilkan project, skill, dan pengalaman secara profesional.",

    tools: ["HTML", "CSS", "JavaScript"],

    features: [
      "List project",
      "Tentang saya",
      "Kontak",
    ],

    challenges: [
      "Menyusun konten agar tidak berlebihan",
    ],

    results: [
      "Personal branding lebih kuat",
    ],

    gallery: [Proyek5],
    year: 2023,
    role: "Frontend Developer",
  },

  {
    id: "company-profile-2",
    nama: "Company Profile 2.0",
    kategori: [PROJECT_CATEGORY.WEB_DEV],
    thumbnail: Proyek6,

    shortDesc:
      "Versi lanjutan company profile dengan teknologi modern.",

    fullDesc:
      "Company profile versi terbaru dengan performa lebih baik dan animasi modern menggunakan Next.js.",

    tools: ["NextJS", "TailwindCSS", "Framer Motion"],

    features: [
      "Animasi modern",
      "SEO friendly",
      "High performance",
    ],

    challenges: [
      "Mengoptimalkan animasi",
    ],

    results: [
      "Website lebih cepat",
      "Tampilan lebih premium",
    ],

    gallery: [Proyek6],
    year: 2024,
    role: "Frontend Developer",
  },
];
// const webProjects = listProyek.filter((p) =>
//   p.category.includes(PROJECT_CATEGORY.WEB_DEV)
// )
