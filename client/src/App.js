import React from "react";
// import axios from "axios";
// import Url from "./url";

import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
// import NavContainer from "./Containers/nav/nav.container";
import HomePage from "./Pages/Home/Home.Page";
import { ThemeProvider } from "styled-components";
import {theme} from "./style/theme";

function App() {
  return <ThemeProvider theme={theme}>
    <GlobalStyle/>
    {/* Components */}
    {/* <NavContainer></NavContainer> */}
    {/* Routes */}
    <Switch>
      <Route
        exact
        path="/"
      >
        <HomePage/>
      </Route> 
    </Switch>
  </ThemeProvider>;
}

export default App;
