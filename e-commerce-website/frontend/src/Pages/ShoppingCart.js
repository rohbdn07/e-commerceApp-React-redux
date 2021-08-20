import React from "react";
import CartHeader from "../Components/CartHeader/CartHeader";
import CompanyLogo from "../Components/CompanyLogo/CompanyLogo";
import CartIcon from "../Components/CartIcon/CartIcon";
import UserProfile from "../Components/Profile/UserProfile";
import Login_register from "../Components/Login_register/Login_register";
import CartItemsList from "../Components/CartItems/CartItemsList";
import Searchbar from "../Components/Searchbar/Searchbar";
import Topbar from "../Components/Topbar/Topbar";
import Discount from "../Components/Discount/Discount";
import Purchase from "../Components/MakePurchase/Purchase";
import Refund from "../Components/Refund/Refund";
import Footer from "../Components/CartFooter/Footer";
import TotalPrice from "../Components/TotalPrice/TotalPrice";
import "./pages.scss";

export default function ShoppingCart() {
   return (
      <>
         <div className="col-lg-12 mx-auto">
            <div className="col-lg-8 hompage_topbar">
               <Topbar />
            </div>
            <div className="homepage_search">
               <div className="container shopping_search_wrapper">
                  <CompanyLogo />
                  {/* <Searchbar /> */}
                  <div className="homepage_right">
                     <CartIcon />
                     <UserProfile />
                     <Login_register />
                  </div>
               </div>
            </div>
            <div className="container shopping_cart">
               <div className="col-lg-8">
                  <CartItemsList />
                  <Purchase />
               </div>
               <div className="col-lg-3">
                  <Discount />
                  <TotalPrice />
               </div>
            </div>
            <div className="col-lg-12 mx-auto">
               <Refund />
               <Footer />
            </div>
         </div>
      </>
   );
}
