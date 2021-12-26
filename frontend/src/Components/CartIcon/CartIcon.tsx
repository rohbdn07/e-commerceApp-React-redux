import React from "react";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./CartIcon.scss";
import { RootState } from "../../Redux/Reducer";
import { IFetchedData } from "../../interfaces/productItem.interface";

export default function CartIcon(): JSX.Element {
   const selectedItems: IFetchedData[] | undefined = useSelector(
      (state: RootState) => state.productReducer?.selectedItems
   );

   return (
      <>
         <div className="cartIcon">
            <div className="icons">
               <Link to="/shopping-cart">
                  <div className="cart_icon">
                     <ImCart />
                     <p>{selectedItems?.length}</p>
                  </div>
               </Link>
            </div>
         </div>
      </>
   );
}
