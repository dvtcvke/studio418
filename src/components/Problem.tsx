import AnimatedSection from "./AnimatedSection";

export default function Problem() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center">
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-widest">
            Le problème
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight">
            Ne pas avoir de site moderne vous fait{" "}
            <span className="text-[#F97316]">perdre des clients</span> tous les
            jours.
          </h2>
          <p className="mt-6 text-lg text-[#64748B] leading-relaxed max-w-2xl mx-auto">
            Devis à 5&nbsp;000&nbsp;$, agences qui disparaissent après la
            livraison, jargon technique incompréhensible... vous avez autre
            chose à faire. On comprend.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
