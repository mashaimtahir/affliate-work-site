import axios from "axios";
export const Axios = axios.create({
  baseURL: "https://testing-backend-azure.vercel.app/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    credentials: "include",
  },
});
