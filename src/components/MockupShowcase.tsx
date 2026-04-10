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

      {/* Site */}
      <div className="bg-[#0F0A1A] text-[#E8DFFF]">
        {/* Navbar */}
        <div className="bg-[#1A1230] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-[#A78BFA] font-bold" style={{ fontSize: "9px" }}>Barbier</span>
            <span className="text-white font-bold" style={{ fontSize: "9px" }}>Cartier</span>
          </div>
          <div className="flex gap-3 text-[#9F8FBF]" style={{ fontSize: "6px" }}>
            <span>Services</span>
            <span>À propos</span>
            <span>Réserver</span>
            <span>Contact</span>
          </div>
        </div>

        {/* Hero with real image */}
        <div className="relative h-28 overflow-hidden">
          <img src="/images/mockup/barber.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A1A] via-[#0F0A1A]/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-[#A78BFA] font-medium" style={{ fontSize: "5px", letterSpacing: "2px" }}>BARBIER MAÎTRE · QUÉBEC</p>
            <p className="text-white font-bold mt-0.5 drop-shadow-lg" style={{ fontSize: "12px", lineHeight: 1.2 }}>
              Votre style,
              <br />
              notre signature.
            </p>
            <div className="mt-2 flex gap-2">
              <span className="bg-[#A78BFA] text-[#0F0A1A] font-bold rounded-full px-3 py-1" style={{ fontSize: "6px" }}>
                Réserver
              </span>
              <span className="border border-white/60 text-white rounded-full px-3 py-1" style={{ fontSize: "6px" }}>
                Voir nos prix
              </span>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="bg-[#1A1230] px-4 py-1.5 flex justify-center gap-6">
          <div className="text-center">
            <span className="text-[#A78BFA] font-bold" style={{ fontSize: "8px" }}>4.9</span>
            <span className="text-[#9F8FBF] ml-0.5" style={{ fontSize: "5px" }}>★★★★★</span>
          </div>
          <div className="w-px bg-[#2D2247]" />
          <div className="text-center text-[#9F8FBF]" style={{ fontSize: "5px" }}>
            <span className="text-[#A78BFA] font-bold" style={{ fontSize: "8px" }}>850+</span> avis
          </div>
          <div className="w-px bg-[#2D2247]" />
          <div className="text-center text-[#9F8FBF]" style={{ fontSize: "5px" }}>
            <span className="text-[#A78BFA] font-bold" style={{ fontSize: "8px" }}>15</span> ans
          </div>
        </div>

        {/* Services section */}
        <div className="px-4 py-4">
          <p className="text-[#A78BFA] font-medium text-center" style={{ fontSize: "5px", letterSpacing: "2px" }}>NOS SERVICES</p>
          <p className="text-white font-bold text-center mt-0.5" style={{ fontSize: "9px" }}>L&apos;art du soin masculin</p>

          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="bg-[#1A1230] rounded-lg overflow-hidden">
              <div className="h-10 overflow-hidden">
                <img src="/images/mockup/haircut.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-1.5">
                <p className="font-bold text-white" style={{ fontSize: "6px" }}>Coupe Signature</p>
                <p className="text-[#9F8FBF]" style={{ fontSize: "5px" }}>Shampooing inclus</p>
                <p className="text-[#A78BFA] font-bold mt-0.5" style={{ fontSize: "7px" }}>40 $</p>
              </div>
            </div>
            <div className="bg-[#1A1230] rounded-lg overflow-hidden">
              <div className="h-10 overflow-hidden">
                <img src="/images/mockup/razor.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-1.5">
                <p className="font-bold text-white" style={{ fontSize: "6px" }}>Rasage Royal</p>
                <p className="text-[#9F8FBF]" style={{ fontSize: "5px" }}>Serviette chaude</p>
                <p className="text-[#A78BFA] font-bold mt-0.5" style={{ fontSize: "7px" }}>35 $</p>
              </div>
            </div>
            <div className="bg-[#1A1230] rounded-lg overflow-hidden">
              <div className="h-10 overflow-hidden">
                <img src="/images/mockup/beard.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-1.5">
                <p className="font-bold text-white" style={{ fontSize: "6px" }}>Soin Barbe</p>
                <p className="text-[#9F8FBF]" style={{ fontSize: "5px" }}>Huiles premium</p>
                <p className="text-[#A78BFA] font-bold mt-0.5" style={{ fontSize: "7px" }}>30 $</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mx-4 mb-4 bg-gradient-to-r from-[#1A1230] to-[#2D2247] rounded-lg px-4 py-3 text-center">
          <p className="text-white font-bold" style={{ fontSize: "8px" }}>Réservez en 30 secondes</p>
          <p className="text-[#9F8FBF] mt-0.5" style={{ fontSize: "5px" }}>Disponibilité du jour en temps réel</p>
          <span className="inline-block mt-1.5 bg-[#A78BFA] text-[#0F0A1A] font-bold rounded-full px-4 py-1" style={{ fontSize: "6px" }}>
            Prendre rendez-vous →
          </span>
        </div>

        {/* Footer */}
        <div className="bg-[#1A1230] px-4 py-2 flex justify-between items-center">
          <div>
            <p className="text-[#A78BFA] font-bold" style={{ fontSize: "7px" }}>Barbier Cartier</p>
            <p className="text-[#9F8FBF]" style={{ fontSize: "5px" }}>312 rue Cartier, Québec</p>
          </div>
          <div className="text-right text-[#9F8FBF]" style={{ fontSize: "5px" }}>
            <p>Mar-Ven: 9h-19h</p>
            <p>Sam: 9h-17h</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GymMockup() {
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

      {/* Site */}
      <div className="bg-[#08140F] text-[#D0F5E5]">
        {/* Navbar */}
        <div className="bg-[#0E1F18] px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1">
            <span className="text-[#34D399] font-bold" style={{ fontSize: "9px" }}>Fit</span>
            <span className="text-white font-bold" style={{ fontSize: "9px" }}>Zone QC</span>
          </div>
          <div className="flex gap-3 text-[#7FA896]" style={{ fontSize: "6px" }}>
            <span>Cours</span>
            <span>Tarifs</span>
            <span>Horaire</span>
            <span>Essai gratuit</span>
          </div>
        </div>

        {/* Hero with real image */}
        <div className="relative h-28 overflow-hidden">
          <img src="/images/mockup/gym.png" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08140F] via-[#08140F]/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <p className="text-[#34D399] font-medium" style={{ fontSize: "5px", letterSpacing: "2px" }}>SALLE DE SPORT · QUÉBEC</p>
            <p className="text-white font-bold mt-0.5 drop-shadow-lg" style={{ fontSize: "12px", lineHeight: 1.2 }}>
              Dépassez
              <br />
              vos limites.
            </p>
            <div className="mt-2 flex gap-2">
              <span className="bg-[#34D399] text-[#08140F] font-bold rounded-full px-3 py-1" style={{ fontSize: "6px" }}>
                Essai gratuit
              </span>
              <span className="border border-white/60 text-white rounded-full px-3 py-1" style={{ fontSize: "6px" }}>
                Voir les cours
              </span>
            </div>
          </div>
        </div>

        {/* Trust bar */}
        <div className="bg-[#0E1F18] px-4 py-1.5 flex justify-center gap-6">
          <div className="text-center">
            <span className="text-[#34D399] font-bold" style={{ fontSize: "8px" }}>2500+</span>
            <span className="text-[#7FA896] ml-0.5" style={{ fontSize: "5px" }}>membres</span>
          </div>
          <div className="w-px bg-[#1F3329]" />
          <div className="text-center text-[#7FA896]" style={{ fontSize: "5px" }}>
            <span className="text-[#34D399] font-bold" style={{ fontSize: "8px" }}>40+</span> cours/sem
          </div>
          <div className="w-px bg-[#1F3329]" />
          <div className="text-center text-[#7FA896]" style={{ fontSize: "5px" }}>
            <span className="text-[#34D399] font-bold" style={{ fontSize: "8px" }}>24/7</span> accès
          </div>
        </div>

        {/* Services section */}
        <div className="px-4 py-4">
          <p className="text-[#34D399] font-medium text-center" style={{ fontSize: "5px", letterSpacing: "2px" }}>NOS COURS</p>
          <p className="text-white font-bold text-center mt-0.5" style={{ fontSize: "9px" }}>Trouvez votre rythme</p>

          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="bg-[#0E1F18] rounded-lg overflow-hidden">
              <div className="h-10 overflow-hidden">
                <img src="/images/mockup/weights.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-1.5">
                <p className="font-bold text-white" style={{ fontSize: "6px" }}>Musculation</p>
                <p className="text-[#7FA896]" style={{ fontSize: "5px" }}>Tous niveaux</p>
                <p className="text-[#34D399] font-bold mt-0.5" style={{ fontSize: "7px" }}>49 $/m</p>
              </div>
            </div>
            <div className="bg-[#0E1F18] rounded-lg overflow-hidden">
              <div className="h-10 overflow-hidden">
                <img src="/images/mockup/cardio.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-1.5">
                <p className="font-bold text-white" style={{ fontSize: "6px" }}>Cardio HIIT</p>
                <p className="text-[#7FA896]" style={{ fontSize: "5px" }}>3x / semaine</p>
                <p className="text-[#34D399] font-bold mt-0.5" style={{ fontSize: "7px" }}>15 $/s</p>
              </div>
            </div>
            <div className="bg-[#0E1F18] rounded-lg overflow-hidden">
              <div className="h-10 overflow-hidden">
                <img src="/images/mockup/yoga.png" alt="" className="w-full h-full object-cover" />
              </div>
              <div className="p-1.5">
                <p className="font-bold text-white" style={{ fontSize: "6px" }}>Yoga Flow</p>
                <p className="text-[#7FA896]" style={{ fontSize: "5px" }}>Studio dédié</p>
                <p className="text-[#34D399] font-bold mt-0.5" style={{ fontSize: "7px" }}>12 $/s</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mx-4 mb-4 bg-gradient-to-r from-[#0E1F18] to-[#1F3329] rounded-lg px-4 py-3 text-center">
          <p className="text-white font-bold" style={{ fontSize: "8px" }}>Première séance offerte</p>
          <p className="text-[#7FA896] mt-0.5" style={{ fontSize: "5px" }}>Aucun engagement, juste un essai</p>
          <span className="inline-block mt-1.5 bg-[#34D399] text-[#08140F] font-bold rounded-full px-4 py-1" style={{ fontSize: "6px" }}>
            Réserver mon essai →
          </span>
        </div>

        {/* Footer */}
        <div className="bg-[#0E1F18] px-4 py-2 flex justify-between items-center">
          <div>
            <p className="text-[#34D399] font-bold" style={{ fontSize: "7px" }}>FitZone QC</p>
            <p className="text-[#7FA896]" style={{ fontSize: "5px" }}>185 boul. Charest, Québec</p>
          </div>
          <div className="text-right text-[#7FA896]" style={{ fontSize: "5px" }}>
            <p>Lun-Ven: 5h-23h</p>
            <p>Sam-Dim: 7h-21h</p>
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
                className="absolute top-1/2 w-[360px] rounded-xl overflow-hidden shadow-xl border border-white/10 max-h-52"
                style={{
                  ...pos,
                  marginTop: "-104px",
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
            className={`absolute top-1/2 left-1/2 w-full rounded-xl overflow-hidden shadow-2xl border border-white/10 ${
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
