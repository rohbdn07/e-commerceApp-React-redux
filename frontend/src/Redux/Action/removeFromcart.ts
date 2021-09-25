import { ActionType } from "./actionTypes";

export const removeFromcart = (itemId: string) => {
   return {
      type: ActionType.REMOVE_CART_ITEM,
      payload: itemId,
   };
};
