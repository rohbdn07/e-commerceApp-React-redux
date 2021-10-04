import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import SuccessPage from "./Pages/SuccessPage";
import CancelledPage from "./Pages/CancelledPage";
import Homepage from "./Pages/Homepage";
import ShoppingCart from "./Pages/ShoppingCart";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import ScrollToTop from "./Components/ScrollToTop";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import CategoryPage from "./Pages/CategoryPage";

// Create a client
const queryClient = new QueryClient();

function App(): JSX.Element {
   return (
      <QueryClientProvider client={queryClient}>
         <BrowserRouter>
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
            </Switch>
         </BrowserRouter>
         <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
   );
}

export default App;
