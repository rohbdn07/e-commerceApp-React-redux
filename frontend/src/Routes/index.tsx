import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import CancelledPage from "../Pages/CancelledPage";
import CategoryPage from "../Pages/CategoryPage";
import Homepage from "../Pages/Homepage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import ShoppingCart from "../Pages/ShoppingCart";
import SuccessPage from "../Pages/SuccessPage";

const AppRoutes: React.FC = () => {
   return (
      <>
         <ScrollToTop />
         <Switch>
            <Route exact path="/">
               <Homepage />
            </Route>
            <Route path="/category/:categoryname">
               <CategoryPage />
            </Route>
            <Route path="/product/:categoryname/:id">
               <ProductDetailsPage />
            </Route>
            <Route path="/shopping-cart">
               <ShoppingCart />
            </Route>
            <Route path="/success">
               <SuccessPage />
            </Route>
            <Route path="/cancelled">
               <CancelledPage />
            </Route>
            <Redirect from="*" to="/" />
         </Switch>
      </>
   );
};

export default AppRoutes;
