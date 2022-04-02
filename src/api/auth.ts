import { RegisterType, LoginType } from './../type/authType';
import fetchAPI from './instance';
export const register = (post: RegisterType) => {
  const url = "register";
  return fetchAPI.post(url, post);
}
export const login = (post: LoginType) => {
  const url = 'login';
  return fetchAPI.post(url, post);
}