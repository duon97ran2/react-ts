import axios from "axios";
import store from "../app/store";

let accessToken;
try {
  const root = JSON.parse(localStorage.getItem("persist:root") || "");
  const user = JSON.parse(root.authReducer);
  if (user) accessToken = user.accessToken;
} catch (error) {
  console.log(error);
}


const fetchAPI = axios.create({
  baseURL: "https://nodejs-express-duon97ran2.vercel.app/api/",
  timeout: 30000,
  headers: {
    "Authorization": `Bearer ${accessToken}`,
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