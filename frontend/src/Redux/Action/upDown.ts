import { IProductItems } from "../../Components/CartItems/CartItems";
import { ActionType } from "./actionTypes";

export const increaseQty = (item: IProductItems) => {
   return {
      type: ActionType.INCREASE_CART_QTY,
      payload: item,
   };
};

export const decreaseQty = (item: IProductItems) => {
   return {
      type: ActionType.DECREASE_CART_QTY,
      payload: item,
   };
};
