import { useAppSelecter } from './../app/hooks';
import { ProductType } from '../type/productType';
import fetchAPI from "./instance";
const root = JSON.parse(localStorage.getItem("persist:root") || "");
const user = JSON.parse(root.authReducer);
const config = {
  headers: {
    "Authorization": `Bearer ${user.accessToken}`,
  }
}
export const findAllProducts = () => {
  return fetchAPI.get("products");
};

export const findOneProduct = (productId: string | undefined) => {
  return fetchAPI.get(`products/${productId}`);
};

export const createProduct = (payload: ProductType) => {
  return fetchAPI.post("products", payload, config)
};
export const updateProduct = (payload: ProductType) => {
  return fetchAPI.put(`products/${payload._id}`, payload)
};

export const deleteProduct = (productId: string | undefined) => {
  return fetchAPI.delete(`products/${productId}`, config);
};