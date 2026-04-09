import {
  Coffee,
  Scissors,
  Paintbrush,
  Stethoscope,
  Dumbbell,
  Wrench,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const audiences = [
  { icon: Coffee, label: "Restos, cafés, bars" },
  { icon: Scissors, label: "Salons de coiffure & barbiers" },
  { icon: Paintbrush, label: "Studios de tattoo" },
  { icon: Stethoscope, label: "Cliniques & pros de la santé" },
  { icon: Dumbbell, label: "Gyms & studios de yoga" },
  { icon: Wrench, label: "Plombiers, électriciens, entrepreneurs" },
];

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
            Tout commerce local de Québec qui veut plus de clients sans se
            casser la tête.
          </p>
        </AnimatedSection>

        <AnimatedSection className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4" delay={200}>
          {audiences.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group relative bg-[#18181B] rounded-2xl p-6 text-center transition-all duration-500 ease-out hover:bg-[#1F1F23] hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 cursor-default"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#F97316]/10 mb-4 transition-transform duration-500 ease-out group-hover:scale-110">
                <Icon
                  size={24}
                  className="text-[#F97316]"
                  strokeWidth={1.5}
                />
              </div>
              <p className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-500">
                {label}
              </p>
            </div>
          ))}
        </AnimatedSection>
      </div>
    </section>
  );
}
