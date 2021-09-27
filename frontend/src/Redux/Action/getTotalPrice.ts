import { ActionType } from "./actionTypes";

interface IReturnType {
   type: ActionType
}

export const getTotalItemPrice = (): IReturnType => {
   return {
      type: ActionType.GET_TOTAL_PRICE,
   };
};
