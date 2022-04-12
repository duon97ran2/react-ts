import { CartType } from './cartType';
import { ProductType } from "./productType"
import { UserType } from './userType';

export type OrderSend = {
  products: [
    product: ProductType,
    quantity: number,
    totalPrice: number
  ] | undefined,
  total: Number | undefined,
  userId: UserType | undefined,
  name: string,
  phone: string,
  address: string,
  note: string
}
export type OrderType = {
  orderCode: string,
  products: [
    product: ProductType,
    quantity: number,
    totalPrice: number]
  | undefined,
  total: Number | undefined,
  userId: UserType | undefined,
  shippingInfo: {
    name: string,
    phone: string,
    address: string,
    note: string
  }

}