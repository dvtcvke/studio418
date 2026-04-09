import AnimatedSection from "./AnimatedSection";
import ContactForm from "./ContactForm";

export default function CTAFinal() {
  return (
    <section id="contact" className="py-24 bg-[#09090B] bg-grain">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <AnimatedSection>
            <span className="text-sm font-semibold text-[#F97316] uppercase tracking-widest">
              Prêt à commencer?
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-white leading-tight">
              Curieux de voir le résultat&nbsp;?
            </h2>
            <p className="mt-6 text-lg text-zinc-400 leading-relaxed">
              Entrez l&rsquo;adresse de votre site actuel (ou de votre page
              Facebook si vous n&rsquo;avez pas de site). On vous envoie une
              maquette gratuite en 48h.
            </p>
            <p className="mt-4 text-lg text-zinc-400">
              Zéro appel. Zéro obligation.
            </p>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Maquette en 48h
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                100% gratuit
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                Sans engagement
              </div>
            </div>
          </AnimatedSection>

          {/* Right: form */}
          <AnimatedSection delay={200}>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 sm:p-10">
              <ContactForm />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
