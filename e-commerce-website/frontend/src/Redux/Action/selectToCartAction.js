import { ADD_CART } from "../Constants/action-types";

export const selectToCartAction = (selectedProduct) => {
   return {
      type: ADD_CART,
      payload: selectedProduct,
   };
};
