// src/utils/http.ts
import axios from "axios";
import type { InternalAxiosRequestConfig, AxiosResponse } from "axios";
import { ElLoading } from "element-plus";

let loading: any;
const startLoading = () => {
  interface options {
    lock: boolean;
    text: string;
    background: string;
  }
  const options = {
    lock: true,
    text: "讀取中...",
    background: "rgba(0,0,0,0.7)",
  };
  loading = ElLoading.service(options);
};
const endLoading = () => {
  loading.close();
};

const http = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 請求攔截器
http.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  //加載
  startLoading();
  return config;
});

// 回應攔截器
http.interceptors.response.use(
  (res: AxiosResponse) => {
    endLoading();
    return res;
  },
  (err) => {
    endLoading();
    return Promise.reject(err);
  }
);

export default http;
