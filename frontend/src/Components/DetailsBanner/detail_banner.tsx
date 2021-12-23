import React from "react";
import { Iinitalstate } from "../../Redux/Reducer/detailPageBanner";
import AddToCartButton from "../../utils/Button/AddToCartButton";
import ProductRating from "../StarRating/ProductRating";
import "./detail.scss";

// interface IDetailPageProps {
//    detailPageBannerItem: Iinitalstate;
// }

export default function DetailsBanner({
   detailPageBannerItem,
}: Iinitalstate): JSX.Element {
   return (
      <>
         {detailPageBannerItem !== undefined && detailPageBannerItem ? (
            <div className="col-lg-12 col-12 details_banner">
               <div className="container details_banner_inner">
                  <div className="col-lg-6 col-6 details_banner_left">
                     <h3>{detailPageBannerItem.title}</h3>
                     <h5>{detailPageBannerItem.description}</h5>
                     <p>
                        <span>$</span>
                        {detailPageBannerItem.price}
                     </p>
                     <ProductRating
                        ratingNumber={detailPageBannerItem.rating?.rate}
                     />
                     <div className="details_banner_button">
                        <AddToCartButton itemId={detailPageBannerItem.id} />
                     </div>
                  </div>
                  <div className="col-lg-6 col-5 details_banner_right">
                     <img src={detailPageBannerItem.image} alt="img" />
                  </div>
               </div>
            </div>
         ) : (
            <div>
               <h4>No item is selected</h4>
            </div>
         )}
      </>
   );
}
