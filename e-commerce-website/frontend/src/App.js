import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./App.scss";
import Success from "./Components/SuccessPayment/Success";
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
          <Success />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
