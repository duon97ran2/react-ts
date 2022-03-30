import { CategoryType } from './categoryType';
export type ProductType = {
  _id?: string,
  name: string,
  price: number,
  image: string,
  discount: number,
  description: string,
  category: Array<CategoryType>
}