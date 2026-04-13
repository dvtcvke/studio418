import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Conditions de service",
};

export default function Conditions() {
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
          Conditions de service
        </h1>
        <p className="mt-2 text-[#64748B]">
          Dernière mise à jour : avril 2026
        </p>

        <div className="mt-10 space-y-8 text-zinc-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              1. Objet
            </h2>
            <p>
              Les présentes conditions régissent les services de création et de
              maintenance de sites web proposés par Digital Edge Labs LLC,
              opérant sous le nom commercial <strong>Studio 418</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              2. Services proposés
            </h2>
            <h3 className="font-semibold text-zinc-900 mt-4 mb-2">
              2.1 Maquette gratuite
            </h3>
            <p>
              Studio 418 propose une maquette visuelle gratuite et sans
              engagement, livrée dans un délai approximatif de 48 heures
              ouvrables. La maquette reste la propriété de Studio 418 tant que
              le service de création n&rsquo;a pas été commandé et payé.
            </p>

            <h3 className="font-semibold text-zinc-900 mt-4 mb-2">
              2.2 Création ou refonte de site web
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Prix : <strong>2&nbsp;000&nbsp;$ + taxes applicables</strong>{" "}
                (paiement unique)
              </li>
              <li>Inclut un design sur-mesure, jusqu&rsquo;à 5 pages</li>
              <li>
                Optimisation pour le référencement local (SEO) à Québec
              </li>
              <li>
                Intégration des liens de réservation et réseaux sociaux
              </li>
              <li>Design responsive (mobile, tablette, ordinateur)</li>
            </ul>

            <h3 className="font-semibold text-zinc-900 mt-4 mb-2">
              2.3 Conciergerie & Performance
            </h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                Prix : <strong>99&nbsp;$ / mois + taxes applicables</strong>
              </li>
              <li>Hébergement sur serveurs haute performance</li>
              <li>Certificat SSL inclus</li>
              <li>Surveillance technique continue</li>
              <li>
                1 modification par mois (texte, horaires ou image), effectuée
                par notre équipe sur demande
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              3. Tarification et taxes
            </h2>
            <p>
              Tous les prix affichés sur le site sont en dollars canadiens (CAD)
              et <strong>s&rsquo;entendent avant taxes</strong>. Les taxes
              applicables (TPS 5% et TVQ 9,975%) seront ajoutées lors de la
              facturation, le cas échéant.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              4. Paiement
            </h2>
            <p>
              Le paiement de la création du site est dû à la commande. Le
              forfait de conciergerie est facturé mensuellement. Les modalités
              de paiement acceptées vous seront communiquées lors de la
              confirmation de commande.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              5. Résiliation
            </h2>
            <p>
              Le forfait Conciergerie & Performance est{" "}
              <strong>sans engagement</strong>. Vous pouvez l&rsquo;annuler à
              tout moment en nous contactant par courriel. La résiliation prend
              effet à la fin de la période mensuelle en cours. Aucun
              remboursement au prorata n&rsquo;est effectué pour le mois en
              cours.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              6. Propriété du site livré
            </h2>
            <p>
              Une fois le paiement intégral reçu, le site web livré devient
              votre propriété. Toutefois, les outils, frameworks et
              bibliothèques utilisés restent sous leurs licences respectives.
              En cas de résiliation du forfait Conciergerie, le code source
              peut vous être remis sur demande.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              7. Délais de livraison
            </h2>
            <p>
              Les délais de livraison sont donnés à titre indicatif. Studio 418
              s&rsquo;engage à livrer la maquette dans un délai approximatif de
              48 heures ouvrables et le site final dans un délai convenu
              mutuellement. Les retards ne donnent pas lieu à indemnisation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              8. Limitation de responsabilité
            </h2>
            <p>
              Studio 418 ne saurait être tenu responsable des dommages
              indirects, pertes de revenus, pertes de données ou interruptions
              d&rsquo;activité résultant de l&rsquo;utilisation de nos services.
              Notre responsabilité totale est limitée au montant des sommes
              effectivement versées par le client au cours des 12 derniers mois.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              9. Projets sur-mesure
            </h2>
            <p>
              Pour les projets dépassant 5 pages ou nécessitant des
              fonctionnalités spécifiques, un devis personnalisé sera établi.
              Les conditions particulières seront précisées dans le devis.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              10. Droit applicable
            </h2>
            <p>
              Les présentes conditions sont régies par les lois de l&rsquo;État
              du Nouveau-Mexique, États-Unis. Pour les consommateurs résidant
              au Québec, les dispositions impératives de la Loi sur la
              protection du consommateur du Québec et de la Loi 25 sur la
              protection des renseignements personnels s&rsquo;appliquent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-zinc-900 mb-3">
              11. Contact
            </h2>
            <p>
              Pour toute question concernant ces conditions :
            </p>
            <p className="mt-2">
              <strong>Digital Edge Labs LLC</strong>
              <br />
              info@studio418.co
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
