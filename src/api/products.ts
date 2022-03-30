import { ProductType } from '../type/productType';
import { fetchAPI } from "./instance";

export const findAllProducts = () => {
  return fetchAPI.get("products");
};

export const findOneProduct = (productId: string | undefined) => {
  return fetchAPI.get(`product/${productId}`);
};

export const createProduct = (payload: ProductType) => {
  return fetchAPI.post("product", payload);
};

export const updateProduct = (payload: ProductType) => {
  return fetchAPI.put(`product/${payload._id}`, payload);
};

export const deleteProduct = (productId: string | undefined) => {
  return fetchAPI.delete(`product/${productId}`);
};