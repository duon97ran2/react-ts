import { CategoryType } from './categoryType';
export type ProductType = {
  _id?: string,
  name: string,
  price: number,
  discount: number,
  image: Object[],
  description: string,
  slug: string,
  stock: number,
  category: Array<CategoryType>
}