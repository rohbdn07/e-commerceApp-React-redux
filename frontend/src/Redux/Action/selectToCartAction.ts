import { ActionType } from "./actionTypes";

interface IReturnTypes {
   type: ActionType
   payload: string
}

export const selectToCartAction = (selectedProduct: string): IReturnTypes => {
   return {
      type: ActionType.ADD_CART,
      payload: selectedProduct,
   };
};
