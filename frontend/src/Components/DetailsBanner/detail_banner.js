import React from "react";
import { useSelector } from "react-redux";
import AddToCartButton from "../../utils/Button/AddToCartButton";
import ProductRating from "../StarRating/ProductRating";
import "./detail.scss";

export default function DetailsBanner() {
   const { detailPageBannerItem } = useSelector(
      (state) => state.detailPageBanner
   );

   const { id, title, description, price, image, rating } =
      detailPageBannerItem;

   return (
      <>
         {detailPageBannerItem ? (
            <div className="col-lg-12 col-12 details_banner">
               <div className="container details_banner_inner">
                  <div className="col-lg-6 col-6 details_banner_left">
                     <h3>{title}</h3>
                     <h5>{description}</h5>
                     <p>
                        <span>$</span>
                        {price}
                     </p>
                     <ProductRating ratingNumber={rating.rate} />
                     <div className="details_banner_button">
                        <AddToCartButton itemId={id} />
                     </div>
                  </div>
                  <div className="col-lg-6 col-5 details_banner_right">
                     <img src={image} alt="img" />
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
