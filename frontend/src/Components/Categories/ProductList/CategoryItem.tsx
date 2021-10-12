import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import ProductRating from "../../StarRating/ProductRating";
import AddToCartButton from "../../../utils/Button/AddToCartButton";
import { getDetailBanneritem } from "../../../Redux/Action/getDetailBanneritem";
import { IFetchedData } from "../../../Redux/Action/getProducts-Action";

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
   let history = useHistory();
   const dispatch = useDispatch();

   const redirectToDetailsPage = (id: number): void => {
      if (category !== undefined) {
         let path = `/product/${category}/${id}`;
         history.push(path);
         dispatch(getDetailBanneritem(id));
      }
   };
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
                  <button
                     className="btn btn-outline-info text-dark mb"
                     onClick={() => redirectToDetailsPage(product.id)}
                  >
                     view details
                  </button>
                  <AddToCartButton itemId={product.id} />
               </div>
            )}
         </div>
      </>
   );
}
