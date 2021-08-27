import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectToCartAction } from "../../Redux/Action/selectToCartAction";

export default function AddToCartButton(props) {
   const dispatch = useDispatch();
   const { itemId } = props;
   const { isAdded } = useSelector((state) => state.productReducer);

   const addTocart = (itemId) => {
      dispatch(selectToCartAction(itemId));
   };
   return (
      <>
         <button className="btn btn-primary" onClick={() => addTocart(itemId)}>
            {!isAdded ? "Add to cart" : "Added"}
         </button>
      </>
   );
}
