import { starterPacks } from '@/data/starter-packs';
import StarterPackDetail from '@/components/StarterPackDetail';
import ProductGrid from '@/components/ProductGrid';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function ProductPage({ params }: { params: { id: string } }) {
  const productId = parseInt(params.id);
  const product = starterPacks.find(p => p.id === productId);
  
  if (!product) {
    notFound();
  }
  
  // Produits similaires (même catégorie)
  const similarProducts = starterPacks
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  
  return (
    <main className="container py-8">
      <div className="mb-4">
        <Link href="/produits" className="text-primary hover:underline">
          ← Retour aux produits
        </Link>
      </div>
      
      <StarterPackDetail product={product} />
      
      {similarProducts.length > 0 && (
        <div className="mt-16">
          <ProductGrid products={similarProducts} title="Vous aimerez aussi" />
        </div>
      )}
    </main>
  );
}
