import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from 'react'
import Navbar from "./components/Navbar.tsx";
import "remixicon/fonts/remixicon.css";
import Footer from "./components/Footer.tsx";
import PreLoader from "./components/PreLoader.tsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PreLoader />
    {/* <div className="container mx-auto px-8">
      <Navbar />
      <App />
      <Footer />
    </div> */}
    <div className="container mx-auto px-8">
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </div>
  </StrictMode>,
);
