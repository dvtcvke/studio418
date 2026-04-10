"use client";

import { useState, useEffect } from "react";

function CafeMockup({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-2xl border border-white/10 ${className || ""}`}
      style={style}
    >
      {/* Browser chrome */}
      <div className="bg-[#1E1E1E] px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBD2F]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-[#2D2D2D] rounded-md px-3 py-1 h-4" />
        </div>
      </div>

      {/* ===== SITE CONTENT ===== */}
      <div
        className="bg-[#FAF8F5] text-[#2C2420] overflow-hidden"
        style={{ fontSize: "7px", lineHeight: 1.4 }}
      >
        {/* Navbar */}
        <div className="bg-[#2C2420] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span
              className="text-[#D4A574] font-bold"
              style={{ fontSize: "9px" }}
            >
              Café
            </span>
            <span className="text-white font-bold" style={{ fontSize: "9px" }}>
              Vieux-Port
            </span>
          </div>
          <div
            className="flex gap-3 text-[#BDB0A3]"
            style={{ fontSize: "6px" }}
          >
            <span>Menu</span>
            <span>À propos</span>
            <span>Réserver</span>
            <span>Contact</span>
          </div>
        </div>

        {/* Hero with real image */}
        <div className="relative h-28 overflow-hidden">
          <img
            src="/images/mockup/cafe-interior.png"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2420] via-[#2C2420]/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p
              className="text-[#D4A574] font-medium"
              style={{ fontSize: "5px", letterSpacing: "2px" }}
            >
              DEPUIS 1998 · QUÉBEC
            </p>
            <p
              className="text-white font-bold mt-0.5 drop-shadow-lg"
              style={{ fontSize: "12px", lineHeight: 1.2 }}
            >
              L&apos;art du café,
              <br />
              au c&oelig;ur du Vieux-Port.
            </p>
            <div className="mt-2 flex gap-2">
              <span
                className="bg-[#D4A574] text-[#2C2420] font-bold rounded-full px-3 py-1"
                style={{ fontSize: "6px" }}
              >
                Voir le menu
              </span>
              <span
                className="border border-white/60 text-white rounded-full px-3 py-1"
                style={{ fontSize: "6px" }}
              >
                Réserver
              </span>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="bg-[#2C2420] px-4 py-1.5 flex justify-center gap-6">
          <div className="text-center">
            <span
              className="text-[#D4A574] font-bold"
              style={{ fontSize: "8px" }}
            >
              4.8
            </span>
            <span className="text-[#BDB0A3] ml-0.5" style={{ fontSize: "5px" }}>
              ★★★★★
            </span>
          </div>
          <div className="w-px bg-[#4A3728]" />
          <div
            className="text-center text-[#BDB0A3]"
            style={{ fontSize: "5px" }}
          >
            <span
              className="text-[#D4A574] font-bold"
              style={{ fontSize: "8px" }}
            >
              1200+
            </span>{" "}
            avis Google
          </div>
          <div className="w-px bg-[#4A3728]" />
          <div
            className="text-center text-[#BDB0A3]"
            style={{ fontSize: "5px" }}
          >
            <span
              className="text-[#D4A574] font-bold"
              style={{ fontSize: "8px" }}
            >
              25
            </span>{" "}
            ans d&apos;expérience
          </div>
        </div>

        {/* Menu section with real photos */}
        <div className="px-4 py-4">
          <p
            className="text-[#D4A574] font-medium text-center"
            style={{ fontSize: "5px", letterSpacing: "2px" }}
          >
            NOS SPÉCIALITÉS
          </p>
          <p
            className="text-[#2C2420] font-bold text-center mt-0.5"
            style={{ fontSize: "9px" }}
          >
            Découvrez notre menu
          </p>

          <div className="grid grid-cols-3 gap-2 mt-3">
            {/* Card 1 — Espresso */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-10 overflow-hidden">
                <img
                  src="/images/mockup/espresso.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-1.5">
                <p
                  className="font-bold text-[#2C2420]"
                  style={{ fontSize: "6px" }}
                >
                  Espresso Double
                </p>
                <p className="text-[#8B7B6B]" style={{ fontSize: "5px" }}>
                  Torréfié sur place
                </p>
                <p
                  className="text-[#D4A574] font-bold mt-0.5"
                  style={{ fontSize: "7px" }}
                >
                  4,50 $
                </p>
              </div>
            </div>

            {/* Card 2 — Latte Érable */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-10 overflow-hidden">
                <img
                  src="/images/mockup/latte.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-1.5">
                <p
                  className="font-bold text-[#2C2420]"
                  style={{ fontSize: "6px" }}
                >
                  Latte Érable
                </p>
                <p className="text-[#8B7B6B]" style={{ fontSize: "5px" }}>
                  Sirop du Québec
                </p>
                <p
                  className="text-[#D4A574] font-bold mt-0.5"
                  style={{ fontSize: "7px" }}
                >
                  6,25 $
                </p>
              </div>
            </div>

            {/* Card 3 — Brunch */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="h-10 overflow-hidden">
                <img
                  src="/images/mockup/brunch.png"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-1.5">
                <p
                  className="font-bold text-[#2C2420]"
                  style={{ fontSize: "6px" }}
                >
                  Brunch Complet
                </p>
                <p className="text-[#8B7B6B]" style={{ fontSize: "5px" }}>
                  Sam &amp; Dim
                </p>
                <p
                  className="text-[#D4A574] font-bold mt-0.5"
                  style={{ fontSize: "7px" }}
                >
                  18,95 $
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mx-4 mb-4 bg-[#2C2420] rounded-lg px-4 py-3 text-center">
          <p className="text-white font-bold" style={{ fontSize: "8px" }}>
            Réservez votre table
          </p>
          <p className="text-[#BDB0A3] mt-0.5" style={{ fontSize: "5px" }}>
            Terrasse ouverte de mai à octobre
          </p>
          <span
            className="inline-block mt-1.5 bg-[#D4A574] text-[#2C2420] font-bold rounded-full px-4 py-1"
            style={{ fontSize: "6px" }}
          >
            Réserver maintenant →
          </span>
        </div>

        {/* Footer */}
        <div className="bg-[#2C2420] px-4 py-2 flex justify-between items-center">
          <div>
            <p
              className="text-[#D4A574] font-bold"
              style={{ fontSize: "7px" }}
            >
              Café Vieux-Port
            </p>
            <p className="text-[#8B7B6B]" style={{ fontSize: "5px" }}>
              42 rue Saint-Paul, Québec
            </p>
          </div>
          <div
            className="text-right text-[#8B7B6B]"
            style={{ fontSize: "5px" }}
          >
            <p>Lun-Ven: 7h-18h</p>
            <p>Sam-Dim: 8h-17h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarberMockup() {
  return (
    <div style={{ fontSize: "6px", lineHeight: 1.3 }}>
      {/* Browser chrome */}
      <div className="bg-[#1E1E1E] px-3 py-1.5 flex items-center gap-1.5">
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FEBD2F]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-[#2D2D2D] rounded h-3" />
        </div>
      </div>
      {/* Site */}
      <div className="bg-[#1A1625] text-white">
        {/* Nav */}
        <div className="px-3 py-1.5 flex items-center justify-between">
          <span className="text-[#8B5CF6] font-bold" style={{ fontSize: "7px" }}>Barbier Cartier</span>
          <div className="flex gap-1.5">
            <div className="w-4 h-0.5 rounded-full bg-zinc-600" />
            <div className="w-4 h-0.5 rounded-full bg-zinc-600" />
          </div>
        </div>
        {/* Hero with real image */}
        <div className="relative h-16 overflow-hidden">
          <img src="/images/mockup/barber.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1625] via-[#1A1625]/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
            <p className="text-white font-bold drop-shadow" style={{ fontSize: "8px" }}>Votre style,{"\n"}notre art.</p>
            <span className="mt-1 bg-[#8B5CF6] text-white font-bold rounded-full px-2 py-0.5" style={{ fontSize: "5px" }}>Réserver</span>
          </div>
        </div>
        {/* Services */}
        <div className="px-3 py-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-white/5 rounded p-1.5 text-center">
              <p className="text-[#8B5CF6] font-bold" style={{ fontSize: "6px" }}>Coupe</p>
              <p className="text-zinc-500" style={{ fontSize: "5px" }}>35 $</p>
            </div>
            <div className="bg-white/5 rounded p-1.5 text-center">
              <p className="text-[#8B5CF6] font-bold" style={{ fontSize: "6px" }}>Barbe</p>
              <p className="text-zinc-500" style={{ fontSize: "5px" }}>25 $</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GymMockup() {
  return (
    <div style={{ fontSize: "6px", lineHeight: 1.3 }}>
      {/* Browser chrome */}
      <div className="bg-[#1E1E1E] px-3 py-1.5 flex items-center gap-1.5">
        <div className="flex gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F57]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#FEBD2F]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-2">
          <div className="bg-[#2D2D2D] rounded h-3" />
        </div>
      </div>
      {/* Site */}
      <div className="bg-[#0A1A14] text-white">
        {/* Nav */}
        <div className="px-3 py-1.5 flex items-center justify-between">
          <span className="text-[#10B981] font-bold" style={{ fontSize: "7px" }}>FitZone QC</span>
          <div className="flex gap-1.5">
            <div className="w-4 h-0.5 rounded-full bg-zinc-600" />
            <div className="w-4 h-0.5 rounded-full bg-zinc-600" />
          </div>
        </div>
        {/* Hero with real image */}
        <div className="relative h-16 overflow-hidden">
          <img src="/images/mockup/gym.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1A14] via-[#0A1A14]/50 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
            <p className="text-white font-bold drop-shadow" style={{ fontSize: "8px" }}>Dépassez{"\n"}vos limites.</p>
            <span className="mt-1 bg-[#10B981] text-white font-bold rounded-full px-2 py-0.5" style={{ fontSize: "5px" }}>S&apos;inscrire</span>
          </div>
        </div>
        {/* Services */}
        <div className="px-3 py-2">
          <div className="grid grid-cols-2 gap-1">
            <div className="bg-white/5 rounded p-1.5 text-center">
              <p className="text-[#10B981] font-bold" style={{ fontSize: "6px" }}>Mensuel</p>
              <p className="text-zinc-500" style={{ fontSize: "5px" }}>49 $/m</p>
            </div>
            <div className="bg-white/5 rounded p-1.5 text-center">
              <p className="text-[#10B981] font-bold" style={{ fontSize: "6px" }}>Cours</p>
              <p className="text-zinc-500" style={{ fontSize: "5px" }}>15 $/s</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MockupShowcase({ compact = false }: { compact?: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  if (compact) {
    return (
      <div
        className="relative w-full"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.8s ease 0.5s",
          height: "220px",
        }}
      >
        <div className="absolute left-1/2 top-1/2" style={{ transform: "translate(-50%, -50%) scale(0.62)", width: "520px" }}>
          {/* Left — barbershop (landscape crop) */}
          <div
            className="absolute -left-4 top-6 w-[190px] opacity-35 rounded-xl overflow-hidden shadow-xl border border-white/10 max-h-32"
            style={{ transform: "rotate(-4deg)" }}
          >
            <BarberMockup />
          </div>

          {/* Right — gym (landscape crop) */}
          <div
            className="absolute -right-4 top-6 w-[190px] opacity-35 rounded-xl overflow-hidden shadow-xl border border-white/10 max-h-32"
            style={{ transform: "rotate(4deg)" }}
          >
            <GymMockup />
          </div>

          {/* Center — café (wider, dominant) */}
          <div className="relative z-10 mx-auto w-[360px] rounded-xl overflow-hidden max-h-52 glow-orange">
            <CafeMockup className="w-full" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative w-full max-w-md mx-auto lg:mx-0"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
      }}
    >
      {/* Background glow */}
      <div className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.12)_0%,_transparent_70%)] blur-2xl" />

      {/* Back mockup — barbershop */}
      <div
        className="absolute -top-6 -left-8 w-[55%] opacity-30 blur-[0.5px] animate-float-delayed rounded-xl overflow-hidden shadow-xl border border-white/10"
        style={{ transform: "rotate(-8deg)" }}
      >
        <BarberMockup />
      </div>

      {/* Back mockup — gym */}
      <div
        className="absolute -top-3 -right-6 w-[55%] opacity-35 blur-[0.5px] animate-float-delayed rounded-xl overflow-hidden shadow-xl border border-white/10"
        style={{ transform: "rotate(6deg)" }}
      >
        <GymMockup />
      </div>

      {/* Main mockup — full cafe site with real photos */}
      <CafeMockup className="relative w-full glow-orange animate-float" />
    </div>
  );
}
