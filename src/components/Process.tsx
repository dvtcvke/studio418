import { processSteps } from "@/data/site";
import AnimatedSection from "./AnimatedSection";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#09090B] bg-grain">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-widest">
            Comment ça marche
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight">
            Un processus pensé pour les gens pressés.
          </h2>
        </AnimatedSection>

        <AnimatedSection className="grid md:grid-cols-3 gap-8" delay={200}>
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="group relative bg-[#18181B] rounded-2xl p-8 border border-white/5 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40"
            >
              {/* Massive background number */}
              <span
                className="absolute -top-6 -right-3 text-[10rem] font-bold leading-none text-white/[0.03] select-none transition-colors duration-700 group-hover:text-[#F97316]/[0.07]"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div className="relative">
                {/* Small visible number */}
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#F97316] text-white text-sm font-bold mb-5">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-[#64748B] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
