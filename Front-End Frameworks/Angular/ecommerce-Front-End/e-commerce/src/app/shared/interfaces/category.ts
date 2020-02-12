import { Brand } from './brand';

export interface Category {
  _id: string,
  name: string,
  imageUrl: string,
  products: object[],
  brands: Brand[],
}