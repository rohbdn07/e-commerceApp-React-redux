import { axiosFetchCategory } from "./axios";
import { useQuery } from "react-query";
import { IFetchedData } from "../Redux/Action/getProducts-Action";

type Products = {
   data: IFetchedData[];
};

const fetchCategoryData = async (category: string) => {
   try {
      const response: Products = await axiosFetchCategory.get(
         `https://fakestoreapi.com/products/category/${category}`
      );
      return response.data;
   } catch (error) {
      console.log("Error getting data while fetching category", error);
   }
};

const useFetchCategory = (category: string) => {
   const queryInfo = useQuery(
      ["categoryData", category],
      async () => await fetchCategoryData(category)
   );

   return {
      ...queryInfo,
   };
};

export default useFetchCategory;