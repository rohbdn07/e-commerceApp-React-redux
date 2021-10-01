import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailBanneritem } from "../../Redux/Action/getDetailBanneritem";
import AddToCartButton from "../../utils/Button/AddToCartButton";
import "./Product.scss";
import ProductRating from "../StarRating/ProductRating";
import { RootState } from "../../Redux/Reducer";
import {
   getProductsAction,
   IFetchedData,
} from "../../Redux/Action/getProducts-Action";

interface IProductsProps {
   title?: string;
   category: string | undefined;
}

export default function Products({
   title,
   category,
}: IProductsProps): JSX.Element {
   let history = useHistory();
   const dispatch = useDispatch();

   React.useEffect(() => {
      dispatch(getProductsAction());
   }, [dispatch]);

   const allProducts: IFetchedData[] | undefined = useSelector(
      (state: RootState) => state.productReducer?.allProducts
   );

   const loading = useSelector(
      (state: RootState) => state.productReducer?.loading
   );
   const error = useSelector(
      (state: RootState) => state.productReducer?.errMessage
   );

   const redirectToDetailsPage = (id: number): void => {
      let path = `/product/${category}/${id}`;
      history.push(path);
      if (allProducts !== undefined) {
         dispatch(getDetailBanneritem(allProducts, id));
      }
   };

   const isLoading: string | null = loading === true ? "Loading..." : null;
   const isError = error !== "" ? error : null;

   return (
      <>
         {allProducts === undefined && !allProducts ? (
            <h3>Couldn't able to get data from source</h3>
         ) : (
            <div>
               {isLoading}
               {isError}
               <h2 style={{ marginTop: "3rem" }}>{title}</h2>
               <div className="col-lg-12 col-md-12 col-sm-12 products">
                  {allProducts &&
                     allProducts.map((item: IFetchedData) => {
                        return item.category === category ? (
                           <div
                              className="card col-lg-3 col-sm-5 product_wrapper"
                              key={item.id}
                           >
                              <img
                                 src={item.image}
                                 className="card-img-top"
                                 alt="men's-product"
                              />
                              <div className="card-body">
                                 <h5 className="card-title">{item.title}</h5>
                                 <p className="card-text price_text">
                                    ${item.price}
                                 </p>
                                 <ProductRating
                                    ratingNumber={item.rating.rate}
                                 />
                                 {/* <p className="card-text">{item.description}</p> */}
                                 <button
                                    className="btn btn-outline-info text-dark mb"
                                    onClick={() =>
                                       redirectToDetailsPage(item.id)
                                    }
                                 >
                                    view details
                                 </button>
                                 <AddToCartButton itemId={item.id} />
                              </div>
                           </div>
                        ) : null;
                     })}
               </div>
            </div>
         )}
      </>
   );
}
