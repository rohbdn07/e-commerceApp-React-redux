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

/**
 * @axiosFetchAPI Free API service to get different demo products.
 * @baseUrl  "https://fakestoreapi.com"
 *  */

export const axiosFetchAPI: AxiosInstance & AxiosRequestConfig = axios.create({
   baseURL: "https://fakestoreapi.com",
   headers: {
      "Content-Type": "application/json",
   },
});

/**
 * @axiosFetchAuthAPI baseurl to connect frontend to backend.
 * @baseurl "http://localhost:5050"
 */

export const axiosFetchAuthAPI: AxiosInstance & AxiosRequestConfig =
   axios.create({
      baseURL: "http://localhost:5050",
      headers: {
         "Content-Type": "application/json",
      },
   });
