import { GET_PRODCUTS } from "../Constants/action-types";

export const getProductsAction = (data) => {
   localStorage.setItem("allProducts", JSON.stringify(data));
   return {
      type: GET_PRODCUTS,
      payload: data,
   };
};
