import React from "react";
import CompanyLogo from "../Components/CompanyLogo/CompanyLogo";
import CartIcon from "../Components/CartIcon/CartIcon";
import UserProfile from "../Components/Profile/UserProfile";
import LoginRegister from "../Components/Auth/LoginRegister/LoginRegister";
import CartItemsList from "../Components/CartItems/CartItemsList";
import Topbar from "../Components/Topbar/Topbar";
import Discount from "../Components/Discount/Discount";
import Purchase from "../Components/MakePurchase/Purchase";
import Refund from "../Components/Refund/Refund";
import Footer from "../Components/CartFooter/Footer";
import TotalPrice from "../Components/TotalPrice/TotalPrice";
import "./pages.scss";
import CartHeader from "../Components/CartHeader/CartHeader";

export default function ShoppingCart(): JSX.Element {
   return (
      <>
         <div className="col-lg-12 mx-auto">
            <div className="col-lg-8 hompage_topbar">
               <Topbar />
            </div>
            <div className="homepage_search">
               <div className="container shopping_search_wrapper">
                  <CompanyLogo />
                  <div className="homepage_right">
                     <CartIcon />
                     <UserProfile />
                     <LoginRegister />
                  </div>
               </div>
            </div>
            <div className="container shopping_cart">
               <CartHeader />
               <div className="col-lg-8">
                  <CartItemsList />
                  <Purchase />
               </div>
               <div className="col-lg-3 col-12 mt-2">
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
