import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Memaksa browser kembali ke koordinat (0, 0) saat pathname berubah
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // Memberikan efek transisi scroll halus ke atas
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
