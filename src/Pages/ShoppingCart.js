import React from 'react';
import CartHeader from '../Components/CartHeader/CartHeader';
import CartItemsList from '../Components/CartItems/CartItemsList';
import Searchbar from '../Components/Searchbar/Searchbar';
import Topbar from '../Components/Topbar/Topbar';

export default function ShoppingCart() {
    return (
       <>
            <Topbar />
            <Searchbar />
           <CartHeader />
          <CartItemsList />
       </>
    )
}
