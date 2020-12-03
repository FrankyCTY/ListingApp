import React from "react";
// import axios from "axios";
// import Url from "./url";

import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
// import NavContainer from "./Containers/nav/nav.container";
import HomePage from "./Pages/Home/Home.Page";
import CartPage from "./Pages/Cart/Cart.Page";
import ProductRouter from "./Routers/Product.router";
import NavContainer from "./Containers/nav/nav.container";
import HomeHeaderContainer from "./Containers/homeHeader/homeHeader.container";
import FooterContainer from "./Containers/footer/footer.container.jsx";
import { ThemeProvider } from "styled-components";
import {theme} from "./style/theme";
import useRouter from "./hooks/useRouter.hooks";
import {ProtectedRoute} from "./_helpers/routes.helper";

function App() {
  const route = useRouter();
  const renderNavAndHeader = (!route.pathName.includes("/cart"));

  return <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <div className="overflow-hidden">
    {/* NavAndHeader Components */}
    {
      renderNavAndHeader && <> <NavContainer/>
            <HomeHeaderContainer/>
            </>
    }
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
      <ProtectedRoute exact path="/cart" redirectUrl="/">
        <CartPage />
      </ProtectedRoute>
      <Route path="/">
        <h1>404 Not Found</h1>
      </Route>
    </Switch>
    <FooterContainer/>
    </div>
  </ThemeProvider>;
}

export default App;
