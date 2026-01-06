import axios from "axios";
import { OWNER_ID } from "../config";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers["X-Portfolio-Owner"] = OWNER_ID

  return config;
});

export default axiosInstance;
