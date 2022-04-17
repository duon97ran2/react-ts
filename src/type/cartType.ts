import { ProductType } from "./productType"
import { UserType } from "./userType"

export type CartType = {
  products: [
    product: ProductType,
    quantity: number,
    totalPrice: number,
  ],
  grandTotal: number,
  userId: UserType,
  _id: string | undefined
}

export type addToCartType = {
  productCart: {
    productId: string | undefined,
    quantity: number,
  },
  userId: string | undefined
}