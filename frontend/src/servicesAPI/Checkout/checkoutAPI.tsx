import axios from "axios";
import React from "react";
import { IProductItems } from "../../Components/CartItems/CartItems";
// import { axiosInstance } from "../axios";

type userToken = {
   token: string;
};

/**
 * Hook for redirecting to stipe payment page.
 * @param selectedItems
 * @returns loading, callCheckoutAPI()
 */

export const useCheckoutAPI = (selectedItems: IProductItems) => {
   const [loading, setLoading] = React.useState(false);
   const [errorMsg, setErrorMsg] = React.useState(false);

   const callCheckoutAPI = async (userToken: userToken) => {
      // set headers with token.
      const config = {
         headers: { "x-access-token": userToken },
      };

      try {
         setLoading(true);
         const { data } = await axios.post(
            `${process.env.REACT_APP_HOST}/api/create-checkout-session`,
            {
               dataFromClient: selectedItems,
            },
            config
         );
         setLoading(false);

         // if success redirect to stripe payment page
         if (data && data.url) {
            window.location = data.url;
         }

         localStorage.removeItem("selectedProduct");
      } catch (error) {
         // catch the error and set loading to false
         console.log("there is an error", error);
         setLoading(false);
         setErrorMsg(true);
      }
   };

   return [loading, errorMsg, callCheckoutAPI] as const;
};

// const callCheckoutAPI = async (userToken: any) => {
//    try {
//       setLoading(true);
//       const { data } = await axiosInstance.post(
//          "/api/create-checkout-session",
//          {
//             dataFromClient: selectedItems,
//          }
//       );
//       setLoading(false);

//       console.log("the api call for checkout response", data);

//       if (data && data.url) {
//          window.location = data.url;
//       }
//       localStorage.removeItem("selectedProduct");
//    } catch (error) {
//       console.log("there is an error", error);
//       setLoading(false);
//       setErrorMsg(true);
//    }
// };
