import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://testing-backend-rose.vercel.app/",
  withCredentials: true,
  headers: {
    credentials: "include",
  },
});
