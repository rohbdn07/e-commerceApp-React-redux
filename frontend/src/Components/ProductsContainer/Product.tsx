import React from "react";
import { useSelector } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import { RootState } from "../../Redux/Reducer";
import ProductRating from "../StarRating/ProductRating";
import AddToCartButton from "../../utils/Button/AddToCartButton";
import { IFetchedData } from "../../Redux/Action/getProducts-Action";
import RedirectToDetailPage from "../../utils/Button/RedirectToDetailPage";

interface IProductProps {
   item: IFetchedData;
   category: string | undefined;
}

export default function Product({ item, category }: IProductProps) {
   const loading = useSelector(
      (state: RootState) => state.productReducer?.loading
   );
   return (
      <>
         {item.category === category ? (
            <div
               className="card col-lg-3 col-sm-5 product_wrapper"
               key={item.id}
            >
               {loading ? (
                  <Skeleton
                     animation="wave"
                     variant="rectangular"
                     width={190}
                     height={90}
                  />
               ) : (
                  <img
                     src={item.image}
                     className="card-img-top"
                     alt="men's-product"
                  />
               )}
               {loading ? (
                  <div>
                     <Skeleton width="90%" />
                     <Skeleton width="60%" />
                     <Skeleton height={50} width={70} />
                  </div>
               ) : (
                  <div className="card-body">
                     <h5 className="card-title">{item.title}</h5>
                     <p className="card-text price_text">${item.price}</p>
                     <ProductRating ratingNumber={item.rating.rate} />
                     <div className="d-block">
                        <RedirectToDetailPage
                           itemId={item.id}
                           category={category}
                        />
                        <AddToCartButton itemId={item.id} />
                     </div>
                  </div>
               )}
            </div>
         ) : null}
      </>
   );
}
