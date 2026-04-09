import { processSteps } from "@/data/site";
import AnimatedSection from "./AnimatedSection";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-[#FAFAF9]">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-widest">
            Comment ça marche
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight">
            Un processus pensé pour les gens pressés.
          </h2>
        </AnimatedSection>

        <AnimatedSection className="grid md:grid-cols-3 gap-8" delay={200}>
          {processSteps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-8 border border-zinc-200/80 hover:border-[#F97316]/40 hover:shadow-xl hover:shadow-[#F97316]/5 transition-all duration-300 group"
            >
              {/* Big styled number */}
              <span className="block text-7xl font-bold text-[#F97316] opacity-15 group-hover:opacity-25 transition-opacity leading-none">
                {step.number}
              </span>
              {/* Orange accent bar */}
              <div className="w-8 h-1 rounded-full bg-[#F97316] mt-4 mb-4 group-hover:w-12 transition-all" />
              <h3 className="text-xl font-bold text-zinc-900">
                {step.title}
              </h3>
              <p className="mt-3 text-[#64748B] leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
