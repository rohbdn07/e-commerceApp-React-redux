import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectToCartAction } from "../../Redux/Action/selectToCartAction";
import { RootState } from "../../Redux/Reducer";

export default function AddToCartButton(props: any): JSX.Element {
   const dispatch = useDispatch();
   const { itemId } = props;
   const selectedItems: any = useSelector(
      (state: RootState) => state.productReducer?.selectedItems
   );

   const isIdExisted = selectedItems.some((item: any) => {
      if (item.id === itemId) {
         return true;
      }
      return false;
   });

   const addTocart = (itemId: string): void => {
      dispatch(selectToCartAction(itemId));
   };
   return (
      <>
         <button
            className="btn btn-primary"
            onClick={() => addTocart(itemId)}
            disabled={isIdExisted}
         >
            {isIdExisted ? "Added" : "Add to cart"}
         </button>
      </>
   );
}
