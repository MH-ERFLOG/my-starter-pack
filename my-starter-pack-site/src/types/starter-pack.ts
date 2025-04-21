export interface StarterPack {
  id: number;
  name: string;
  price: number;
  category: 'Professions' | 'Personnalités' | 'Concepts';
  image: string;
  description: string;
  accessories: string[];
  features: string[];
  isNew: boolean;
  isBestseller: boolean;
  isLimitedEdition: boolean;
  stock: number;
}
