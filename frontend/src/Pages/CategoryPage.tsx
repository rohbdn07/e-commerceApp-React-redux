import React from "react";
import { useParams } from "react-router-dom";
import CartIcon from "../Components/CartIcon/CartIcon";
import CategoryBanner from "../Components/Categories/Banner/CategoryBanner";
import CompanyLogo from "../Components/CompanyLogo/CompanyLogo";
import FooterList from "../Components/Footer/FooterList";
import LoginRegister from "../Components/LoginRegister/LoginRegister";
import Menubar from "../Components/Menubar/Menubar";
import UserProfile from "../Components/Profile/UserProfile";
import Searchbar from "../Components/Searchbar/Searchbar";
import Topbar from "../Components/Topbar/Topbar";
import useFetchCategory from "../servicesAPI/useFetchCategory";
import FiltersSection from "../Components/Filters/FiltersSection";
import CategoryList from "../Components/Categories/ProductList/CategoryList";

export default function CategoryPage(): JSX.Element {
   const { categoryname }: any = useParams();

   const { isError, isLoading, data, isSuccess } =
      useFetchCategory(categoryname);

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

            <CategoryBanner
               isError={isError}
               isLoading={isLoading}
               isSuccess={isSuccess}
               data={data}
            />
            <hr />
            <div className="container col-lg-12 d-flex">
               <div className="col-lg-3">
                  <FiltersSection />
               </div>
               <div className="col-lg-9">
                  <CategoryList data={data} isLoading={isLoading} />
               </div>
            </div>

            <FooterList />
         </div>
      </>
   );
}
