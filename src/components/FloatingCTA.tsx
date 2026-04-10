"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-3 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      {/* CTA button */}
      <a
        href="#contact"
        className="bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-sm px-5 py-3 rounded-full shadow-lg shadow-[#F97316]/25 transition-all hover:shadow-xl hover:shadow-[#F97316]/30"
      >
        Ma maquette gratuite
      </a>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="self-end w-10 h-10 rounded-full bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-all shadow-lg"
        aria-label="Retour en haut"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
}
