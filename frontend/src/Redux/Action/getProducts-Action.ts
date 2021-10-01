import { ActionType } from "./actionTypes";
import { Dispatch } from 'redux';
import { axiosFetchAPI } from "../../servicesAPI/axios";
import { Action } from "./actionInterface";

export interface IFetchedData {
   id: number;
   title: string;
   price: number;
   description?: string;
   qty: number
   category: string;
   image: string;
   rating: {
      rate: number
   };
}

type Products = {
   data: IFetchedData[];
};

//Get data from free API service
//https://fakestoreapi.com/docs

export const getProductsAction = () => async (dispatch: Dispatch<Action>) => {
   try {
      localStorage.removeItem('allProducts');
      dispatch({
         type: ActionType.GET_LOADING_STATE,
      });

      const { data }: Products = await axiosFetchAPI.get(
         typeof axiosFetchAPI.baseURL
      );
      localStorage.setItem("allProducts", JSON.stringify(data));
      dispatch({
         type: ActionType.GET_PRODCUTS,
         payload: data,
      })

   } catch (error) {
      dispatch({
         type: ActionType.PRODUCT_LOADING_ERROR
      });

      console.log('there is error', error)
   }
}


