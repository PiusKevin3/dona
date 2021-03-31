import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Vendors from "../pages/Vendors";
import Store from "../pages/Store"
import VendorReg from "../pages/VendorReg"
import TheLayout from "../../src/dash/containers/TheLayout"
import Theme from "../../src/dash/views/theme/colors/Colors"
import Analytics from "../../src/dash/views/charts/Charts"
import Customer from "../../src/dash/views/base/tables/Tables"
import Orders from "../../src/dash/views/base/tabs/Tabs"
import Products from "../../src/dash/views/base/cards/Cards"
import Register from "../../src/dash/views/pages/register/Register"

const MainRoutes = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/vendors" component={Vendors} />
          <Route exact path="/Store" component={Store} />
          <Route exact path="/VendorReg" component={VendorReg} />          
          <Route exact path="/dashboard" name="Home" render={props => <TheLayout {...props}/>} />
          <Route exact path="/Colors" name="Colors" render={props => <Theme {...props}/>} />
          <Route exact path="/Analytics" name="Analytics" render={props => <Analytics {...props}/>} />
          <Route exact path="/Customer List" name="Customer List" render={props => <Customer {...props}/>} />
          <Route exact path="/Orders" name="Orders" render={props => <Orders {...props}/>} />
          <Route exact path="/Products" name="Products" render={props => <Products {...props}/>} />
          <Route exact path="/Register" name="Register" render={props => <Register {...props}/>} />
        </Switch>
      </BrowserRouter>
  );
};

export default MainRoutes;
