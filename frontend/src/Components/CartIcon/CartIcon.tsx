import React from "react";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CartIcon.scss";
import { RootState } from "../../Redux/Reducer";

export default function CartIcon() {
   const { selectedItems }: any = useSelector(
      (state: RootState) => state.productReducer
   );

   return (
      <>
         <div className="cartIcon">
            <div className="icons">
               <Link to="/shopping-cart">
                  <div className="cart_icon">
                     <ImCart />
                     <p>{selectedItems.length}</p>
                  </div>
               </Link>
            </div>
         </div>
      </>
   );
}
