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

//Get data from free API service
//https://fakestoreapi.com/docs

export const axiosFetchAPI: AxiosInstance & AxiosRequestConfig = axios.create({
   baseURL: "https://fakestoreapi.com",
   headers: {
      "Content-Type": "application/json",
   },
});
