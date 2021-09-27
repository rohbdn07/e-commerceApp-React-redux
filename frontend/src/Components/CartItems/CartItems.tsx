import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromcart } from "../../Redux/Action/removeFromcart";
import "./CartItems.scss";
import { FaMinus, FaPlus } from "react-icons/fa";
import { decreaseQty, increaseQty } from "../../Redux/Action/upDown";
import { RootState } from "../../Redux/Reducer";
import { IselectedProdcuts } from "../../Redux/Reducer/productReducer";

export interface IProductItems {
   filter(
      arg0: (item: IProductItems) => IProductItems | undefined
   ): IselectedProdcuts;
   id: string;
   title: string;
   qty: string | number;
   image: string;
   price: number;
   rating?: number | undefined;
   rate?: number | undefined;
}

export default function CartItems(): JSX.Element {
   const { selectedItems }: any = useSelector(
      (state: RootState) => state.productReducer
   );
   const dispatch = useDispatch();

   const removeItem = (itemId: string) => {
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
                                       <FaMinus
                                          onClick={() => minusQty(item)}
                                       />
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
               );
            })
         ) : (
            <h6>no item is selected. please select the product(s) at first.</h6>
         )}
      </>
   );
}
