// Créer des images de base64 pour les produits de démonstration
// Ces images seront utilisées comme placeholders jusqu'à ce que de vraies images soient ajoutées

const fs = require('fs');
const path = require('path');

// Fonction pour créer une image SVG de couleur unie avec du texte
function createSVGImage(text, bgColor, textColor = '#ffffff') {
  return `
  <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
    <rect width="500" height="500" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial" font-size="24" fill="${textColor}" text-anchor="middle" dominant-baseline="middle">${text}</text>
  </svg>
  `;
}

// Créer le répertoire d'images s'il n'existe pas
const imagesDir = path.join(__dirname, 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Créer les images pour chaque produit
const products = [
  { name: 'Stick Solaire Anti-Taches 50+', color: '#F59E0B' },
  { name: 'Sérum Booster Hydratation', color: '#3B82F6' },
  { name: 'Gel Crème Hydratation Intense', color: '#60A5FA' },
  { name: 'Sérum Concentré Purifiant', color: '#10B981' },
  { name: 'Masque stick Peau Nette', color: '#34D399' }
];

products.forEach((product, index) => {
  const svg = createSVGImage(product.name, product.color);
  const filename = product.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
  fs.writeFileSync(path.join(imagesDir, `${filename}.svg`), svg);
  console.log(`Created image for ${product.name}`);
});

console.log('All product images created successfully!');
