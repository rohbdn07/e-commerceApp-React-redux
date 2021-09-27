import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getDetailBanneritem } from "../../Redux/Action/getDetailBanneritem";
import AddToCartButton from "../../utils/Button/AddToCartButton";
import "./Product.scss";
import ProductRating from "../StarRating/ProductRating";
import { RootState } from "../../Redux/Reducer";
import { IFetchedData } from "../../Redux/Action/getProducts-Action";

interface IProductsProps {
   title?: string;
   category: string | undefined;
}

export default function Products(props: IProductsProps): JSX.Element {
   let history = useHistory();
   const { allProducts }: any = useSelector(
      (state: RootState) => state.productReducer
   );
   const dispatch = useDispatch();

   const { title, category } = props;

   const redirectToDetailsPage = (id: number): void => {
      let path = `/product/${category}/${id}`;
      history.push(path);
      dispatch(getDetailBanneritem(allProducts, id));
   };

   return (
      <>
         <h2 style={{ marginTop: "3rem" }}>{title}</h2>

         {allProducts === false ? (
            <h3>Couldn't able to get data from source</h3>
         ) : (
            <div className="col-lg-12 col-md-12 col-sm-12 products">
               {allProducts.map((item: IFetchedData) => {
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
                           <p className="card-text price_text">${item.price}</p>
                           <ProductRating ratingNumber={item.rating.rate} />
                           {/* <p className="card-text">{item.description}</p> */}
                           <button
                              className="btn btn-outline-info text-dark mb"
                              onClick={() => redirectToDetailsPage(item.id)}
                           >
                              view details
                           </button>
                           <AddToCartButton itemId={item.id} />
                        </div>
                     </div>
                  ) : null;
               })}
            </div>
         )}
      </>
   );
}
