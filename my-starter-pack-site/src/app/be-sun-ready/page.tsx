import Image from 'next/image';
import Link from 'next/link';

export default function BeSunReadyPage() {
  return (
    <main className="container py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Éditions Limitées</h1>
        
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Collections Exclusives</h2>
              <p className="mb-4">
                Découvrez nos éditions limitées de starter packs, disponibles en quantité restreinte. Ces figurines d'action exclusives représentent des archétypes uniques avec des accessoires spéciaux.
              </p>
              <p className="mb-4">
                Chaque édition limitée est numérotée et accompagnée d'un certificat d'authenticité. Ne manquez pas l'occasion de posséder ces pièces de collection avant qu'elles ne disparaissent !
              </p>
              <Link href="/produits" className="btn-primary inline-block">
                Découvrir la collection
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="starter-pack-container p-4 max-w-xs">
                <div className="starter-pack-box">
                  <div className="absolute top-2 right-2">
                    <span className="badge badge-limited">Édition Limitée</span>
                  </div>
                  <h3 className="starter-pack-title">ÉDITION COLLECTOR</h3>
                  <p className="starter-pack-subtitle">Série 2025</p>
                  <div className="mt-4 text-center">
                    <p className="text-sm mb-2">Disponible uniquement sur MY STARTER PACK</p>
                    <p className="text-xs">Quantités limitées</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="starter-pack-container p-6">
            <div className="starter-pack-box">
              <h3 className="text-xl font-bold mb-2">Startup Founder Starter Pack</h3>
              <p className="text-sm mb-4">Édition Limitée - 30 exemplaires</p>
              <p className="mb-4">
                Lancez votre startup avec ce pack essentiel. Inclut une figurine de fondateur de startup et tous les accessoires nécessaires pour lever des fonds et pivoter comme un pro.
              </p>
              <Link href="/produits/4" className="text-primary font-medium hover:underline">
                Voir le produit →
              </Link>
            </div>
          </div>
          
          <div className="starter-pack-container p-6">
            <div className="starter-pack-box">
              <h3 className="text-xl font-bold mb-2">AI Prompt Engineer Starter Pack</h3>
              <p className="text-sm mb-4">Édition Limitée - 40 exemplaires</p>
              <p className="mb-4">
                Maîtrisez l'art du prompt engineering avec ce pack exclusif. Inclut une figurine d'ingénieur de prompts et tous les outils nécessaires pour communiquer avec l'IA.
              </p>
              <Link href="/produits/6" className="text-primary font-medium hover:underline">
                Voir le produit →
              </Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Pourquoi collectionner nos éditions limitées ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="p-6 bg-light-gray rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">01</div>
              <h3 className="text-lg font-semibold mb-2">Exclusivité</h3>
              <p className="text-sm">
                Produites en quantité limitée et numérotées individuellement pour garantir leur rareté.
              </p>
            </div>
            <div className="p-6 bg-light-gray rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">02</div>
              <h3 className="text-lg font-semibold mb-2">Qualité supérieure</h3>
              <p className="text-sm">
                Finitions premium et accessoires exclusifs que l'on ne retrouve pas dans les collections standard.
              </p>
            </div>
            <div className="p-6 bg-light-gray rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">03</div>
              <h3 className="text-lg font-semibold mb-2">Valeur croissante</h3>
              <p className="text-sm">
                Les éditions limitées prennent de la valeur avec le temps, devenant de véritables objets de collection.
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Ne manquez pas nos prochaines éditions limitées</h2>
          <p className="mb-6">
            Inscrivez-vous à notre newsletter pour être informé en avant-première des nouvelles éditions limitées.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button type="submit" className="btn-secondary whitespace-nowrap">
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
