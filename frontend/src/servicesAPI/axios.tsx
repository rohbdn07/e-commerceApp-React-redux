import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

if (process.env.NODE_ENV !== "production") {
   require("dotenv").config("../config/keyDev.env");
} else if (process.env.NODE_ENV === "production") {
   require("dotenv").config("../config/keyProd.env");
}

export const axiosInstance: AxiosInstance = axios.create({
   baseURL: process.env.REACT_APP_HOST,
   headers: {
      "Content-Type": "application/json",
   },
});

export const axiosFetchAPI: AxiosInstance & AxiosRequestConfig = axios.create({
   baseURL: "https://fakestoreapi.com/products?limit=20",
   headers: {
      "Content-Type": "application/json",
   },
});

export const axiosFetchCategory: AxiosInstance & AxiosRequestConfig =
   axios.create({
      // baseURL: `https://fakestoreapi.com/products/category/jewelery`,
      headers: {
         "Content-Type": "application/json",
      },
   });
