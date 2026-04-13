import Link from "next/link";
import { navLinks, siteData } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[#09090B] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="text-white">Studio</span>
            <span className="text-[#F97316]">418</span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Legal links */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <Link
            href="/mentions-legales"
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            Mentions légales
          </Link>
          <Link
            href="/confidentialite"
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            Politique de confidentialité
          </Link>
          <Link
            href="/conditions"
            className="text-xs text-zinc-600 hover:text-zinc-400 transition-colors"
          >
            Conditions de service
          </Link>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-600">
            &copy; {new Date().getFullYear()} {siteData.name}. Tous droits
            réservés.
          </p>
          <p className="text-xs text-zinc-600">
            Agence web &middot; Région de Québec
          </p>
        </div>
      </div>
    </footer>
  );
}
