import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Skeleton from "@mui/material/Skeleton";
import { RootState } from "../../Redux/Reducer";
import ProductRating from "../StarRating/ProductRating";
import AddToCartButton from "../../utils/Button/AddToCartButton";
import { getDetailBanneritem } from "../../Redux/Action/getDetailBanneritem";
import { IFetchedData } from "../../Redux/Action/getProducts-Action";

interface IProductProps {
   item: IFetchedData;
   category: string | undefined;
}

export default function Product({ item, category }: IProductProps) {
   let history = useHistory();
   const dispatch = useDispatch();

   const loading = useSelector(
      (state: RootState) => state.productReducer?.loading
   );

   const redirectToDetailsPage = (id: number): void => {
      if (category !== undefined) {
         let path = `/product/${category}/${id}`;
         history.push(path);
         dispatch(getDetailBanneritem(id));
      }
   };
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
                        <button
                           className="btn btn-outline-info text-dark mb"
                           onClick={() => redirectToDetailsPage(item.id)}
                        >
                           view details
                        </button>
                        <AddToCartButton itemId={item.id} />
                     </div>
                  </div>
               )}
            </div>
         ) : null}
      </>
   );
}
