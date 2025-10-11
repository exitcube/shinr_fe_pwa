import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000, // 10s timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor (e.g., add auth token)
// API.interceptors.request.use(
//     (config) => {
//         const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
//         if (token) {
//             config.headers.Authorization = `Bearer ${token}`;
//         }
//         return config;
//     },
//     (error) => Promise.reject(error)
// );

// Add response interceptor (e.g., handle errors globally)
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // optional: logout user / redirect to login
      console.warn("Unauthorized, redirecting to login...");
    }
    return Promise.reject(error);
  }
);

export default API;
