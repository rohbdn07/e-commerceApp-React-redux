import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GrPrevious, GrNext } from "react-icons/gr";
import { FaTruck } from "react-icons/fa";
import { checkoutAPI } from "../../servicesAPI/checkoutAPI";
import "./purchase.scss";

export default function Purchase() {
   const { selectedItems } = useSelector((state) => state.productReducer);
   const [loading, setLoading] = useState(false);

   function checkoutSubmit() {
      checkoutAPI(selectedItems, setLoading);
   }

   return (
      <>
         <div className="purchase">
            <div className="purchase_wrapper">
               <div className="purchase_left">
                  <Link to="/">
                     <button className="btn btn-outline-secondary">
                        <span>
                           <GrPrevious />
                        </span>
                        Continue shopping
                     </button>
                  </Link>
               </div>
               <div className="purchase_right">
                  {!loading ? (
                     <button
                        onClick={checkoutSubmit}
                        className={
                           selectedItems.length <= 0
                              ? "visually-hidden"
                              : "btn btn-warning"
                        }
                     >
                        Checkout
                     </button>
                  ) : (
                     <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                     </div>
                  )}
               </div>
            </div>
            <div className="alert purchase_delievery">
               <p>
                  <span>
                     <FaTruck />
                  </span>
                  Free Delivery within 1-2 weeks
               </p>
            </div>
         </div>
      </>
   );
}
