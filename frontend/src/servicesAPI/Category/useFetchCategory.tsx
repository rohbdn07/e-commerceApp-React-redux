import { axiosFetchAPI } from "../axios";
import { useQuery } from "react-query";
import { IFetchedData } from "../../Redux/Action/getProducts-Action";

/**
 * Hook for fetching product category
 * @param category
 * @returns object of queryInfo
 */

type Products = {
   data: IFetchedData[];
};

const fetchCategoryData = async (category: string) => {
   try {
      const response: Products = await axiosFetchAPI.get(
         `/products/category/${category}`
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
