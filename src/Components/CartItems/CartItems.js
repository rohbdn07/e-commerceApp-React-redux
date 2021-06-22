import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';
import './CartItems.scss';

export default function CartItems() {
    const {selectedItems} = useSelector(state => state.addToCartReducer);

    // const exit = selectedItems.find((item)=> item.id===2)

  
    console.log('the comming item is', selectedItems);
    // console.log('the id of comming item is', selectedItems.id)
    return (
       <>
       {
           selectedItems.length > 0 ? selectedItems.map((item)=> {
               return ( 
               <div className="cartitem">
                    <div className="cartitem_wrapper">
                        <div className="cartitem_img">
                            <img style={{height:"5rem"}} src={item.image} alt="product_image"/>
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
                            <p>${item.price}</p>
                        </div>
                        <div className="cartitem_delete">
                            <button className="btn btn-primary">Remove</button>
                        </div>
                    </div>
                </div>
               )

           }) : <h6>no item is selected. please select the product(s) at first.</h6>
           
       }


           
       </>
    )
}
