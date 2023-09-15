import axios from "axios";
import "dotenv/config";
export const axiosInstance = axios.create({
  baseURL: process.env.CONSUMET_API,
  method: "GET"
})