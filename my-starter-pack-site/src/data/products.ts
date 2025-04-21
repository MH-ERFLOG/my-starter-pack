import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: 1,
    name: "Stick Solaire Anti-Taches 50+",
    price: 13.90,
    category: "Sun Protect",
    image: "/images/stick-solaire-anti-taches-50.svg",
    description: "Notre Stick Solaire Anti-Taches SPF50+ offre une très haute protection contre les UVA/UVB, responsables des taches, brûlures et du vieillissement cutané. Enrichi en Vitamine E, il neutralise les radicaux libres générés par le soleil.",
    features: [
      "Format stick nomade",
      "Très haute protection UVA/UVB (SPF50+)",
      "Enrichi en Vitamine E",
      "Texture non grasse et invisible",
      "Idéal pour les zones sensibles (visage, lèvres, cicatrices)",
      "Résistant à l'eau"
    ],
    usage: "Appliquer généreusement sur les zones exposées 20 minutes avant l'exposition au soleil. Renouveler l'application toutes les 2 heures et après chaque baignade.",
    ingredients: "Aqua, Homosalate, Ethylhexyl Salicylate, Dibutyl Adipate, Diethylamino Hydroxybenzoyl Hexyl Benzoate, Bis-Ethylhexyloxyphenol Methoxyphenyl Triazine, Ethylhexyl Triazone, C12-15 Alkyl Benzoate, Glycerin, Tocopherol, Tocopheryl Acetate, Parfum.",
    isNew: false,
    isBestseller: true,
    stock: 100
  },
  {
    id: 2,
    name: "Sérum Booster Hydratation",
    price: 24.90,
    category: "Hydratation",
    image: "/images/srum-booster-hydratation.svg",
    description: "Notre Sérum Booster Hydratation est un concentré d'actifs hydratants qui renforce la barrière cutanée et maintient l'hydratation naturelle de la peau. Enrichi en Acide Hyaluronique, Céramides et Glycogène, il offre une hydratation intense et durable.",
    features: [
      "Formule concentrée en actifs hydratants",
      "Enrichi en Acide Hyaluronique, Céramides et Glycogène",
      "Texture légère et non grasse",
      "Pénétration rapide",
      "Convient à tous types de peaux"
    ],
    usage: "Appliquer matin et soir sur une peau propre et sèche, avant votre crème hydratante. Déposer quelques gouttes sur le visage et le cou, puis masser délicatement jusqu'à absorption complète.",
    ingredients: "Aqua, Glycerin, Propanediol, Sodium Hyaluronate, Ceramide NP, Glycogen, Panthenol, Tocopherol, Xanthan Gum, Citric Acid, Sodium Benzoate, Potassium Sorbate.",
    isNew: true,
    isBestseller: false,
    stock: 100
  },
  {
    id: 3,
    name: "Gel Crème Hydratation Intense",
    price: 19.90,
    category: "Hydratation",
    image: "/images/gel-crme-hydratation-intense.svg",
    description: "Notre Gel Crème Hydratation Intense offre une hydratation optimale pour tous les types de peaux. Sa formule enrichie en Acide Hyaluronique et Céramides renforce la barrière cutanée et maintient l'hydratation naturelle de la peau.",
    features: [
      "Formule gel-crème légère et non grasse",
      "Enrichi en Acide Hyaluronique et Céramides",
      "Hydratation intense et longue durée",
      "Pénétration rapide",
      "Convient à tous types de peaux, même mixtes"
    ],
    usage: "Appliquer matin et soir sur une peau propre et sèche. Pour une hydratation optimale, appliquer après le Sérum Booster Hydratation.",
    ingredients: "Aqua, Glycerin, Propanediol, Sodium Hyaluronate, Ceramide NP, Panthenol, Tocopherol, Xanthan Gum, Citric Acid, Sodium Benzoate, Potassium Sorbate.",
    isNew: false,
    isBestseller: false,
    stock: 100
  },
  {
    id: 4,
    name: "Sérum Concentré Purifiant",
    price: 24.90,
    category: "Purifiante",
    image: "/images/srum-concentr-purifiant.svg",
    description: "Notre Sérum Concentré Purifiant est spécialement formulé pour les peaux à imperfections. Sa formule enrichie en Acide Salicylique, Niacinamide et Zinc régule la production de sébum et purifie la peau en douceur.",
    features: [
      "Formule concentrée en actifs purifiants",
      "Enrichi en Acide Salicylique, Niacinamide et Zinc",
      "Texture légère et non grasse",
      "Pénétration rapide",
      "Convient aux peaux mixtes à grasses"
    ],
    usage: "Appliquer matin et soir sur une peau propre et sèche. Déposer quelques gouttes sur le visage en évitant le contour des yeux, puis masser délicatement jusqu'à absorption complète.",
    ingredients: "Aqua, Propanediol, Niacinamide, Salicylic Acid, Zinc PCA, Panthenol, Tocopherol, Xanthan Gum, Citric Acid, Sodium Benzoate, Potassium Sorbate.",
    isNew: false,
    isBestseller: false,
    stock: 100
  },
  {
    id: 5,
    name: "Masque stick Peau Nette",
    price: 16.90,
    category: "Purifiante",
    image: "/images/masque-stick-peau-nette.svg",
    description: "Notre Masque stick Peau Nette est idéal pour purifier la peau en profondeur. Sa formule enrichie en Argile Verte et Prébiotiques élimine les impuretés et resserre les pores tout en respectant l'équilibre naturel de la peau.",
    features: [
      "Format stick pratique et nomade",
      "Enrichi en Argile Verte et Prébiotiques",
      "Purifie la peau en profondeur",
      "Resserre les pores",
      "Convient aux peaux mixtes à grasses"
    ],
    usage: "Appliquer sur peau propre et sèche. Laisser poser 10 minutes puis rincer à l'eau tiède. Utiliser 1 à 2 fois par semaine.",
    ingredients: "Aqua, Kaolin, Montmorillonite, Glycerin, Alpha-Glucan Oligosaccharide, Panthenol, Tocopherol, Xanthan Gum, Citric Acid, Sodium Benzoate, Potassium Sorbate.",
    isNew: true,
    isBestseller: false,
    stock: 100
  }
];
