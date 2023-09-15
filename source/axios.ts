import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://api.consumet.org", //"https://kurebiverse-consumet.vercel.app",
  method: "GET"
})