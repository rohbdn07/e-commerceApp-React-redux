import React from 'react';
import CartItems from './CartItems';
import './CartItems.scss';

export default function CartItemsList() {
    return (
        <>
            <div className="cartitemslist">
               <div className="col-lg-12 col-md-10">
                    <div className="cartitemslist_wrapper">
                        <CartItems />
                    </div>
               </div>
            </div>
        </>
    )
}
