import React from "react";
import { useParams } from "react-router-dom";
import Topbar from "../Components/Topbar/Topbar";
import CompanyLogo from "../Components/CompanyLogo/CompanyLogo";
import Searchbar from "../Components/Searchbar/Searchbar";
import CartIcon from "../Components/CartIcon/CartIcon";
import UserProfile from "../Components/Profile/UserProfile";
import LoginRegister from "../Components/LoginRegister/LoginRegister";
import Menubar from "../Components/Menubar/Menubar";
import DetailsBanner from "../Components/DetailsBanner/detail_banner";
import Products from "../Components/ProductsContainer/Products";
import FooterList from "../Components/Footer/FooterList";

export default function ProductDetailsPage(): JSX.Element {
   const { categoryname }: any = useParams<{ categoryname?: string }>();
   // const { category } = useParams<{ category?: string }>();

   return (
      <>
         <div className="col-lg-12 mx-auto">
            <div className="col-lg-8 hompage_topbar">
               <Topbar />
            </div>
            <div className="homepage_search">
               <div className="container homepage_search_wrapper">
                  <CompanyLogo />
                  <div className="display_searchbar">
                     <Searchbar />
                  </div>
                  <CartIcon />
                  <UserProfile />
                  <LoginRegister />
               </div>
            </div>
            <Menubar />

            <DetailsBanner />

            <div className="container">
               <Products category={categoryname} />
            </div>

            <FooterList />
         </div>
      </>
   );
}
