import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { IProductItems } from "./CartItems";

interface ICartItemTabProps {
   selectedItems: any;
   item: IProductItems;
   index: number;
   addQty: (item: IProductItems) => void;
   minusQty: (item: IProductItems) => void;
   removeItem: (itemId: number) => void;
}
export default function CartItemTab({
   item,
   index,
   removeItem,
   addQty,
   minusQty,
   selectedItems,
}: ICartItemTabProps): JSX.Element {
   return (
      <>
         <div key={index} className="cartitem">
            <div className="cartitem_wrapper">
               <div className="cartitem_img">
                  <img src={item.image} alt="product_image" />
               </div>
               <div className="cartitem_info">
                  <p>{item.title}</p>
               </div>
               <div className="cartitem_qty">
                  <ul>
                     <li>
                        <div className="add-minus-quantity">
                           <span>
                              <FaMinus onClick={() => minusQty(item)} />
                           </span>
                           <input
                              type="text"
                              value={item.qty}
                              onChange={(e) => e.target.value}
                              placeholder="0"
                           />
                           <span>
                              <FaPlus onClick={() => addQty(item)} />
                           </span>
                        </div>
                     </li>
                  </ul>
               </div>
               <div className="cartitem_price">
                  <p>
                     <strong>${item.price.toFixed(2)}</strong>
                  </p>
               </div>
               <div className="cartitem_delete">
                  <button
                     className="btn btn-primary"
                     onClick={() => removeItem(item.id)}
                  >
                     Remove
                  </button>
               </div>
            </div>
            {selectedItems.length !== 1 ? <hr /> : null}
         </div>
      </>
   );
}
