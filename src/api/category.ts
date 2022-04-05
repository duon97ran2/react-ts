import { CategoryType } from './../type/categoryType';
import fetchAPI from "./instance";

export const getCategories = async () => {
  const url = "/category";
  return fetchAPI.get(url);
};
export const updateCategory = async (post: CategoryType) => {
  const url = `/category/${post._id}`;
  return fetchAPI.put(url, post);
};
export const removeCategory = async (id: string | undefined) => {
  const url = `/category/${id}`;
  return fetchAPI.delete(url);
};
export const createCategory = async (post: CategoryType) => {
  const url = "/category";
  return fetchAPI.post(url, post);
};