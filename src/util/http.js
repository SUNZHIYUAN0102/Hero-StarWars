import axios from "axios";
import { Toast } from "vant";

const http = axios.create({
    baseURL: "https://swapi.dev/api/",
    timeout: 10000,
});

// http.interceptors.request.use(
//     function(config) {
//         Toast.loading({
//             message: "loading...",
//             forbidClick: true,
//             overlay: true,
//         });
//         return config;
//     },
//     function(error) {
//         return Promise.reject(error);
//     }
// );

// http.interceptors.response.use(
//     function(response) {
//         Toast.clear();
//         return response;
//     },
//     function(error) {
//         return Promise.reject(error);
//     }
// );

export default http;