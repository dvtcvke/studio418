import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  robots: { index: false, follow: false },
};

export default function Confidentialite() {
  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/"
          className="text-sm text-[#F97316] hover:underline mb-8 inline-block"
        >
          ← Retour à l&rsquo;accueil
        </Link>

        <h1 className="text-3xl font-bold text-zinc-900">
          Politique de confidentialité
        </h1>
        <p className="mt-2 text-[#64748B]">
          Dernière mise à jour : avril 2026
        </p>

        <div className="mt-10 space-y-8 text-zinc-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              1. Responsable du traitement
            </h2>
            <p>
              Digital Edge Labs LLC, opérant sous le nom commercial
              <strong> Studio 418</strong>, est responsable du traitement des
              renseignements personnels collectés via le site studio418.co.
            </p>
            <p className="mt-2">
              <strong>Courriel :</strong> contact@studio418.co
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              2. Données collectées
            </h2>
            <p>
              Lorsque vous remplissez notre formulaire de demande de maquette,
              nous collectons les informations suivantes :
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>Nom de votre commerce</li>
              <li>Adresse courriel</li>
              <li>
                URL de votre site web actuel ou page Facebook (optionnel)
              </li>
              <li>Description de votre activité</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              3. Finalités de la collecte
            </h2>
            <p>Vos données sont utilisées exclusivement pour :</p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>
                Vous envoyer une maquette gratuite de site web personnalisée
              </li>
              <li>Répondre à votre demande et assurer le suivi</li>
              <li>
                Vous contacter au sujet de nos services, uniquement si vous y
                avez consenti
              </li>
            </ul>
            <p className="mt-3">
              Nous ne vendons, ne louons et ne partageons jamais vos données
              personnelles avec des tiers à des fins commerciales.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              4. Base juridique
            </h2>
            <p>
              Le traitement de vos données repose sur votre consentement
              explicite, donné au moment de la soumission du formulaire,
              conformément à la <strong>Loi 25</strong> du Québec et à la{" "}
              <strong>Loi sur la protection des renseignements personnels
              et les documents électroniques (LPRPDE)</strong> du Canada.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              5. Durée de conservation
            </h2>
            <p>
              Vos données sont conservées pour une durée maximale de{" "}
              <strong>24 mois</strong> après votre dernière interaction avec
              nous. Passé ce délai, elles sont supprimées de nos systèmes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              6. Sécurité des données
            </h2>
            <p>
              Nous utilisons des mesures de sécurité appropriées pour protéger
              vos données, incluant le chiffrement SSL/TLS pour la transmission,
              l&rsquo;hébergement sur des serveurs sécurisés (Vercel) et
              l&rsquo;envoi des courriels via un service sécurisé (Resend).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              7. Vos droits
            </h2>
            <p>
              Conformément à la Loi 25 et à la LPRPDE, vous disposez des droits
              suivants :
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>
                <strong>Droit d&rsquo;accès</strong> : obtenir une copie de vos
                données personnelles
              </li>
              <li>
                <strong>Droit de rectification</strong> : corriger des données
                inexactes
              </li>
              <li>
                <strong>Droit de suppression</strong> : demander la suppression
                de vos données
              </li>
              <li>
                <strong>Droit de retrait du consentement</strong> : retirer votre
                consentement à tout moment
              </li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à{" "}
              <strong>contact@studio418.co</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              8. Cookies
            </h2>
            <p>
              Ce site n&rsquo;utilise aucun cookie de suivi, de publicité ou
              d&rsquo;analyse. Aucune donnée de navigation n&rsquo;est collectée
              à des fins commerciales. Seuls des cookies techniques essentiels au
              fonctionnement du site peuvent être utilisés.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              9. Modifications
            </h2>
            <p>
              Nous nous réservons le droit de modifier cette politique à tout
              moment. La date de dernière mise à jour est indiquée en haut de
              cette page.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              10. Contact
            </h2>
            <p>
              Pour toute question concernant cette politique de
              confidentialité :
            </p>
            <p className="mt-2">
              <strong>Digital Edge Labs LLC</strong>
              <br />
              contact@studio418.co
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
