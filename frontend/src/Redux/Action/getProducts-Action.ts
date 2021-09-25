import { ActionType } from "./actionTypes";

export interface IFetchedData {
   id: string | number;
   title: string;
   price: number;
   description?: string;
   qty: number
   category: string;
   image: string;
   rating: any;
}

export const getProductsAction = (data: IFetchedData) => {
   localStorage.setItem("allProducts", JSON.stringify(data));
   return {
      type: ActionType.GET_PRODCUTS,
      payload: data,
   };
};
