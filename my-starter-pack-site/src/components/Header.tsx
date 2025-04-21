import Link from 'next/link';
import { ShoppingCart, User, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="header py-4">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-10">
            <Link href="/" className="text-2xl font-bold text-primary">
              <span className="text-primary">MY</span> <span className="text-secondary">STARTER</span> <span className="text-accent">PACK</span>
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/produits" className="nav-link">
                Nos Packs
              </Link>
              <Link href="/populaires" className="nav-link">
                Packs Populaires
              </Link>
              <Link href="/a-propos" className="nav-link">
                À Propos
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2">
              <Search size={20} />
            </button>
            <Link href="/compte" className="p-2">
              <User size={20} />
            </Link>
            <Link href="/panier" className="p-2 relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-1 -right-1 bg-secondary text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
