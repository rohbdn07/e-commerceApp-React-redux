import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromcart } from "../../Redux/Action/removeFromcart";
import "./CartItems.scss";
import { decreaseQty, increaseQty } from "../../Redux/Action/upDown";
import { RootState } from "../../Redux/Reducer";
import CartItemTab from "./CartItemTab";

export interface IProductItems {
   id: number;
   title: string;
   qty: string | number;
   description?: string;
   image: string;
   price: number;
   rating: {
      rate: number;
   };
}

export default function CartItems(): JSX.Element {
   const { selectedItems }: any = useSelector(
      (state: RootState) => state.productReducer
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
         {selectedItems.length > 0 ? (
            selectedItems.map((item: IProductItems, index: number) => {
               return (
                  <CartItemTab
                     item={item}
                     index={index}
                     removeItem={removeItem}
                     addQty={addQty}
                     minusQty={minusQty}
                     selectedItems={selectedItems}
                  />
               );
            })
         ) : (
            <h6>No item is selected. please select the product(s) at first.</h6>
         )}
      </>
   );
}
