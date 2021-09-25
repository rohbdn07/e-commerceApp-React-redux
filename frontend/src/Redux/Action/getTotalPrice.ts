import { ActionType } from "./actionTypes";

export const getTotalItemPrice = () => {
   return {
      type: ActionType.GET_TOTAL_PRICE,
   };
};
