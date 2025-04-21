export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
  features: string[];
  usage: string;
  ingredients: string;
  isNew: boolean;
  isBestseller: boolean;
  stock: number;
}
