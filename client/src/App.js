import React from "react";
// import axios from "axios";
// import Url from "./url";
import './App.css';
import './style/main.css';

import { Switch, Route } from "react-router-dom";
import GlobalStyle from "./style/globalStyle";
import NavContainer from "./Containers/nav/nav.container";
import HomePage from "./Pages/Home/Home.Page";

function App() {

  return <>
    <GlobalStyle/>
    {/* Components */}
    <NavContainer></NavContainer>
    {/* Routes */}
    <Switch>
      <Route
        exact
        path="/"
      >
        <HomePage/>
      </Route> 
    </Switch>
  </>;
}

export default App;
