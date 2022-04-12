import { addToCartType } from './../type/cartType';
import fetchAPI from "./instance";

export const getCart = (userId: string) => {
  const url = `/cart/${userId}`;
  return fetchAPI.get(url);
}
export const addToCart = (data: addToCartType) => {
  const url = `/cart`;
  return fetchAPI.post(url, data);
}
export const removeCartItem = (data: { id: string, productId: string }) => {
  const url = `/cart/remove`;
  return fetchAPI.put(url, data);
}
export const clearCart = (data: { id: string | undefined }) => {
  const url = `/cart/clear`;
  return fetchAPI.put(url, data);
}
export const increaseCartItem = (data: { id: string, productId: string }) => {
  const url = `/cart/increase`;
  return fetchAPI.put(url, data);
}
export const decreaseCartItem = (data: { id: string, productId: string }) => {
  const url = `/cart/decrease`;
  return fetchAPI.put(url, data);
}