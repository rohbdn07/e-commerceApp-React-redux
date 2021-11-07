import React from "react";
import Topbar from "../Components/Topbar/Topbar";
import Menubar from "../Components/Menubar/Menubar";
import Banner from "../Components/Banner/Banner";
import Searchbar from "../Components/Searchbar/Searchbar";
import Eservices from "../Components/E-services/Eservices";
import ProductsList from "../Components/ProductsContainer/ProductsList";
import PartnersList from "../Components/OurBrands/PartnersList";
import DemoApp from "../Components/DownloadApp/DemoApp";
import FooterList from "../Components/Footer/FooterList";
import CartIcon from "../Components/CartIcon/CartIcon";
import UserProfile from "../Components/Profile/UserProfile";
import CompanyLogo from "../Components/CompanyLogo/CompanyLogo";
import LoginRegister from "../Components/Auth/LoginRegister/LoginRegister";

export default function Homepage(): JSX.Element {
   return (
      <div className="col-lg-12 mx-auto">
         <div className="col-lg-8 hompage_topbar">
            <Topbar />
         </div>
         <div className="homepage_search">
            <div className="col-lg-8 container homepage_search_wrapper">
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
         <Banner />
         <Eservices />
         <ProductsList />
         <PartnersList />
         <DemoApp />
         <FooterList />
      </div>
   );
}
