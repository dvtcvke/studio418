import AnimatedSection from "./AnimatedSection";

export default function SocialProof() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Trust indicators */}
        <AnimatedSection>
          <div className="inline-flex flex-wrap justify-center gap-8 sm:gap-12 bg-[#FAFAF9] rounded-2xl px-10 py-8 border border-zinc-100">
            <div className="text-center">
              <p className="text-4xl font-bold text-[#F97316]">48h</p>
              <p className="text-sm text-[#64748B] mt-1">Délai maquette</p>
            </div>
            <div className="w-px bg-zinc-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-4xl font-bold text-[#F97316]">0&nbsp;$</p>
              <p className="text-sm text-[#64748B] mt-1">Si ça ne plaît pas</p>
            </div>
            <div className="w-px bg-zinc-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-4xl font-bold text-[#F97316]">100%</p>
              <p className="text-sm text-[#64748B] mt-1">Géré pour vous</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
