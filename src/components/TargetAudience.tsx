import { targetAudiences } from "@/data/site";
import AnimatedSection from "./AnimatedSection";

export default function TargetAudience() {
  return (
    <section className="py-24 bg-[#09090B] bg-grain">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-widest">
            Pour qui
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight">
            À qui c&rsquo;est destiné&nbsp;?
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Tout commerce local qui veut plus de clients sans se casser la tête.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-12 flex flex-wrap justify-center gap-3" delay={200}>
          {targetAudiences.map((audience) => (
            <span
              key={audience}
              className="inline-block px-5 py-2.5 rounded-full text-sm font-medium bg-white/5 text-zinc-300 border border-white/10 hover:border-[#F97316]/40 hover:text-[#F97316] hover:bg-[#F97316]/5 transition-all duration-300 cursor-default"
            >
              {audience}
            </span>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
