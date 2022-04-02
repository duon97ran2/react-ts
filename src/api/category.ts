import fetchAPI from "./instance";

export const getCategories = async () => {
  const url = "/category";
  return fetchAPI.get(url);
}