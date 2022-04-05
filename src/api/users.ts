import { UserType } from "../type/userType";
import fetchAPI from "./instance";

export const getUserList = () => {
  const url = "users";
  return fetchAPI.get(url);
}
export const getUserInfo = (id: string | undefined) => {
  const url = `users/${id}`;
  return fetchAPI.get(url);
}
export const createUser = (post: UserType) => {
  const url = "users";
  return fetchAPI.post(url, post);
}
export const updateUser = (post: UserType) => {
  const url = `users/${post._id}`;
  return fetchAPI.put(url, post);
}
export const removeUser = (id: string | undefined) => {
  const url = `users/${id}`;
  return fetchAPI.delete(url);
} 