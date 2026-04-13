import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions légales",
  robots: { index: false, follow: false },
};

export default function MentionsLegales() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="text-sm text-[#F97316] hover:underline mb-8 inline-block"
        >
          ← Retour à l&rsquo;accueil
        </Link>

        <h1 className="text-3xl font-bold text-zinc-900">Mentions légales</h1>
        <p className="mt-2 text-[#64748B]">
          Dernière mise à jour : avril 2026
        </p>

        <div className="mt-10 space-y-8 text-zinc-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              Éditeur du site
            </h2>
            <p>
              Le site <strong>studio418.co</strong> est édité par :
            </p>
            <ul className="mt-3 space-y-1">
              <li>
                <strong>Raison sociale :</strong> Digital Edge Labs LLC
              </li>
              <li>
                <strong>Adresse :</strong> 704 Wallace St, Suite 504, Clovis, NM
                88101, États-Unis
              </li>
              <li>
                <strong>Courriel :</strong> contact@studio418.co
              </li>
              <li>
                <strong>Nom commercial :</strong> Studio 418
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              Hébergement
            </h2>
            <p>
              Le site est hébergé par <strong>Vercel Inc.</strong>, 440 N Baxter
              St #4133, Coppell, TX 75019, États-Unis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              Propriété intellectuelle
            </h2>
            <p>
              L&rsquo;ensemble du contenu de ce site (textes, images, visuels,
              logo, maquettes) est la propriété exclusive de Digital Edge Labs
              LLC, sauf mention contraire. Toute reproduction, même partielle,
              est interdite sans autorisation préalable écrite.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              Responsabilité
            </h2>
            <p>
              Studio 418 s&rsquo;efforce de fournir des informations exactes et
              à jour. Toutefois, nous ne pouvons garantir l&rsquo;exactitude,
              l&rsquo;exhaustivité ou la pertinence des informations diffusées
              sur ce site. L&rsquo;utilisation du site se fait sous votre entière
              responsabilité.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              Droit applicable
            </h2>
            <p>
              Le présent site et ses mentions légales sont régis par les lois
              de l&rsquo;État du Nouveau-Mexique, États-Unis. Pour les
              consommateurs résidant au Québec, les dispositions impératives
              de la Loi sur la protection du consommateur du Québec
              s&rsquo;appliquent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              Liens utiles
            </h2>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/confidentialite"
                  className="text-[#F97316] hover:underline"
                >
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link
                  href="/conditions"
                  className="text-[#F97316] hover:underline"
                >
                  Conditions de service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
