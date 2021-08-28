import axios from "axios";

if (process.env.NODE_ENV !== "production") {
   require("dotenv").config("../config/keyDev.env");
} else if (process.env.NODE_ENV === "production") {
   require("dotenv").config("../config/keyProd.env");
}

export const axiosInstance = axios.create({
   baseURL: process.env.REACT_APP_HOST,
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
