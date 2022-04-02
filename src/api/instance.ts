import axios from "axios";


const fetchAPI = axios.create({
  baseURL: "https://nodejs-express-duon97ran2.vercel.app/api/",
});
// fetchAPI.interceptors.request.use(
//   async (config) => {
//     const { accessToken } = useAppSelecter(state => state.authReducer);
//     console.log(accessToken)
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