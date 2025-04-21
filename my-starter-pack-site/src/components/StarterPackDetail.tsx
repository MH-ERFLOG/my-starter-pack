import { StarterPack } from '@/types/starter-pack';
import Image from 'next/image';
import Link from 'next/link';

interface StarterPackDetailProps {
  product: StarterPack;
}

export default function StarterPackDetail({ product }: StarterPackDetailProps) {
  return (
    <div className="starter-pack-container p-6 my-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <div className="aspect-square bg-white rounded-lg overflow-hidden shadow-md">
            <Image 
              src={product.image} 
              alt={product.name}
              width={500}
              height={500}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute top-4 left-4 flex flex-col gap-2">
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
        
        <div className="starter-pack-box">
          <h1 className="starter-pack-title">{product.name}</h1>
          <p className="starter-pack-subtitle">{product.category}</p>
          
          <div className="flex justify-between items-center my-4">
            <span className="text-3xl font-bold text-primary">{product.price.toFixed(2)} €</span>
            <span className={`text-sm font-medium ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `En stock (${product.stock})` : 'Rupture de stock'}
            </span>
          </div>
          
          <p className="my-4">{product.description}</p>
          
          <div className="my-6">
            <h3 className="font-semibold mb-2">Caractéristiques:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {product.features.map((feature, index) => (
                <li key={index} className="text-sm">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="my-6">
            <h3 className="font-semibold mb-2">Accessoires inclus:</h3>
            <div className="starter-pack-accessories">
              {product.accessories.map((accessory, index) => (
                <div key={index} className="accessory-item">
                  {accessory}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="btn-primary flex-1">Ajouter au panier</button>
            <button className="btn-secondary flex-1">Acheter maintenant</button>
          </div>
        </div>
      </div>
    </div>
  );
}
