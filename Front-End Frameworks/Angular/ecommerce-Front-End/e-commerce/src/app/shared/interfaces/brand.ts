import { Product } from './product';
import { Category } from './category';

export interface Brand {
  _id: string,
  name: string,
  imageUrl: string,
  products: Product[],
  categories: Category[],
}