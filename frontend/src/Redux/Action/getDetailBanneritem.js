import { GET_PRODUCT_IN_DETAILPAGE_BANNER } from "../Constants/action-types";

export const getDetailBanneritem = (allProducts, selectedProductId) => {
   const exitedProduct = allProducts.find(
      (item) => item.id === selectedProductId
   );

   return {
      type: GET_PRODUCT_IN_DETAILPAGE_BANNER,
      payload: exitedProduct,
   };
};
