import React from "react";
import { axiosFetchCategory } from "./axios";

const useFetchCategory = () => {
   const [loading, setLoading] = React.useState(false);

   React.useEffect(() => {
      callCategoryAPI();
   }, []);
   const callCategoryAPI = async () => {
      try {
         setLoading(true);
         const { data } = await axiosFetchCategory.get(
            "https://fakestoreapi.com/products/category/jewelery"
         );
         setLoading(false);

         // console.log("the category data", data);
      } catch (error) {
         console.log("there is an error on fetching category API", error);
      }
   };

   return [loading, callCategoryAPI] as const;
};

export default useFetchCategory;
