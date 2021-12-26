import React from "react";
import CartItems, { IProductItems } from "./CartItems";
import "./CartItems.scss";
import { Scrollbars } from "react-custom-scrollbars";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../Redux/Reducer";
import { removeFromcart } from "../../Redux/Action/removeFromcart";
import { decreaseQty, increaseQty } from "../../Redux/Action/upDown";

export default function CartItemsList(): JSX.Element {
   const selectedItems = useSelector(
      (state: RootState) => state.productReducer?.selectedItems
   );
   const dispatch = useDispatch();

   const removeItem = (itemId: number) => {
      dispatch(removeFromcart(itemId));
   };

   const addQty = (item: IProductItems) => {
      dispatch(increaseQty(item));
   };

   const minusQty = (item: IProductItems) => {
      dispatch(decreaseQty(item));
   };

   return (
      <>
         <div className="cartitemslist">
            <div className="cartitemslist_wrapper">
               <Scrollbars
                  autoHide
                  autoHideTimeout={1000}
                  autoHideDuration={200}
                  autoHeight
                  autoHeightMin={0}
                  autoHeightMax={400}
                  thumbMinSize={20}
                  universal={true}
               >
                  <CartItems
                     selectedItems={selectedItems}
                     removeItem={removeItem}
                     addQty={addQty}
                     minusQty={minusQty}
                  />
               </Scrollbars>
            </div>
         </div>
      </>
   );
}
