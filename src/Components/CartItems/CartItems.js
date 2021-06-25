import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {removeFromcart} from '../../Redux/Action/removeFromcart';
import './CartItems.scss';

export default function CartItems() {

    const {selectedItems} = useSelector(state => state.productReducer);
    const dispatch = useDispatch();

    const removeItem = (itemId) => {
        dispatch(removeFromcart(itemId))
    }

    return (
        <>
                { selectedItems.length > 0 ? selectedItems.map((item)=> {
                    return ( 
                            <div className="cartitem">
                                <div className="cartitem_wrapper">
                                    <div className="cartitem_img">
                                        <img src={item.image} alt="product_image"/>
                                    
                                    </div>
                                    <div className="cartitem_info">
                                        <p>{item.title}</p>
                                    </div>
                                    <div className="cartitem_qty">
                                            <ul>
                                                <li>
                                                    <select className="px-3 py-2" name="quantity">
                                                        <option value="English">1</option>
                                                        <option value="Finnish">2</option>
                                                        <option value="Finnish">3</option>
                                                        <option value="Finnish">4</option>
                                                    </select>
                                                </li>
                                            </ul>
                                    </div>
                                    <div className="cartitem_price">
                                        <p><strong>${item.price}</strong></p>
                                    </div>
                                    <div className="cartitem_delete">
                                        <button className="btn btn-primary" onClick={()=> removeItem(item.id)}>Remove</button>
                                    </div>
                                </div>
                                {selectedItems.length !== 1 ? <hr /> : null }
                            
                            </div>
                    )

                }) : <h6>no item is selected. please select the product(s) at first.</h6>
                
            }
        </>
    )
}

