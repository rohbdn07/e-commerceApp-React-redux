import { IProductItems } from "../../Components/CartItems/CartItems";
import { ActionType } from "./actionTypes";

export const getDetailBanneritem = (
   allProducts: IProductItems[],
   selectedProductId: string
) => {
   const exitedProduct = allProducts.find(
      (item) => item.id === selectedProductId
   );

   return {
      type: ActionType.GET_PRODUCT_IN_DETAILPAGE_BANNER,
      payload: exitedProduct,
   };
};
