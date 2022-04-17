import axios from "axios";
import store from "../app/store";


const root = JSON.parse(localStorage.getItem("persist:root") || "");
const user = JSON.parse(root.authReducer || "");



const fetchAPI = axios.create({
  baseURL: "https://nodejs-express-duon97ran2.vercel.app/api/",
  timeout: 30000,
  headers: {
    "Authorization": `Bearer ${user.accessToken}`,
  }
});

// fetchAPI.interceptors.request.use(
//   async (config) => {
//     const accessToken = store.getState().authReducer.accessToken;
//     if (config.headers) {
//       config.headers.Authorization = `Bearer ${accessToken}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default fetchAPI