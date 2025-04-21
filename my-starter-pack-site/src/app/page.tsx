import Image from 'next/image';
import Link from 'next/link';
import { starterPacks } from '@/data/starter-packs';
import ProductGrid from '@/components/ProductGrid';

export default function Home() {
  const featuredPacks = starterPacks.filter(pack => pack.isBestseller).slice(0, 4);
  const newPacks = starterPacks.filter(pack => pack.isNew).slice(0, 4);
  const limitedPacks = starterPacks.filter(pack => pack.isLimitedEdition).slice(0, 4);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Collectionnez les Starter Packs ChatGPT</h1>
              <p className="text-lg mb-6">
                Découvrez notre collection exclusive de figurines d'action inspirées des starter packs générés par ChatGPT. Des produits uniques qui capturent l'essence des personnalités modernes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/produits" className="btn-primary text-center">
                  Découvrir la collection
                </Link>
                <Link href="/populaires" className="btn-secondary text-center">
                  Packs populaires
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/developer-starter-pack.svg"
                  alt="Developer Starter Pack"
                  width={500}
                  height={500}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="category-section">
        <div className="container">
          <ProductGrid products={featuredPacks} title="Nos Best-Sellers" />
          <div className="text-center mt-8">
            <Link href="/produits" className="btn-primary">
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-light-gray py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Qu'est-ce qu'un Starter Pack?</h2>
              <p className="mb-4">
                Les Starter Packs sont des figurines d'action inspirées par la tendance virale des "starter packs" générés par ChatGPT. Chaque pack représente un archétype ou une personnalité avec ses accessoires caractéristiques.
              </p>
              <p className="mb-4">
                Nos figurines sont conçues avec soin pour capturer l'essence de chaque personnage, avec des accessoires détaillés et des emballages de collection.
              </p>
              <Link href="/a-propos" className="text-primary font-medium hover:underline">
                En savoir plus sur MY STARTER PACK →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="starter-pack-container p-4">
                <div className="starter-pack-box">
                  <h3 className="text-lg font-bold mb-2">Professions</h3>
                  <p className="text-sm mb-4">Developer, Data Scientist, Startup Founder...</p>
                  <Link href="/produits/professions" className="text-primary text-sm font-medium hover:underline">
                    Découvrir →
                  </Link>
                </div>
              </div>
              <div className="starter-pack-container p-4">
                <div className="starter-pack-box">
                  <h3 className="text-lg font-bold mb-2">Personnalités</h3>
                  <p className="text-sm mb-4">Influencer, Gamer, Tech Enthusiast...</p>
                  <Link href="/produits/personnalites" className="text-primary text-sm font-medium hover:underline">
                    Découvrir →
                  </Link>
                </div>
              </div>
              <div className="starter-pack-container p-4">
                <div className="starter-pack-box">
                  <h3 className="text-lg font-bold mb-2">Concepts</h3>
                  <p className="text-sm mb-4">Coffee Addict, Remote Worker, Minimalist...</p>
                  <Link href="/produits/concepts" className="text-primary text-sm font-medium hover:underline">
                    Découvrir →
                  </Link>
                </div>
              </div>
              <div className="starter-pack-container p-4">
                <div className="starter-pack-box">
                  <h3 className="text-lg font-bold mb-2">Éditions Limitées</h3>
                  <p className="text-sm mb-4">Collections exclusives et séries spéciales</p>
                  <Link href="/produits/limited-edition" className="text-primary text-sm font-medium hover:underline">
                    Découvrir →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="category-section">
        <div className="container">
          <ProductGrid products={newPacks} title="Nouveautés" />
        </div>
      </section>

      {/* Limited Editions */}
      {limitedPacks.length > 0 && (
        <section className="category-section bg-gradient-to-r from-primary/10 to-secondary/10">
          <div className="container">
            <ProductGrid products={limitedPacks} title="Éditions Limitées" />
            <div className="text-center mt-8">
              <p className="text-lg mb-4">Ne manquez pas nos éditions limitées exclusives!</p>
              <Link href="/produits/limited-edition" className="btn-secondary">
                Voir les éditions limitées
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Section */}
      <section className="newsletter-section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Restez informé des nouveaux Starter Packs</h2>
            <p className="mb-6">Inscrivez-vous à notre newsletter pour être le premier à découvrir nos nouveautés et offres exclusives.</p>
            <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                S'inscrire
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
