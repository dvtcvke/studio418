"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import MockupShowcase from "./MockupShowcase";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-[#09090B] bg-grain bg-mesh overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            {/* Badge */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s",
              }}
            >
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#F97316] bg-[#F97316]/10 border border-[#F97316]/20 rounded-full px-4 py-1.5 mb-8">
                <span className="w-1.5 h-1.5 bg-[#F97316] rounded-full animate-pulse" />
                Studio de création web &middot; Québec
              </span>
            </div>

            {/* Title */}
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s",
              }}
            >
              Votre commerce mérite un site web qui{" "}
              <span className="text-[#F97316]">rapporte.</span>
            </h1>

            <p
              className="mt-3 text-2xl sm:text-3xl text-[#64748B] font-medium leading-snug"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s",
              }}
            >
              Sans les maux de tête techniques.
            </p>

            {/* Subtitle */}
            <p
              className="mt-8 text-lg text-zinc-400 max-w-lg leading-relaxed"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
              }}
            >
              Design percutant, optimisé Google, ultra-rapide. On crée votre
              site, vous servez vos clients.
            </p>

            {/* Mockup showcase (mobile — just above CTA) */}
            <div
              className="lg:hidden mt-8"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.8s ease 0.6s",
              }}
            >
              <MockupShowcase compact />
            </div>

            {/* CTA */}
            <div
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transition:
                  "opacity 0.6s ease 0.7s, transform 0.6s ease 0.7s",
              }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 mt-6 lg:mt-10 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold text-lg px-8 py-4 rounded-full transition-all hover:gap-3 shadow-lg shadow-[#F97316]/20"
              >
                Voir à quoi ressemblerait votre site
                <ArrowRight size={20} />
              </a>
              <p className="mt-4 text-sm text-zinc-500">
                Gratuit &middot; Sans engagement &middot; Réponse en 48h
              </p>
            </div>
          </div>

          {/* Right: mockup showcase (desktop) */}
          <div className="hidden lg:block">
            <MockupShowcase />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
