import React from "react";
import "./Product.scss";
import { IFetchedData } from "../../Redux/Action/getProducts-Action";
import Product from "./Product";

interface IProductsProps {
   title?: string;
   category: string | undefined;
   allProducts: IFetchedData[] | undefined;
}

/**
 *
 * @param {IProductsProps} props
 * @returns JSX.Element
 */
export default function Products({
   category,
   allProducts,
}: IProductsProps): JSX.Element {
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
