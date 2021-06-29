import React from 'react';
import './pages.scss';
import CartHeader from '../Components/CartHeader/CartHeader';
import CartItemsList from '../Components/CartItems/CartItemsList';
import Searchbar from '../Components/Searchbar/Searchbar';
import Topbar from '../Components/Topbar/Topbar';
import Discount from '../Components/Discount/Discount';
import Purchase from '../Components/MakePurchase/Purchase';
import Refund from '../Components/Refund/Refund';
import Footer from '../Components/CartFooter/Footer';

export default function ShoppingCart() {
    return (
       <>
            <div className="col-lg-12">
                     <Topbar />
                     <Searchbar />
                     <CartHeader />
               <div className="container shopping_cart">
                  <div className="col-lg-8">
                     <CartItemsList />
                     <Purchase />
                  </div>
                     <div className="col-lg-3">
                         <Discount />
                     </div>  
               </div>
               <div className="col-lg-12 mx-auto">
                  <Refund />
                  <Footer />
               </div>
            </div>
       </>
    )
}
