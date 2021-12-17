import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

// setting enviroment variables for http requests to the backend server
// according to devenviroment or production enviroment.
// always set the enviroment variables at the top of this file.
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
      // baseURL: "http://localhost:5050",
      baseURL: process.env.REACT_APP_HOST,
      headers: {
         "Content-Type": "application/json",
      },
   });
