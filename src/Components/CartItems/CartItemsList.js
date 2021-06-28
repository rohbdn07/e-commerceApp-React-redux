import React from 'react';
import Discount from '../Discount/Discount';
import CartItems from './CartItems';
import './CartItems.scss';
import { Scrollbars } from 'react-custom-scrollbars';


export default function CartItemsList() {
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
                            universal={true}>

                            <CartItems />

                        </Scrollbars>
                    </div>     
            </div>
       
    
            
        </>
    )
}
