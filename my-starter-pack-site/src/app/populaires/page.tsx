import { starterPacks } from '@/data/starter-packs';
import ProductGrid from '@/components/ProductGrid';
import Image from 'next/image';
import Link from 'next/link';

export default function PopulairesPage() {
  const bestsellers = starterPacks.filter(pack => pack.isBestseller);
  
  return (
    <main className="container py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Packs Populaires</h1>
        <p className="max-w-2xl mx-auto">
          Découvrez nos starter packs les plus populaires, plébiscités par notre communauté. 
          Ces figurines d'action représentent les archétypes les plus emblématiques générés par ChatGPT.
        </p>
      </div>
      
      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-lg mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Pourquoi nos Starter Packs sont si populaires</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white mr-3 flex-shrink-0">1</span>
                <span>Design unique inspiré des figurines d'action de collection</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white mr-3 flex-shrink-0">2</span>
                <span>Accessoires détaillés qui capturent parfaitement chaque archétype</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white mr-3 flex-shrink-0">3</span>
                <span>Emballage de collection avec design inspiré des tendances virales</span>
              </li>
              <li className="flex items-start">
                <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-primary text-white mr-3 flex-shrink-0">4</span>
                <span>Parfaits pour les collectionneurs et amateurs de culture internet</span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center">
            <div className="starter-pack-container p-4 max-w-xs">
              <div className="starter-pack-box">
                <h3 className="starter-pack-title">COLLECTION</h3>
                <p className="starter-pack-subtitle">Édition 2025</p>
                <div className="grid grid-cols-2 gap-2 mt-4">
                  <div className="bg-white p-2 rounded shadow-sm">
                    <Image 
                      src="/images/developer-starter-pack.svg" 
                      alt="Developer Pack" 
                      width={100} 
                      height={100}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <Image 
                      src="/images/gamer-starter-pack.svg" 
                      alt="Gamer Pack" 
                      width={100} 
                      height={100}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <Image 
                      src="/images/influencer-starter-pack.svg" 
                      alt="Influencer Pack" 
                      width={100} 
                      height={100}
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="bg-white p-2 rounded shadow-sm">
                    <Image 
                      src="/images/remote-worker-starter-pack.svg" 
                      alt="Remote Worker Pack" 
                      width={100} 
                      height={100}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ProductGrid products={bestsellers} title="Nos Best-Sellers" />
      
      <div className="text-center mt-12">
        <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas ce que vous cherchez ?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Explorez notre catalogue complet de starter packs ou contactez-nous pour suggérer un nouveau pack !
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/produits" className="btn-primary">
            Voir tous les produits
          </Link>
          <Link href="/contact" className="btn-secondary">
            Suggérer un pack
          </Link>
        </div>
      </div>
    </main>
  );
}
