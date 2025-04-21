const fs = require('fs');
const path = require('path');

// Créer le répertoire d'images s'il n'existe pas
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Fonction pour générer une image SVG simple pour un starter pack
function generateStarterPackImage(name, filename, bgColor, fgColor) {
  // Créer un SVG directement
  const svgContent = `
<svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
  <!-- Fond de l'emballage -->
  <rect width="500" height="500" fill="${bgColor}" />
  
  <!-- Cadre de l'emballage -->
  <rect x="50" y="50" width="400" height="400" fill="#ffffff" />
  
  <!-- Figurine simplifiée -->
  <circle cx="250" cy="150" r="50" fill="${fgColor}" />
  <rect x="200" y="200" width="100" height="150" fill="${fgColor}" />
  <rect x="150" y="200" width="50" height="20" fill="${fgColor}" />
  <rect x="300" y="200" width="50" height="20" fill="${fgColor}" />
  <rect x="210" y="350" width="30" height="80" fill="${fgColor}" />
  <rect x="260" y="350" width="30" height="80" fill="${fgColor}" />
  
  <!-- Accessoires -->
  <rect x="350" y="150" width="50" height="50" fill="${fgColor}" opacity="0.8" rx="5" />
  <rect x="350" y="220" width="50" height="30" fill="${fgColor}" opacity="0.8" rx="5" />
  <rect x="350" y="270" width="50" height="40" fill="${fgColor}" opacity="0.8" rx="5" />
  
  <!-- Texte "STARTER PACK" en haut -->
  <text x="250" y="40" font-family="Arial, sans-serif" font-size="24" font-weight="bold" text-anchor="middle" fill="#000000">STARTER PACK</text>
  
  <!-- Nom du pack en bas -->
  <text x="250" y="440" font-family="Arial, sans-serif" font-size="20" font-weight="bold" text-anchor="middle" fill="#000000">${name}</text>
  
  <!-- Badge "Limited Edition" si applicable -->
  ${name.includes('Founder') || name.includes('Engineer') ? 
    `<g>
      <circle cx="100" cy="100" r="40" fill="#f59e0b" />
      <text x="100" y="95" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#ffffff">LIMITED</text>
      <text x="100" y="110" font-family="Arial, sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#ffffff">EDITION</text>
    </g>` : ''}
</svg>
  `;

  // Écrire le fichier SVG
  fs.writeFileSync(path.join(imagesDir, filename), svgContent);
  console.log(`Image générée: ${filename}`);
}

// Générer les images pour chaque starter pack
const starterPacks = [
  { name: 'Developer Starter Pack', file: 'developer-starter-pack.svg', bg: '#6366f1', fg: '#10b981' },
  { name: 'Data Scientist Starter Pack', file: 'data-scientist-starter-pack.svg', bg: '#8b5cf6', fg: '#3b82f6' },
  { name: 'Social Media Influencer Starter Pack', file: 'influencer-starter-pack.svg', bg: '#ec4899', fg: '#f59e0b' },
  { name: 'Startup Founder Starter Pack', file: 'startup-founder-starter-pack.svg', bg: '#3b82f6', fg: '#f97316' },
  { name: 'Gamer Starter Pack', file: 'gamer-starter-pack.svg', bg: '#10b981', fg: '#6366f1' },
  { name: 'AI Prompt Engineer Starter Pack', file: 'prompt-engineer-starter-pack.svg', bg: '#8b5cf6', fg: '#ec4899' },
  { name: 'Coffee Addict Starter Pack', file: 'coffee-addict-starter-pack.svg', bg: '#f97316', fg: '#8b5cf6' },
  { name: 'Remote Worker Starter Pack', file: 'remote-worker-starter-pack.svg', bg: '#10b981', fg: '#3b82f6' }
];

// Générer toutes les images
starterPacks.forEach(pack => {
  generateStarterPackImage(pack.name, pack.file, pack.bg, pack.fg);
});

console.log('Toutes les images ont été générées avec succès!');
