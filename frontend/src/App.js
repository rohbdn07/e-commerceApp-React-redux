import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.scss";
import SuccessPage from "./Pages/SuccessPage";
import CancelledPage from "./Pages/CancelledPage";
import Homepage from "./Pages/Homepage";
import ShoppingCart from "./Pages/ShoppingCart";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Homepage />
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
  );
}

export default App;
