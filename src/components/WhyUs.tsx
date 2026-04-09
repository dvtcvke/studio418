import { Eye, Zap, ShieldCheck, MapPin } from "lucide-react";
import { advantages } from "@/data/site";
import AnimatedSection from "./AnimatedSection";

const iconMap = {
  Palette: Eye,
  Zap,
  ShieldCheck,
  MapPin,
} as const;

export default function WhyUs() {
  return (
    <section id="why" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-[#F97316] uppercase tracking-widest">
            Pourquoi nous
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-zinc-900 leading-tight">
            Pourquoi Studio&nbsp;<span className="text-[#F97316]">418</span>&nbsp;?
          </h2>
          <p className="mt-4 text-lg text-[#64748B]">
            La technologie de demain, le service d&rsquo;ici.
          </p>
        </AnimatedSection>

        <AnimatedSection className="grid sm:grid-cols-2 gap-6" delay={200}>
          {advantages.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="group p-8 rounded-2xl border border-zinc-200/80 hover:border-[#F97316]/30 hover:shadow-xl hover:shadow-[#F97316]/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#F97316]/15 to-[#EA580C]/5 flex items-center justify-center mb-6 group-hover:from-[#F97316]/25 group-hover:to-[#EA580C]/10 transition-all">
                  <Icon
                    size={28}
                    className="text-[#F97316]"
                    strokeWidth={1.8}
                  />
                </div>
                <h3 className="text-xl font-bold text-zinc-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </AnimatedSection>
      </div>
    </section>
  );
}
