import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Product.scss";
import { RootState } from "../../Redux/Reducer";
import {
   getProductsAction,
   IFetchedData,
} from "../../Redux/Action/getProducts-Action";
import Product from "./Product";

interface IProductsProps {
   title?: string;
   category: string | undefined;
}

export default function Products({
   title,
   category,
}: IProductsProps): JSX.Element {
   const dispatch = useDispatch();

   //FETCHING: fetching data from API through Redux-action (see at Action folder)
   React.useEffect(() => {
      dispatch(getProductsAction());
   }, [dispatch]);

   const allProducts: IFetchedData[] | undefined = useSelector(
      (state: RootState) => state.productReducer?.allProducts
   );

   const error = useSelector(
      (state: RootState) => state.productReducer?.errMessage
   );

   const isError = error !== "" ? error : null;

   return (
      <>
         {allProducts === undefined && !allProducts ? (
            <h3>Couldn't able to get data from source</h3>
         ) : (
            <div>
               {isError}
               <h2 style={{ marginTop: "3rem" }}>{title}</h2>
               <div className="col-lg-12 col-md-12 col-sm-12 products">
                  {allProducts &&
                     allProducts.map((item: IFetchedData) => {
                        return (
                           <Product
                              key={item.id}
                              item={item}
                              category={category}
                           />
                        );
                     })}
               </div>
            </div>
         )}
      </>
   );
}
