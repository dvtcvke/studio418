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
  // Editorial premium men's lifestyle layout — split asymmetric, vertical service list
  return (
    <div style={{ fontSize: "7px", lineHeight: 1.4 }}>
      {/* Browser chrome */}
      <div className="bg-[#1E1E1E] px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBD2F]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-[#2D2D2D] rounded-md h-4" />
        </div>
      </div>

      {/* Site — cream/dark editorial palette */}
      <div className="bg-[#F5F1EA] text-[#1A1410]">
        {/* Navbar — minimal serif-style */}
        <div className="px-5 py-3 flex items-center justify-between border-b border-[#1A1410]/10">
          <div className="flex items-center gap-1">
            <span className="text-[#1A1410] font-bold tracking-tight" style={{ fontSize: "10px", fontFamily: "Georgia, serif" }}>
              Cartier
            </span>
            <span className="text-[#8B6F47]" style={{ fontSize: "5px", letterSpacing: "2px" }}>EST. 2009</span>
          </div>
          <div className="flex gap-3 text-[#1A1410]/60" style={{ fontSize: "6px", letterSpacing: "1px", textTransform: "uppercase" }}>
            <span>Soins</span>
            <span>Histoire</span>
            <span>Réserver</span>
          </div>
        </div>

        {/* Editorial split hero — image left, big text right */}
        <div className="grid grid-cols-2 min-h-32">
          <div className="relative overflow-hidden">
            <img src="/images/mockup/barber.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="p-4 flex flex-col justify-center bg-[#F5F1EA]">
            <p className="text-[#8B6F47]" style={{ fontSize: "5px", letterSpacing: "2px" }}>QUÉBEC · DEPUIS 2009</p>
            <p className="text-[#1A1410] font-bold mt-1 leading-none" style={{ fontSize: "16px", fontFamily: "Georgia, serif", lineHeight: 0.95 }}>
              L&apos;art du
              <br />
              soin
              <br />
              masculin.
            </p>
            <span className="mt-3 self-start bg-[#1A1410] text-[#F5F1EA] font-bold px-3 py-1.5" style={{ fontSize: "6px", letterSpacing: "1px" }}>
              RÉSERVER →
            </span>
          </div>
        </div>

        {/* Editorial quote */}
        <div className="px-5 py-3 bg-[#1A1410] text-[#F5F1EA]">
          <p className="italic text-center" style={{ fontSize: "7px", fontFamily: "Georgia, serif" }}>
            &laquo; Quinze ans à perfectionner notre métier, un client à la fois. &raquo;
          </p>
          <p className="text-center text-[#8B6F47] mt-1" style={{ fontSize: "5px", letterSpacing: "2px" }}>
            ALEXANDRE CARTIER · MAÎTRE BARBIER
          </p>
        </div>

        {/* Services — vertical list with prices on right (real menu style) */}
        <div className="px-5 py-4">
          <p className="text-[#8B6F47]" style={{ fontSize: "5px", letterSpacing: "2px" }}>NOS PRESTATIONS</p>
          <p className="text-[#1A1410] font-bold mt-0.5 mb-3" style={{ fontSize: "11px", fontFamily: "Georgia, serif" }}>
            Le menu
          </p>

          {[
            { name: "Coupe Signature", desc: "Consultation, shampooing, coupe & finition", price: "45 $", img: "haircut" },
            { name: "Rasage Royal", desc: "Serviette chaude, huiles essentielles, rasoir droit", price: "55 $", img: "razor" },
            { name: "Soin de Barbe Premium", desc: "Taille précise, huiles premium, baume", price: "35 $", img: "beard" },
          ].map((s) => (
            <div key={s.name} className="flex items-center gap-3 py-2 border-b border-[#1A1410]/10">
              <div className="w-8 h-8 rounded overflow-hidden shrink-0">
                <img src={`/images/mockup/${s.img}.png`} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[#1A1410] font-bold" style={{ fontSize: "7px" }}>{s.name}</p>
                <p className="text-[#1A1410]/50 truncate" style={{ fontSize: "5px" }}>{s.desc}</p>
              </div>
              <p className="text-[#1A1410] font-bold shrink-0" style={{ fontSize: "9px", fontFamily: "Georgia, serif" }}>{s.price}</p>
            </div>
          ))}
        </div>

        {/* Booking widget mockup */}
        <div className="mx-5 mb-4 border-2 border-[#1A1410] p-3">
          <p className="text-[#1A1410] font-bold" style={{ fontSize: "7px", letterSpacing: "1px" }}>PROCHAINS CRÉNEAUX</p>
          <div className="grid grid-cols-4 gap-1 mt-2">
            {["Auj. 14h", "Auj. 16h", "Dem. 10h", "Dem. 14h"].map((slot) => (
              <div key={slot} className="bg-[#1A1410] text-[#F5F1EA] text-center py-1" style={{ fontSize: "5px" }}>
                {slot}
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#1A1410] text-[#F5F1EA] px-5 py-3">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold" style={{ fontSize: "8px", fontFamily: "Georgia, serif" }}>Cartier</p>
              <p className="text-[#8B6F47] mt-0.5" style={{ fontSize: "5px" }}>312 rue Cartier, Québec</p>
            </div>
            <div className="text-right" style={{ fontSize: "5px" }}>
              <p>Mar-Ven · 9h-19h</p>
              <p>Sam · 9h-17h</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GymMockup() {
  // Bold magazine-style — full-bleed hero with stats overlay, class schedule grid
  return (
    <div style={{ fontSize: "7px", lineHeight: 1.4 }}>
      {/* Browser chrome */}
      <div className="bg-[#1E1E1E] px-4 py-2.5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FEBD2F]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 mx-3">
          <div className="bg-[#2D2D2D] rounded-md h-4" />
        </div>
      </div>

      {/* Site — bold lime/black */}
      <div className="bg-[#0A0A0A] text-white">
        {/* Navbar — bold sans */}
        <div className="px-4 py-2 flex items-center justify-between bg-black">
          <div className="flex items-center gap-1">
            <span className="bg-[#C7F10F] text-black font-black px-1" style={{ fontSize: "9px", letterSpacing: "-0.5px" }}>FIT</span>
            <span className="text-white font-black" style={{ fontSize: "9px", letterSpacing: "-0.5px" }}>ZONE</span>
          </div>
          <div className="flex gap-3 text-zinc-500" style={{ fontSize: "6px", letterSpacing: "1px", textTransform: "uppercase", fontWeight: 700 }}>
            <span>Cours</span>
            <span>Coachs</span>
            <span>Tarifs</span>
            <span className="bg-[#C7F10F] text-black px-2 py-0.5">Essai gratuit</span>
          </div>
        </div>

        {/* Bold full-bleed hero with stats overlay */}
        <div className="relative h-36 overflow-hidden">
          <img src="/images/mockup/gym.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

          {/* Massive title — overlap left */}
          <div className="absolute top-3 left-4 max-w-[60%]">
            <p className="text-[#C7F10F] font-black" style={{ fontSize: "5px", letterSpacing: "2px" }}>QUÉBEC · 24/7</p>
            <p className="text-white font-black mt-1 leading-[0.85]" style={{ fontSize: "20px", letterSpacing: "-1px" }}>
              POUSSE
              <br />
              <span className="text-[#C7F10F]">PLUS</span>
              <br />
              FORT.
            </p>
          </div>

          {/* Stats overlay — bottom right */}
          <div className="absolute bottom-2 right-3 grid grid-cols-2 gap-2">
            <div className="bg-black/80 backdrop-blur px-2 py-1 border-l-2 border-[#C7F10F]">
              <p className="text-[#C7F10F] font-black" style={{ fontSize: "10px" }}>2500+</p>
              <p className="text-zinc-500 uppercase" style={{ fontSize: "4px", letterSpacing: "1px" }}>Membres</p>
            </div>
            <div className="bg-black/80 backdrop-blur px-2 py-1 border-l-2 border-[#C7F10F]">
              <p className="text-[#C7F10F] font-black" style={{ fontSize: "10px" }}>40+</p>
              <p className="text-zinc-500 uppercase" style={{ fontSize: "4px", letterSpacing: "1px" }}>Cours/sem</p>
            </div>
          </div>
        </div>

        {/* Marquee-style ticker */}
        <div className="bg-[#C7F10F] text-black py-1.5 flex justify-around overflow-hidden font-black uppercase" style={{ fontSize: "6px", letterSpacing: "1px" }}>
          <span>★ MUSCULATION</span>
          <span>★ HIIT</span>
          <span>★ YOGA</span>
          <span>★ CROSSFIT</span>
          <span>★ BOXE</span>
        </div>

        {/* Class schedule grid */}
        <div className="px-4 py-4">
          <div className="flex justify-between items-end mb-3">
            <div>
              <p className="text-[#C7F10F] font-black uppercase" style={{ fontSize: "5px", letterSpacing: "2px" }}>HORAIRE</p>
              <p className="text-white font-black uppercase mt-0.5" style={{ fontSize: "11px", letterSpacing: "-0.5px" }}>Cette semaine</p>
            </div>
            <span className="text-zinc-500" style={{ fontSize: "5px" }}>Voir tout →</span>
          </div>

          <div className="space-y-1.5">
            {[
              { day: "LUN", time: "06:00", name: "HIIT Morning", coach: "Marc", spots: "8/12" },
              { day: "MAR", time: "18:30", name: "Musculation", coach: "Sophie", spots: "10/15" },
              { day: "MER", time: "07:00", name: "Yoga Flow", coach: "Léa", spots: "5/10" },
              { day: "JEU", time: "19:00", name: "CrossFit", coach: "Tom", spots: "12/12" },
            ].map((c, i) => (
              <div key={i} className="grid grid-cols-[auto_auto_1fr_auto] gap-2 items-center bg-[#141414] border-l-2 border-[#C7F10F] px-2 py-1.5">
                <span className="text-[#C7F10F] font-black" style={{ fontSize: "7px", letterSpacing: "1px" }}>{c.day}</span>
                <span className="text-white font-bold" style={{ fontSize: "6px" }}>{c.time}</span>
                <div>
                  <p className="text-white font-bold" style={{ fontSize: "6px" }}>{c.name}</p>
                  <p className="text-zinc-500" style={{ fontSize: "5px" }}>avec {c.coach}</p>
                </div>
                <span className={`font-bold px-1.5 py-0.5 ${c.spots === "12/12" ? "bg-red-500/20 text-red-400" : "bg-[#C7F10F]/20 text-[#C7F10F]"}`} style={{ fontSize: "5px" }}>
                  {c.spots}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Coaches preview */}
        <div className="px-4 pb-4">
          <p className="text-[#C7F10F] font-black uppercase mb-2" style={{ fontSize: "5px", letterSpacing: "2px" }}>NOS COACHS</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { img: "weights", name: "Marc", spec: "Musculation" },
              { img: "cardio", name: "Sophie", spec: "Cardio" },
              { img: "yoga", name: "Léa", spec: "Yoga" },
            ].map((c) => (
              <div key={c.name} className="bg-[#141414] overflow-hidden">
                <div className="h-12 overflow-hidden">
                  <img src={`/images/mockup/${c.img}.png`} alt="" className="w-full h-full object-cover grayscale" />
                </div>
                <div className="p-1.5">
                  <p className="text-white font-black uppercase" style={{ fontSize: "6px" }}>{c.name}</p>
                  <p className="text-[#C7F10F]" style={{ fontSize: "5px" }}>{c.spec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bold CTA */}
        <div className="bg-[#C7F10F] text-black px-4 py-3 flex items-center justify-between">
          <div>
            <p className="font-black uppercase" style={{ fontSize: "9px", letterSpacing: "-0.3px" }}>Première séance offerte</p>
            <p className="font-bold opacity-70" style={{ fontSize: "5px" }}>Aucun engagement</p>
          </div>
          <span className="bg-black text-[#C7F10F] font-black uppercase px-3 py-1.5" style={{ fontSize: "7px" }}>
            JE M&apos;ESSAIE →
          </span>
        </div>

        {/* Footer */}
        <div className="bg-black px-4 py-2 flex justify-between items-center border-t border-[#C7F10F]/20">
          <div>
            <p className="text-[#C7F10F] font-black uppercase" style={{ fontSize: "7px" }}>FitZone</p>
            <p className="text-zinc-500" style={{ fontSize: "5px" }}>185 boul. Charest, Québec</p>
          </div>
          <div className="text-right text-zinc-500" style={{ fontSize: "5px" }}>
            <p className="text-[#C7F10F] font-bold">OUVERT 24/7</p>
            <p>365 jours / an</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MockupShowcase({ compact = false }: { compact?: boolean }) {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % 3);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  if (compact) {
    // Positions: 0=center, 1=right, 2=left
    const getPosition = (index: number) => {
      const pos = (index - active + 3) % 3;
      if (pos === 0) {
        // Center — front
        return {
          zIndex: 10,
          transform: "translateX(-50%) scale(1)",
          opacity: 1,
          left: "50%",
          filter: "none",
        };
      } else if (pos === 1) {
        // Right — behind
        return {
          zIndex: 5,
          transform: "translateX(-30%) scale(0.75) rotate(4deg)",
          opacity: 0.35,
          left: "50%",
          filter: "blur(0.5px)",
        };
      } else {
        // Left — behind
        return {
          zIndex: 5,
          transform: "translateX(-70%) scale(0.75) rotate(-4deg)",
          opacity: 0.35,
          left: "50%",
          filter: "blur(0.5px)",
        };
      }
    };

    const mockups = [
      <CafeMockup key="cafe" className="w-full" />,
      <BarberMockup key="barber" />,
      <GymMockup key="gym" />,
    ];

    return (
      <div
        className="relative w-full"
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.8s ease 0.5s",
          height: "270px",
        }}
      >
        <div className="absolute inset-0" style={{ transform: "scale(0.78)", transformOrigin: "center center" }}>
          {mockups.map((mockup, i) => {
            const pos = getPosition(i);
            return (
              <div
                key={i}
                className="absolute top-1/2 w-[360px] h-[200px] rounded-xl overflow-hidden shadow-xl border border-white/10"
                style={{
                  ...pos,
                  marginTop: "-100px",
                  transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {mockup}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Desktop carousel — same logic, bigger sizes
  const getDesktopPosition = (index: number) => {
    const pos = (index - active + 3) % 3;
    if (pos === 0) {
      // Center — front
      return {
        zIndex: 10,
        transform: "translate(-50%, -50%) scale(1) rotate(0deg)",
        opacity: 1,
        filter: "none",
      };
    } else if (pos === 1) {
      // Right — behind
      return {
        zIndex: 5,
        transform: "translate(-15%, -50%) scale(0.78) rotate(6deg)",
        opacity: 0.4,
        filter: "blur(1px)",
      };
    } else {
      // Left — behind
      return {
        zIndex: 5,
        transform: "translate(-85%, -50%) scale(0.78) rotate(-6deg)",
        opacity: 0.4,
        filter: "blur(1px)",
      };
    }
  };

  const desktopMockups = [
    { node: <CafeMockup className="w-full" />, glow: true },
    { node: <BarberMockup />, glow: false },
    { node: <GymMockup />, glow: false },
  ];

  return (
    <div
      className="relative w-full max-w-md mx-auto lg:mx-0"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease 0.5s, transform 0.8s ease 0.5s",
        height: "440px",
      }}
    >
      {/* Background glow — pulsing with active */}
      <div
        className="absolute -inset-10 bg-[radial-gradient(ellipse_at_center,_rgba(249,115,22,0.12)_0%,_transparent_70%)] blur-2xl"
        style={{ transition: "opacity 0.8s ease" }}
      />

      {desktopMockups.map((m, i) => {
        const pos = getDesktopPosition(i);
        const isActive = (i - active + 3) % 3 === 0;
        return (
          <div
            key={i}
            className={`absolute top-1/2 left-1/2 w-full h-[420px] rounded-xl overflow-hidden shadow-2xl border border-white/10 ${
              isActive ? "glow-orange" : ""
            }`}
            style={{
              ...pos,
              transition: "all 0.9s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            {m.node}
          </div>
        );
      })}
    </div>
  );
}
