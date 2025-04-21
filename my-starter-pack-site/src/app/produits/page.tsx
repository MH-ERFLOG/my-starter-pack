import { starterPacks } from '@/data/starter-packs';
import ProductGrid from '@/components/ProductGrid';

export default function ProduitsPage() {
  // Grouper les produits par catégorie
  const professions = starterPacks.filter(pack => pack.category === 'Professions');
  const personnalites = starterPacks.filter(pack => pack.category === 'Personnalités');
  const concepts = starterPacks.filter(pack => pack.category === 'Concepts');

  return (
    <main className="container py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Nos Starter Packs</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Professions</h2>
        <p className="mb-6">Découvrez nos starter packs représentant différentes professions, chacun avec les accessoires emblématiques qui les caractérisent.</p>
        <ProductGrid products={professions} />
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Personnalités</h2>
        <p className="mb-6">Explorez notre collection de starter packs qui capturent l'essence des personnalités modernes et leurs accessoires caractéristiques.</p>
        <ProductGrid products={personnalites} />
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Concepts</h2>
        <p className="mb-6">Plongez dans notre gamme de starter packs conceptuels, représentant des modes de vie et des passions avec leurs accessoires distinctifs.</p>
        <ProductGrid products={concepts} />
      </div>
    </main>
  );
}
