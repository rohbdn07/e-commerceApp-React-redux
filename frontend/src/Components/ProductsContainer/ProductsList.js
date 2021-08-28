import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductsAPI } from "../../servicesAPI/getProductsAPI";
import Products from "./Products";

export default function ProductsList() {
   const dispatch = useDispatch();
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      getProductsAPI(setLoading, dispatch);
   }, [dispatch]);

   return (
      <>
         <div className="container">
            {loading ? (
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
