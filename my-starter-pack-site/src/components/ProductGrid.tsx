import { StarterPack } from '@/types/starter-pack';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: StarterPack[];
  title?: string;
}

export default function ProductGrid({ products, title }: ProductGridProps) {
  return (
    <div className="py-8">
      {title && (
        <h2 className="section-title">{title}</h2>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
