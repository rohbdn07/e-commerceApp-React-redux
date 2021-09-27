import React from "react";
import { getProductsAction } from "../Redux/Action/getProducts-Action";
import { axiosFetchAPI } from "./axios";
import { useDispatch } from "react-redux";

export const useGetProductsAPI = () => {
   const [loading, setLoading] = React.useState(false);
   const dispatch = useDispatch();
   try {
      React.useEffect(() => {
         const fetchData = async () => {
            setLoading(true);
            const { data } = await axiosFetchAPI.get(
               typeof axiosFetchAPI.baseURL
            );
            setLoading(false);
            dispatch(getProductsAction(data));
         };
         fetchData();
      }, [dispatch]);

      return loading;
   } catch (error) {
      console.log("server error", error);
   }
};
