import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromcart } from "../../Redux/Action/removeFromcart";
import "./CartItems.scss";
import { FaMinus, FaPlus } from "react-icons/fa";
import { decreaseQty, increaseQty } from "../../Redux/Action/upDown";

export default function CartItems() {
   const { selectedItems } = useSelector((state) => state.productReducer);
   const dispatch = useDispatch();

   const removeItem = (itemId) => {
      dispatch(removeFromcart(itemId));
   };

   const addQty = (item) => {
      dispatch(increaseQty(item));
   };

   const minusQty = (item) => {
      dispatch(decreaseQty(item));
   };

   return (
      <>
         {selectedItems.length > 0 ? (
            selectedItems.map((item, index) => {
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
