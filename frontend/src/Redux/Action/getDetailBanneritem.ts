import { Dispatch } from "redux";
import { axiosFetchAPI } from "../../servicesAPI/axios";
import { Action } from "./actionInterface";
import { ActionType } from "./actionTypes";


export const getDetailBanneritem = (selectedProductId: number) => async (dispatch: Dispatch<Action>) => {
   const { data } = await axiosFetchAPI.get('/products?limit=20');
   if (data !== undefined) {
      const exitedProduct = data.find(
         (item: { id: number; }) => item.id === selectedProductId
      );
      if (exitedProduct !== undefined) {
         dispatch({
            type: ActionType.GET_PRODUCT_IN_DETAILPAGE_BANNER,
            payload: exitedProduct,
         })
      }

   }
}

