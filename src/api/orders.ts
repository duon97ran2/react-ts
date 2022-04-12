import { OrderSend } from './../type/orderType';
import fetchAPI from "./instance";

export const getOrders = () => {
  const url = "/orders";
  return fetchAPI.get(url);
}
export const createOrder = (post: OrderSend) => {
  const url = "/orders";
  return fetchAPI.post(url, post);
}