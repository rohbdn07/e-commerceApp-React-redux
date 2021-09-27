import React from "react";
import { useGetProductsAPI } from "../../servicesAPI/getProductsAPI";
import Products from "./Products";

export default function ProductsList(): JSX.Element {
   const isLoading: boolean | undefined = useGetProductsAPI();

   return (
      <>
         <div className="container">
            {isLoading ? (
               <h3>Loading...</h3>
            ) : (
               <div className="col-lg-12 product_list">
                  <Products title="Men's clothes" category="men's clothing" />
                  <Products
                     title="Women's clothes"
                     category="women's clothing"
                  />
                  <Products title="Electronics" category="electronics" />
                  <Products title="Jewelery" category="jewelery" />
               </div>
            )}
         </div>
      </>
   );
}
