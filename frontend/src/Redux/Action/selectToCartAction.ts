import { ActionType } from "./actionTypes";

export const selectToCartAction = (selectedProduct: string) => {
   return {
      type: ActionType.ADD_CART,
      payload: selectedProduct,
   };
};
