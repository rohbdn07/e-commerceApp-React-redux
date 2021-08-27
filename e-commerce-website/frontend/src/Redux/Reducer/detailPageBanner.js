import { GET_PRODUCT_IN_DETAILPAGE_BANNER } from "../Constants/action-types";

const initalstate = {
   // detailPageBannerItem: [],
   detailPageBannerItem: localStorage.getItem("exitedProduct")
      ? JSON.parse(localStorage.getItem("exitedProduct"))
      : [],
};

export default function detailPageBanner(state = initalstate, action) {
   switch (action.type) {
      case GET_PRODUCT_IN_DETAILPAGE_BANNER:
         localStorage.setItem("exitedProduct", JSON.stringify(action.payload));

         return {
            detailPageBannerItem: action.payload,
         };

      default:
         return state;
   }
}
