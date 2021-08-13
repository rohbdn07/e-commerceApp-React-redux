import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "http://localhost:5050",
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosFetchAPI = axios.create({
  baseURL: "https://fakestoreapi.com/products?limit=20",
  headers: {
    "Content-Type": "application/json",
  },
});