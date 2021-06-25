import React from 'react';
import CartHeader from '../Components/CartHeader/CartHeader';
import CartItemsList from '../Components/CartItems/CartItemsList';
import Searchbar from '../Components/Searchbar/Searchbar';
import Topbar from '../Components/Topbar/Topbar';

export default function ShoppingCart() {
    return (
       <>
            <div className="col-lg-12">
                     <Topbar />
                     <Searchbar />
                     <CartHeader />
               <div className="col-lg-8 col-md-11 col-sm-11 mx-auto">
                  <CartItemsList />
               </div>
            </div>
       </>
    )
}
