import React from "react";
import { IFetchedData } from "../../interfaces/productItem.interface";
import "./CartItems.scss";
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

type ICartItemsProps = {
   selectedItems: IFetchedData[] | undefined;
   removeItem: (itemId: number) => void;
   addQty: (item: IProductItems) => void;
   minusQty: (item: IProductItems) => void;
};

export default function CartItems({
   selectedItems,
   removeItem,
   addQty,
   minusQty,
}: ICartItemsProps): JSX.Element {
   return (
      <>
         {selectedItems && selectedItems.length > 0 ? (
            selectedItems.map((item, index: number) => {
               return (
                  <CartItemTab
                     key={item.id}
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
