import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import Navbar from "./components/Navbar.tsx";
import 'remixicon/fonts/remixicon.css';
import Footer from "./components/Footer.tsx";
import PreLoader from "./components/PreLoader.tsx";

import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PreLoader />
    <div className="container mx-auto px-8">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
);
