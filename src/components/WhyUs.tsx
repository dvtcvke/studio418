import { Eye, Zap, ShieldCheck, MapPin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const advantages = [
  {
    icon: Eye,
    title: "Design séduisant & SEO local",
    description:
      "Nous concevons des vitrines modernes qui reflètent la qualité de votre travail et qui sont structurées pour vous faire grimper dans les recherches Google à Québec.",
    size: "large" as const,
  },
  {
    icon: Zap,
    title: "Ultra-rapide",
    description:
      "Google adore, vos clients aussi. Votre site charge en un clin d\u2019\u0153il grâce à nos serveurs nouvelle génération.",
    size: "small" as const,
  },
  {
    icon: ShieldCheck,
    title: "Zéro maintenance",
    description:
      "Pas de mises à jour à gérer, pas de logiciel lourd qui plante un jeudi soir. On s\u2019occupe de tout en arrière-plan.",
    size: "small" as const,
  },
  {
    icon: MapPin,
    title: "Conçu pour Québec",
    description:
      'On connaît le marché local. Votre site est pensé pour le client qui cherche "meilleur [votre service] Québec" sur Google.',
    size: "large" as const,
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-widest">
            Pourquoi nous
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight">
            Pourquoi Studio&nbsp;
            <span className="text-[#F97316]">418</span>&nbsp;?
          </h2>
          <p className="mt-4 text-lg text-[#64748B]">
            La technologie de demain, le service d&rsquo;ici.
          </p>
        </AnimatedSection>

        {/* Bento grid — asymmetric layout */}
        <AnimatedSection delay={200}>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-5">
            {/* Card 1 — large, spans 2 cols */}
            <BentoCard item={advantages[0]} className="sm:col-span-2" />

            {/* Card 2 — small */}
            <BentoCard item={advantages[1]} />

            {/* Card 3 — small */}
            <BentoCard item={advantages[2]} />

            {/* Card 4 — large, spans 2 cols */}
            <BentoCard item={advantages[3]} className="sm:col-span-2" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

function BentoCard({
  item,
  className = "",
}: {
  item: (typeof advantages)[number];
  className?: string;
}) {
  const Icon = item.icon;
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-zinc-100 p-8 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/60 bg-[#FAFAF9] ${className}`}
    >
      {/* Large faded icon in background */}
      <Icon
        size={120}
        className="absolute -bottom-4 -right-4 text-zinc-900/[0.03] transition-transform duration-700 ease-out group-hover:scale-110 group-hover:text-[#F97316]/[0.06]"
        strokeWidth={0.8}
      />

      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F97316]/15 to-[#F97316]/5 flex items-center justify-center mb-5 transition-transform duration-500 ease-out group-hover:scale-110">
          <Icon size={24} className="text-[#F97316]" strokeWidth={1.8} />
        </div>
        <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
        <p className="mt-3 text-[#64748B] leading-relaxed max-w-md">
          {item.description}
        </p>
      </div>
    </div>
  );
}
