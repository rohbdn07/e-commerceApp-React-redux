import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
// import authHeader from "./Auth-service/authHeader";

export const axiosHttpForPayment: AxiosInstance = axios.create({
   baseURL: process.env.REACT_APP_HOST || "http://localhost:5000",
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
      // baseURL: "http://localhost:5050",
      baseURL: process.env.REACT_APP_HOST || "http://localhost:5050",
      headers: {
         "Content-Type": "application/json",
      },
   });
