import axios, { AxiosError } from "axios";
import { store } from "../Store";

export const instance = axios.create({ baseURL: import.meta.env.VITE_BACKEND_ENDPOINT });

instance.interceptors.request.use((config) => {
  const user = store.getState().identityState.user;
  if (user) config.headers.Authorization = `Bearer ${user.token}`;
  return config;
});

instance.interceptors.response.use(
  (value) => value,
  (error: AxiosError) => {
    error.response?.status == 401 &&
      window.location.replace(import.meta.env.VITE_URL_WEBSITE);
    return error;
  }
);
