import React from "react";
import { IProductItems } from "../../Components/CartItems/CartItems";
import { axiosInstance } from "../axios";

/**
 * Hook for redirecting to stipe payment page.
 * @param selectedItems
 * @returns loading, callCheckoutAPI()
 */

export const useCheckoutAPI = (selectedItems: IProductItems) => {
   const [loading, setLoading] = React.useState(false);

   const callCheckoutAPI = async () => {
      try {
         setLoading(true);
         const { data } = await axiosInstance.post(
            "/api/create-checkout-session",
            {
               dataFromClient: selectedItems,
            }
         );
         setLoading(false);

         if (data && data.url) {
            window.location = data.url;
         }
         localStorage.removeItem("selectedProduct");
      } catch (error) {
         console.log("there is an error", error);
      }
   };
   return [loading, callCheckoutAPI] as const;
};
