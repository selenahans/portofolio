import React, { useState, useEffect } from "react";

const Dauroma = () => {
  // Daftar 6 gambar Dauroma (Sesuaikan path-nya dengan file Anda)
  const images = [
    "/img/dauroma-1.jpg",
    "/img/dauroma-2.jpg",
    "/img/dauroma-3.jpg",
    "/img/dauroma-4.jpg",
    "/img/dauroma-5.jpg",
    "/img/dauroma-6.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Logic Looping Gambar tiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-20 py-10 max-w-6xl mx-auto px-4 lg:px-0" id="dauroma">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
        
        {/* SISI KIRI: SLIDER GAMBAR */}
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
          {/* Indicator Bullets (Opsional) */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full transition-all ${i === currentIndex ? "bg-white w-4" : "bg-white/50"}`}
              />
            ))}
          </div>
        </div>

        {/* SISI KANAN: PENJELASAN & LINK */}
        <div className="flex flex-col gap-6" data-aos="fade-left">
          <div>
            <span className="text-amber-800 font-bold tracking-widest uppercase text-sm italic">
              Featured Business
            </span>
            <h2 className="text-4xl font-bold text-[#372d29] mt-2">Dauroma</h2>
          </div>
          
          <p className="text-lg leading-relaxed text-[#483b32] opacity-90">
            <strong>Dauroma</strong> adalah brand parfum ramah lingkungan yang mengedepankan keberlanjutan. 
            Melalui produk utama kami seperti varian <strong>Ertz</strong>, kami mendukung tercapainya 
            SDG 9 dan 12 dengan menggunakan kemasan yang bertanggung jawab serta proses produksi yang minim limbah.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            {/* Link Shopee */}
            <a
              href="https://shopee.co.id/your-link"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-[#EE4D2D] text-white px-6 py-3 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-md font-medium"
            >
              <i className="ri-shopping-bag-line ri-lg"></i> Shopee
            </a>
            
            {/* Link Instagram */}
            <a
              href="https://instagram.com/dauroma"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white px-6 py-3 rounded-2xl hover:scale-105 transition-transform duration-300 shadow-md font-medium"
            >
              <i className="ri-instagram-line ri-lg"></i> Instagram
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dauroma;