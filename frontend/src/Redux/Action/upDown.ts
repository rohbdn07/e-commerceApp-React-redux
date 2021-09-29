import { IProductItems } from "../../Components/CartItems/CartItems";
import { ActionType } from "./actionTypes";

interface IReturnTypes {
   type: ActionType
   payload: IProductItems
}

export const increaseQty = (item: IProductItems): IReturnTypes => {
   return {
      type: ActionType.INCREASE_CART_QTY,
      payload: item,
   };
};

export const decreaseQty = (item: IProductItems): IReturnTypes => {
   return {
      type: ActionType.DECREASE_CART_QTY,
      payload: item,
   };
};
