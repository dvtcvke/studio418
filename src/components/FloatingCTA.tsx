"use client";

import { useState, useEffect } from "react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <a
        href="#contact"
        className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm px-5 py-3 rounded-full shadow-lg shadow-[#F97316]/25 transition-all hover:shadow-xl hover:shadow-[#F97316]/30"
      >
        Ma maquette gratuite
      </a>
    </div>
  );
}
