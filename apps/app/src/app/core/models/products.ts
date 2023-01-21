export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  rating: ProductRating;
}

export interface ProductRating {
  rate: number;
  count: number;
}

export type ProductCreationDTO = Omit<Product, 'rating' | 'image'>
