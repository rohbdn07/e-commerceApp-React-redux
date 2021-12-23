import React from "react";
import { useParams } from "react-router-dom";
import Topbar from "../Components/Topbar/Topbar";
import CompanyLogo from "../Components/CompanyLogo/CompanyLogo";
import Searchbar from "../Components/Searchbar/Searchbar";
import CartIcon from "../Components/CartIcon/CartIcon";
import UserProfile from "../Components/Profile/UserProfile";
import LoginRegister from "../Components/Auth/LoginRegister/LoginRegister";
import Menubar from "../Components/Menubar/Menubar";
import DetailsBanner from "../Components/DetailsBanner/detail_banner";
import Products from "../Components/ProductsContainer/Products";
import FooterList from "../Components/Footer/FooterList";
import PartnersList from "../Components/OurBrands/PartnersList";
import DemoApp from "../Components/DownloadApp/DemoApp";
import { getProductsAction } from "../Redux/Action/getProducts-Action";
import { RootState } from "../Redux/Reducer";
import { useDispatch, useSelector } from "react-redux";

export default function ProductDetailsPage(): JSX.Element {
   const { categoryname } = useParams<{ categoryname?: string }>();
   // const { category } = useParams<{ category?: string }>();

   const allProducts = useSelector(
      (state: RootState) => state.productReducer?.allProducts
   );

   const detailPageBannerItem = useSelector(
      (state: RootState) => state.detailPageBanner?.detailPageBannerItem
   );

   const dispatch = useDispatch();

   //FETCHING: fetching data from API through Redux-action (see at Action folder)
   React.useEffect(() => {
      dispatch(getProductsAction());
   }, [dispatch]);

   return (
      <>
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

            <DetailsBanner detailPageBannerItem={detailPageBannerItem} />

            <div className="container">
               <Products category={categoryname} allProducts={allProducts} />
            </div>
            <PartnersList />
            <DemoApp />

            <FooterList />
         </div>
      </>
   );
}
