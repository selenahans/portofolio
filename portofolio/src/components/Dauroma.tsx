import React, { useState, useEffect } from "react";
import applevera from "../assets/dauroma/applevera.webp";
import orris from "../assets/dauroma/orris.webp";
import talya from "../assets/dauroma/talya.webp";
import ashbel from "../assets/dauroma/ashbel.webp";
import ertz from "../assets/dauroma/ertz.webp";
import discoverySet from "../assets/dauroma/discovery-set.webp";
const Dauroma = () => {
  const images = [applevera, orris, talya, ashbel, ertz, discoverySet];
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-20 py-10 max-w-6xl mx-auto px-4 lg:px-0" id="dauroma">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
        <div
          className="relative w-full h-[450px] overflow-hidden rounded-3xl shadow-lg"
          data-aos="fade-right"
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Dauroma Product ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
              loading="lazy"
            />
          ))}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-white w-4" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6" data-aos="fade-left">
          <div>
            <h1
              className="text-4xl font-bold mb-10"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              Entrepreneurial Journey
            </h1>
          </div>

          <p className="text-lg leading-relaxed text-[#483b32] opacity-90 text-justify">
            <strong>Dauroma</strong> is an eco-conscious perfume brand born from
            the
            <strong> 2025 P2MW entrepreneurship program</strong> with my team.
            We focus on sustainability through organic waste upcycling and a
            commitment to environmental restoration <>  </>
            <strong>converting 1 liter of eco-enzyme</strong> for every bottle
            purchased to support SDG 9 and 12.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="https://shopee.co.id/dauromaid"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#E5DFD3] text-[#4b4338] px-6 py-3 rounded-2xl hover:bg-[#A39383] hover:text-white hover:scale-105 transition-all duration-300 shadow-sm font-medium border border-[#A39383]/20"
            >
              <i className="ri-shopping-bag-line ri-lg"></i>
              <span>Shopee</span>
            </a>
            <a
              href="https://www.instagram.com/dauroma.id/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#E5DFD3] text-[#4b4338] px-6 py-3 rounded-2xl hover:bg-[#A39383] hover:text-white hover:scale-105 transition-all duration-300 shadow-sm font-medium border border-[#A39383]/20"
            >
              <i className="ri-instagram-line ri-lg"></i>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dauroma;
