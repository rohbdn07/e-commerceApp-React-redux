import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ScrollToTop from "../Components/ScrollToTop";
import { PrivateRoute } from "../Middleware/PrivateRoutes/PrivateRoute";
import CancelledPage from "../Pages/CancelledPage";
import CategoryPage from "../Pages/CategoryPage";
import Homepage from "../Pages/Homepage";
import ProductDetailsPage from "../Pages/ProductDetailsPage";
import ShoppingCart from "../Pages/ShoppingCart";
import SuccessPage from "../Pages/SuccessPage";
import AuthVerify from "../common/auth/AuthVerify";
import useLogoutUser from "../Components/Auth/logout/useLogoutUser";

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
            <PrivateRoute exact path="/" component={SuccessPage} />
            <Route path="/cancelled">
               <CancelledPage />
            </Route>
            <Redirect from="*" to="/" />
         </Switch>

         <AuthVerify logout={useLogoutUser()} />
      </>
   );
};

export default AppRoutes;
