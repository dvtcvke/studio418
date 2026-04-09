import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#09090B]">
      <div className="text-center px-6">
        <p className="text-8xl font-bold text-[#F97316]">404</p>
        <h1 className="mt-4 text-2xl font-bold text-white">
          Page introuvable
        </h1>
        <p className="mt-3 text-zinc-400">
          La page que vous cherchez n&rsquo;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="inline-block mt-8 bg-[#F97316] hover:bg-[#EA580C] text-white font-semibold px-6 py-3 rounded-full transition-colors"
        >
          Retour à l&rsquo;accueil
        </Link>
      </div>
    </section>
  );
}
