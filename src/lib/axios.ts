// lib/axios.js
import { USER_DATA } from "@/constant/localKeys";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 50000,
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(USER_DATA);
    if (token) {
      const parsed = JSON.parse(token);
      const foundToken = parsed?.tokenDetails?.token;
      config.headers.Authorization = `Bearer ${foundToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Return the error response object as resolved promise
      return Promise.resolve(error.response);
    }
    // If there's no error.response, reject as usual
    return Promise.reject(error);
  }
);

export default axiosInstance;
