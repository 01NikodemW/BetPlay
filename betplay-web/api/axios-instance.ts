import axios, { AxiosRequestConfig } from "axios";

export function getJWTHeader(): Record<string, string> {
  const token = localStorage.getItem("accessToken");
  return { "Authorization": `Bearer ${token}` };
}

const config: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_ENTRYPOINT,
};
export const axiosInstance = axios.create(config);
