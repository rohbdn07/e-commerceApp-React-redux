import React from 'react';
import CartItems from './CartItems';
import './CartItems.scss';

export default function CartItemsList() {
    return (
        <>
            <div className="col-lg-8 mx-auto cartitemslist">
               <div className="col-lg-12">
                    <div className="cartitemslist_wrapper">
                        <CartItems />
                    </div>
               </div>
            </div>
        </>
    )
}
