import axios from "axios";

/**
 * Axios instance with default configuration
 * Includes request/response interceptors for error handling
 */
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Can add auth tokens, loading states, etc. here
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor - standardizes error handling
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    // Standardize error messages from API
    const message =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "An unexpected error occurred";
    return Promise.reject(new Error(message));
  },
);

export default api;
