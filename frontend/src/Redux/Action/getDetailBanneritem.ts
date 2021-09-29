import { ActionType } from "./actionTypes";
import { IFetchedData } from "./getProducts-Action";

export const getDetailBanneritem = (
   allProducts: IFetchedData[],
   selectedProductId: number
) => {
   const exitedProduct = allProducts.find(
      (item) => item.id === selectedProductId
   );

   return {
      type: ActionType.GET_PRODUCT_IN_DETAILPAGE_BANNER,
      payload: exitedProduct,
   };
};
