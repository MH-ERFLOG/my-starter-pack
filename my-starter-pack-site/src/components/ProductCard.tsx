import Image from 'next/image';
import Link from 'next/link';
import { StarterPack } from '@/types/starter-pack';

interface ProductCardProps {
  product: StarterPack;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="product-card">
      <div className="relative">
        <div className="aspect-square overflow-hidden">
          <Image 
            src={product.image} 
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="badge badge-new">Nouveau</span>
          )}
          {product.isBestseller && (
            <span className="badge badge-bestseller">Best-seller</span>
          )}
          {product.isLimitedEdition && (
            <span className="badge badge-limited">Édition Limitée</span>
          )}
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <span className="font-bold text-primary">{product.price.toFixed(2)} €</span>
        </div>
        <p className="text-sm text-gray-600 mb-3">{product.category}</p>
        <p className="text-sm line-clamp-2 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <Link href={`/produits/${product.id}`} className="text-sm font-medium text-primary hover:underline">
            Voir les détails
          </Link>
          <button className="btn-primary text-sm py-2 px-3">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
