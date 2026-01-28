import axios, { AxiosRequestConfig, Method } from "axios";

// 🔹 Central axios instance
export const axiosInstance = axios.create({
  // baseURL: "http://localhost:8080",
  timeout: 10000,
});

// 🔐 Attach Bearer token automatically
axiosInstance.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("token");

    if (token) {
      // ✅ Axios v1 compatible way
      config.headers = config.headers ?? {};
      config.headers.Authorization = `Bearer ${token}`;
      // OR (even safer):
      // config.headers.set?.("Authorization", `Bearer ${token}`);
    }
  }

  return config;
});

// 🔹 Generic API connector
export const apiConnector = (
  method: Method,
  url: string,
  bodyData?: any,
  headers?: Record<string, string>,
  params?: Record<string, any>
) => {
  const config: AxiosRequestConfig = {
    method,
    url,
    data: bodyData,
    params,
    headers, // 👈 let axios merge internally
  };

  return axiosInstance(config);
};
