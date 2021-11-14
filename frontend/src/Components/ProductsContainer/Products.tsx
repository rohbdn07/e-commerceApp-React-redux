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

/**
 *
 * @param {IProductsProps} props
 * @returns JSX.Element
 */
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

   // const error = useSelector(
   //    (state: RootState) => state.productReducer?.errMessage
   // );

   // const isError = error !== "" ? error : null;
   // console.log("the all products", allProducts);

   return (
      <>
         {allProducts === undefined && !allProducts ? (
            <h3>Couldn't able to get data from source</h3>
         ) : (
            <div>
               <h2
                  className="p-3 text-white"
                  style={{
                     backgroundColor: "black",
                     marginTop: "3rem",
                     width: "fit-content",
                  }}
               >
                  {category}
               </h2>
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
