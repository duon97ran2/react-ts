import { CategoryType } from './categoryType';
export type ProductType = {
  _id?: string,
  name: string,
  price: number,
  discount?: number,
  image: {
    url: string,
  }[],
  description?: string,
  slug?: string,
  stock?: number,
  view?: number,
  category?: CategoryType
}