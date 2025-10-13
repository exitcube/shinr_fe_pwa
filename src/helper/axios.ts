import { store } from "@/redux/store";
import axios from "axios";

const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000, // 10s timeout
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor
API.interceptors.request.use(
  (config) => {
    const state = store.getState(); // ✅ get state directly
    const deviceUUId = state.auth.deviceUUId;

    if (deviceUUId) {
      config.headers["x-device-id"] = deviceUUId;
    }

    // const token =
    //   typeof window !== "undefined" ? localStorage.getItem("token") : null;
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }

    return config;
  },
  (error) => Promise.reject(error)
);

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
