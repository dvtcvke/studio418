import { Check } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-widest">
            Tarification
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight">
            Des prix clairs. Aucun frais caché.
          </h2>
        </AnimatedSection>

        {/* Main offer — Creation */}
        <AnimatedSection delay={200}>
          <div className="relative bg-[#09090B] text-white rounded-2xl p-8 sm:p-10 shadow-2xl shadow-[#F97316]/10 border-2 border-[#F97316]/30">
            <span className="absolute -top-3 left-8 bg-[#F97316] text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
              Le plus demandé
            </span>

            <h3 className="text-lg font-semibold text-zinc-300 mt-2">
              Création ou Refonte de site web
            </h3>

            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-5xl sm:text-6xl font-bold tracking-tight text-white">
                2&nbsp;000&nbsp;$
              </span>
              <span className="text-lg text-zinc-400">paiement unique</span>
            </div>

            <p className="mt-3 text-zinc-400">
              Votre nouveau site web clé en main, prêt à convertir.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {[
                "Design sur-mesure et moderne",
                "Jusqu\u2019à 5 pages",
                "Optimisé pour le référencement local",
                "Intégration de vos liens & réservations",
                "Responsive — parfait sur mobile et tablette",
                "Livré en quelques jours",
              ].map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="mt-0.5 shrink-0 text-[#F97316]"
                  />
                  <span className="text-zinc-300">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-10 block text-center font-semibold py-4 rounded-full bg-[#F97316] hover:bg-[#EA580C] text-white transition-all text-lg"
            >
              Demander ma maquette gratuite
            </a>
          </div>
        </AnimatedSection>

        {/* Secondary — Conciergerie */}
        <AnimatedSection delay={400}>
          <div className="mt-6 bg-white rounded-2xl border border-zinc-200 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
              <div>
                <p className="text-sm font-semibold text-[#64748B] uppercase tracking-wider">
                  Après la mise en ligne
                </p>
                <h3 className="mt-1 text-xl font-bold text-zinc-900">
                  Conciergerie & Performance
                </h3>
              </div>
              <div className="shrink-0 text-right">
                <p className="text-sm text-[#64748B]">
                  Tout ça pour seulement
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-zinc-900">
                    99&nbsp;$
                  </span>
                  <span className="text-zinc-500">/ mois</span>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {[
                {
                  title: "Hébergement ultra-rapide",
                  detail:
                    "Serveurs nouvelle génération, site qui charge instantanément",
                },
                {
                  title: "Certificat SSL inclus",
                  detail:
                    "Connexion sécurisée, cadenas vert dans le navigateur",
                },
                {
                  title: "Surveillance technique 24/7",
                  detail:
                    "On détecte et règle les problèmes avant que vous les voyiez",
                },
                {
                  title: "1 modification par mois",
                  detail:
                    "Texte, horaires ou image — envoyez un formulaire, c\u2019est fait",
                },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-3 p-3 rounded-xl bg-[#FAFAF9]"
                >
                  <Check
                    size={16}
                    className="mt-0.5 shrink-0 text-[#F97316]"
                  />
                  <div>
                    <p className="text-sm font-semibold text-zinc-900">
                      {feature.title}
                    </p>
                    <p className="text-xs text-[#64748B] mt-0.5 leading-relaxed">
                      {feature.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 text-xs text-zinc-400 text-center">
              Aucun contrat à long terme &middot; Annulez quand vous voulez
            </p>
          </div>
        </AnimatedSection>

        {/* Custom quote */}
        <AnimatedSection delay={500}>
          <div className="mt-8 text-center bg-white rounded-2xl border border-dashed border-zinc-300 p-6">
            <p className="text-lg font-bold text-zinc-900">
              Besoin de plus de 5 pages&nbsp;?
            </p>
            <p className="mt-2 text-[#64748B]">
              Sites plus complets, fonctionnalités spécifiques — on fait
              aussi des devis personnalisés adaptés à votre projet.
            </p>
            <a
              href="#contact"
              className="inline-block mt-4 text-[#F97316] font-semibold hover:underline"
            >
              Demandez un devis sur-mesure →
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
