import React from "react";
// import axios from "axios";
// import Url from "./url";

import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
// import NavContainer from "./Containers/nav/nav.container";
import HomePage from "./Pages/Home/Home.Page";
import ProductRouter from "./Routers/Product.router";
import NavContainer from "./Containers/nav/nav.container";
import HomeHeaderContainer from "./Containers/homeHeader/homeHeader.container";
import FooterContainer from "./Containers/footer/footer.container.jsx";
import { ThemeProvider } from "styled-components";
import {theme} from "./style/theme";

function App() {
  return <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <div className="overflow-hidden">
      {/* Components */}
      <NavContainer/>
      <HomeHeaderContainer/>
    {/* Routes */}
    <Switch>
      <Route
        exact
        path="/"
        >
        <HomePage/>
      </Route> 

      <Route
        path="/products"
        >
        <ProductRouter/>
      </Route> 
    </Switch>
    <FooterContainer/>
    </div>
  </ThemeProvider>;
}

export default App;
