import React from "react";
import { useParams } from "react-router-dom";
import CartIcon from "../Components/CartIcon/CartIcon";
import CategoryBanner from "../Components/Categories/Banner/CategoryBanner";
import CompanyLogo from "../Components/CompanyLogo/CompanyLogo";
import FooterList from "../Components/Footer/FooterList";
import LoginRegister from "../Components/Auth/LoginRegister/LoginRegister";
import Menubar from "../Components/Menubar/Menubar";
import UserProfile from "../Components/Profile/UserProfile";
import Searchbar from "../Components/Searchbar/Searchbar";
import Topbar from "../Components/Topbar/Topbar";
import useFetchCategory from "../servicesAPI/Category/useFetchCategory";
import FiltersSection from "../Components/Filters/FiltersSection";
import CategoryList from "../Components/Categories/ProductList/CategoryList";
import "./pages.scss";
import PartnersList from "../Components/OurBrands/PartnersList";
import DemoApp from "../Components/DownloadApp/DemoApp";
import ImageCategory from "../Components/Banner/components/Banner/ImageCatogry";
import {
   FeaturesImages,
   newArrivalsProduct,
} from "../Components/Banner/Images/ImageData";

export default function CategoryPage(): JSX.Element {
   const { categoryname }: any = useParams();
   const [newArrivals, setNewArrivals] = React.useState<FeaturesImages[]>([]);

   const { isError, isLoading, data, isSuccess } =
      useFetchCategory(categoryname);

   //UseEffect to get the new arrivals images from other folder.
   React.useEffect(() => {
      const newArrivalsImage = () => {
         if (categoryname === "electronics") {
            return setNewArrivals(newArrivalsProduct.newElectronics);
         } else if (categoryname === "jewelery") {
            return setNewArrivals(newArrivalsProduct.newJewelery);
         } else {
            return setNewArrivals(newArrivalsProduct.newArrivalsClothes);
         }
      };
      newArrivalsImage();
   }, [categoryname]);

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

            <CategoryBanner
               isError={isError}
               isLoading={isLoading}
               isSuccess={isSuccess}
               data={data}
            />

            <hr className="category__hr_line col-lg-10" />

            <ImageCategory
               header={`New ${categoryname}`}
               images={newArrivals}
            />

            <hr className="category__hr_line col-lg-10" />

            <div className="col-lg-12 container categoryPage_filter">
               <div className="col-lg-3 category_filter_left">
                  <FiltersSection />
               </div>
               <div className="col-lg-8">
                  <CategoryList data={data} isLoading={isLoading} />
               </div>
            </div>

            <PartnersList />

            <DemoApp />

            <FooterList />
         </div>
      </>
   );
}
