import { Brand } from './brand';
import { Category } from './category';

export interface Product {
  _id: string,
  title: string,
  webId: string,
  price: number,
  description: string,
  imageUrl: string,
  condition: string,
  availability: boolean,
  onSlider: boolean,
  featuredItem: boolean,
  recommended: boolean,
  brand: Brand,
  category: Category,
};