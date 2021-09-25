import { IProductItems } from "../../Components/CartItems/CartItems";
import { Action } from "../Action/actionInterface";
import { ActionType } from "../Action/actionTypes";

interface Iinitalstate {
   detailPageBannerItem: IProductItems[];
}

const getExitedProduct = localStorage.getItem("exitedProduct");

const initalstate: Iinitalstate = {
   // detailPageBannerItem: [],
   detailPageBannerItem: getExitedProduct ? JSON.parse(getExitedProduct) : [],
};

export default function detailPageBanner(state = initalstate, action: Action) {
   switch (action.type) {
      case ActionType.GET_PRODUCT_IN_DETAILPAGE_BANNER:
         localStorage.setItem("exitedProduct", JSON.stringify(action.payload));

         return {
            detailPageBannerItem: action.payload,
         };

      default:
         return state;
   }
}
