import { SetStateAction } from "react";
import { axiosInstance } from "./axios";

export const checkoutAPI = async (
   selectedItems: any,
   setLoading: { (value: SetStateAction<boolean>): void; (arg0: boolean): void }
) => {
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
      // alert("there is an error", error); //TODO: change this to react tostify to alert the User
   }
};
