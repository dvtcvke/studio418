export const siteData = {
  name: "Studio 418",
  tagline: "Zéro Bullshit, Zéro Stress",
  email: "info@studio418.ca",
  domain: "studio418.ca",
  description:
    "Studio 418 crée des sites web au design percutant, optimisés pour Google et ultra-rapides pour les entreprises de Québec.",
};

export const navLinks = [
  { label: "Comment ça marche", href: "#process" },
  { label: "Avantages", href: "#why" },
  { label: "Tarifs", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export const processSteps = [
  {
    number: "01",
    title: "Vous nous parlez de vous",
    description:
      "Un formulaire, 30 secondes. Zéro appel téléphonique. Donnez-nous le lien de votre site actuel, ou expliquez-nous simplement ce que vous faites si vous partez de zéro.",
  },
  {
    number: "02",
    title: "On crée votre maquette (gratuitement)",
    description:
      "En 48h, nous vous présentons une maquette sur-mesure au design soigné, optimisée pour séduire votre clientèle locale et capter l\u2019attention.",
  },
  {
    number: "03",
    title: "Vous décidez",
    description:
      "La maquette vous plaît\u00a0? On met le site en ligne. Sinon, vous repartez avec le visuel, sans frais, sans pression.",
  },
];

export const advantages = [
  {
    icon: "Palette" as const,
    title: "Design séduisant & SEO local",
    description:
      "Un site rapide ne sert à rien s\u2019il n\u2019attire pas l\u2019\u0153il. Nous concevons des vitrines modernes qui reflètent la qualité de votre travail et qui sont structurées pour vous faire grimper dans les recherches Google à Québec.",
  },
  {
    icon: "Zap" as const,
    title: "Ultra-rapide",
    description:
      "Google adore, vos clients aussi. Votre site charge en un clin d\u2019\u0153il grâce à nos serveurs nouvelle génération.",
  },
  {
    icon: "ShieldCheck" as const,
    title: "Zéro maintenance de votre côté",
    description:
      "Pas de mises à jour à gérer, pas de logiciel lourd qui plante un jeudi soir. On s\u2019occupe de tout en arrière-plan.",
  },
  {
    icon: "MapPin" as const,
    title: "Conçu pour Québec",
    description:
      'On connaît le marché local. Votre site est pensé pour le client qui cherche "meilleur [votre service] Québec" sur Google.',
  },
];

export const targetAudiences = [
  "Restos, cafés, bars",
  "Salons de coiffure & barbiers",
  "Studios de tattoo",
  "Cliniques & pros de la santé",
  "Gyms & studios de yoga",
  "Plombiers, électriciens, entrepreneurs",
  "Tout commerce local de Québec",
];

export const pricingPlans = [
  {
    name: "Création ou Refonte",
    price: "2\u00a0000\u00a0$",
    period: "Paiement unique",
    description: "Votre nouveau site web, clé en main.",
    features: [
      "Design sur-mesure et moderne",
      "Jusqu\u2019à 5 pages",
      "Structure optimisée pour le référencement local à Québec",
      "Intégration de vos liens (réservation, réseaux sociaux)",
      "Livré rapidement",
    ],
    highlighted: true,
  },
  {
    name: "Conciergerie & Performance",
    price: "99\u00a0$",
    period: "/ mois",
    description: "On gère tout. Vous ne touchez à rien.",
    features: [
      "Hébergement ultra-rapide",
      "Certificat de sécurité SSL",
      "Surveillance technique invisible",
      "1 modification incluse par mois",
      "Aucun contrat à long terme",
    ],
    highlighted: false,
  },
];
