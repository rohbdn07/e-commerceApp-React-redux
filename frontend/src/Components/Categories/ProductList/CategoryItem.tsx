import React from "react";
import Skeleton from "@mui/material/Skeleton";
import ProductRating from "../../StarRating/ProductRating";
import AddToCartButton from "../../../utils/Button/AddToCartButton";
import RedirectToDetailPage from "../../../utils/Button/RedirectToDetailPage";
import { IFetchedData } from "../../../interfaces/productItem.interface";

interface ICategoryItemProps {
   product: IFetchedData;
   isLoading: boolean;
   category: string;
}

export default function Categoryitem({
   product,
   isLoading,
   category,
}: ICategoryItemProps) {
   return (
      <>
         <div className="col-lg-3 col-sm-5 product_wrapper" key={product.id}>
            {isLoading ? (
               <Skeleton
                  animation="wave"
                  variant="rectangular"
                  width={190}
                  height={90}
               />
            ) : (
               <img
                  src={product.image}
                  className="card-img-top"
                  alt="men's-product"
               />
            )}
            {isLoading ? (
               <div>
                  <Skeleton width="90%" />
                  <Skeleton width="60%" />
                  <Skeleton height={50} width={70} />
               </div>
            ) : (
               <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text price_text">${product.price}</p>
                  <ProductRating ratingNumber={product.rating.rate} />
                  <RedirectToDetailPage
                     itemId={product.id}
                     category={category}
                  />
                  <AddToCartButton itemId={product.id} />
               </div>
            )}
         </div>
      </>
   );
}
