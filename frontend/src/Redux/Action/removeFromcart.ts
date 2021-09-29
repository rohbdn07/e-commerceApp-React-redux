import { ActionType } from "./actionTypes";

interface IReturnTypes {
   type: ActionType
   payload: number
}

export const removeFromcart = (itemId: number): IReturnTypes => {
   return {
      type: ActionType.REMOVE_CART_ITEM,
      payload: itemId,
   };
};
