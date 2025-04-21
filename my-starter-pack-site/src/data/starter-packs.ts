import { StarterPack } from '@/types/starter-pack';

export const starterPacks: StarterPack[] = [
  {
    id: 1,
    name: "Developer Starter Pack",
    price: 24.99,
    category: "Professions",
    image: "/images/developer-starter-pack.svg",
    description: "Tout ce dont vous avez besoin pour commencer votre carrière de développeur. Ce pack comprend une figurine de développeur et tous les accessoires essentiels pour coder comme un pro.",
    accessories: [
      "Laptop avec stickers",
      "Tasse de café XXL",
      "Casque anti-bruit",
      "Clavier mécanique RGB",
      "Énergie Red Bull",
      "T-shirt 'It works on my machine'"
    ],
    features: [
      "Figurine articulée avec 12 points d'articulation",
      "Accessoires détachables",
      "Posture voûtée réaliste",
      "Cernes sous les yeux interchangeables"
    ],
    isNew: false,
    isBestseller: true,
    isLimitedEdition: false,
    stock: 100
  },
  {
    id: 2,
    name: "Data Scientist Starter Pack",
    price: 29.99,
    category: "Professions",
    image: "/images/data-scientist-starter-pack.svg",
    description: "Devenez un expert en données avec ce pack complet. Inclut une figurine de data scientist et tous les outils nécessaires pour analyser des données comme un pro.",
    accessories: [
      "Ordinateur portable avec Jupyter Notebook",
      "Tableau de visualisation miniature",
      "Tasse 'I ♥ Python'",
      "Mini serveur de données",
      "Lunettes de data nerd",
      "Carnet de formules statistiques"
    ],
    features: [
      "Figurine articulée avec expression 'Eureka!'",
      "Accessoires détachables",
      "Posture d'analyse de données réaliste",
      "Peut tenir un graphique miniature"
    ],
    isNew: true,
    isBestseller: false,
    isLimitedEdition: false,
    stock: 75
  },
  {
    id: 3,
    name: "Social Media Influencer Starter Pack",
    price: 27.99,
    category: "Personnalités",
    image: "/images/influencer-starter-pack.svg",
    description: "Tout ce dont vous avez besoin pour devenir un influenceur à succès. Ce pack comprend une figurine d'influenceur et tous les accessoires essentiels pour créer du contenu viral.",
    accessories: [
      "Smartphone dernier cri",
      "Ring light portable",
      "Microphone sans fil",
      "Carte 'Promo Code'",
      "Mini drone pour selfies",
      "Tenue tendance interchangeable"
    ],
    features: [
      "Figurine avec 5 expressions faciales différentes",
      "Poses pour selfies préprogrammées",
      "Accessoires détachables",
      "Compte followers miniature"
    ],
    isNew: false,
    isBestseller: true,
    isLimitedEdition: false,
    stock: 50
  },
  {
    id: 4,
    name: "Startup Founder Starter Pack",
    price: 34.99,
    category: "Professions",
    image: "/images/startup-founder-starter-pack.svg",
    description: "Lancez votre startup avec ce pack essentiel. Inclut une figurine de fondateur de startup et tous les accessoires nécessaires pour lever des fonds et pivoter comme un pro.",
    accessories: [
      "Pitch deck miniature",
      "Hoodie à logo personnalisable",
      "Tasse 'Hustle'",
      "Mini bureau open space",
      "Cartes de visite 'CEO & Founder'",
      "Graphique de croissance exponentielle"
    ],
    features: [
      "Figurine articulée avec gestes de pitch",
      "Expression faciale 'vision'",
      "Peut tenir un smartphone ou une tasse",
      "Posture de présentation TED Talk"
    ],
    isNew: false,
    isBestseller: false,
    isLimitedEdition: true,
    stock: 30
  },
  {
    id: 5,
    name: "Gamer Starter Pack",
    price: 26.99,
    category: "Personnalités",
    image: "/images/gamer-starter-pack.svg",
    description: "Équipez-vous comme un vrai gamer avec ce pack complet. Inclut une figurine de gamer et tous les accessoires essentiels pour dominer vos parties.",
    accessories: [
      "Chaise gaming ergonomique",
      "Casque RGB",
      "Clavier mécanique miniature",
      "Souris gaming 16000 DPI",
      "Canette d'énergie Monster",
      "Sac de chips tactique"
    ],
    features: [
      "Figurine avec LED RGB intégrées",
      "Postures de victoire et de rage quit",
      "Accessoires détachables",
      "Expressions faciales interchangeables"
    ],
    isNew: true,
    isBestseller: true,
    isLimitedEdition: false,
    stock: 85
  },
  {
    id: 6,
    name: "AI Prompt Engineer Starter Pack",
    price: 32.99,
    category: "Professions",
    image: "/images/prompt-engineer-starter-pack.svg",
    description: "Maîtrisez l'art du prompt engineering avec ce pack exclusif. Inclut une figurine d'ingénieur de prompts et tous les outils nécessaires pour communiquer avec l'IA.",
    accessories: [
      "Ordinateur avec ChatGPT ouvert",
      "Dictionnaire de tokens",
      "Carnet de prompts efficaces",
      "Tasse 'Prompt Whisperer'",
      "Mini modèle d'IA de poche",
      "Badge 'I speak AI'"
    ],
    features: [
      "Figurine avec expression 'Eureka!'",
      "Posture de réflexion profonde",
      "Accessoires détachables",
      "Cerveau illuminé en mode inspiration"
    ],
    isNew: true,
    isBestseller: false,
    isLimitedEdition: true,
    stock: 40
  },
  {
    id: 7,
    name: "Coffee Addict Starter Pack",
    price: 22.99,
    category: "Concepts",
    image: "/images/coffee-addict-starter-pack.svg",
    description: "Pour les vrais amateurs de café. Ce pack comprend une figurine de caféinomane et tous les accessoires essentiels pour votre dose quotidienne.",
    accessories: [
      "Machine à espresso miniature",
      "Tasse 'But First, Coffee'",
      "Moulin à café",
      "Trois sachets de café de spécialité",
      "Carnet de notes de dégustation",
      "Cuillère à café en or"
    ],
    features: [
      "Figurine avec tremblement des mains réaliste",
      "Expression 'avant/après café'",
      "Accessoires détachables",
      "Peut tenir une tasse de café"
    ],
    isNew: false,
    isBestseller: false,
    isLimitedEdition: false,
    stock: 60
  },
  {
    id: 8,
    name: "Remote Worker Starter Pack",
    price: 25.99,
    category: "Concepts",
    image: "/images/remote-worker-starter-pack.svg",
    description: "Tout ce dont vous avez besoin pour le travail à distance parfait. Inclut une figurine de télétravailleur et tous les accessoires essentiels pour être productif depuis n'importe où.",
    accessories: [
      "Bureau portable",
      "Pyjama professionnel (chemise en haut, pyjama en bas)",
      "Fond Zoom 'Bureau propre'",
      "Plante d'intérieur qui meurt lentement",
      "Bouton muet d'urgence",
      "Calendrier de réunions surchargé"
    ],
    features: [
      "Figurine avec deux tenues (professionnelle/décontractée)",
      "Expression 'vous m'entendez?'",
      "Accessoires détachables",
      "Posture 'je suis attentif' pour les visioconférences"
    ],
    isNew: false,
    isBestseller: true,
    isLimitedEdition: false,
    stock: 70
  }
];
