import React from "react";
import { getProductsAction } from "../Redux/Action/getProducts-Action";
import { axiosFetchAPI } from "./axios";
import { useDispatch } from "react-redux";

export const useGetProductsAPI = () => {
   const [loading, setLoading] = React.useState(false);
   const dispatch = useDispatch();
   try {
      React.useEffect(() => {
         getData();
      }, []);

      const getData = async () => {
         setLoading(true);
         const { data } = await axiosFetchAPI.get(axiosFetchAPI.baseUrl);
         setLoading(false);
         dispatch(getProductsAction(data));
      };

      return loading;
   } catch (error) {
      console.log("server error", error);
   }
};
