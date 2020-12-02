import React from "react";
import {Button, Icon} from "../../Components";
// import FooterContainer from "../../Containers/footer/footer.container.jsx";
// import NavContainer from "../../Containers/nav/nav.container";
// import HomeHeaderContainer from "../../Containers/homeHeader/homeHeader.container";
import HomeBodyContainer from "../../Containers/homeBody/homeBody.container";
// import HomeHeaderContainer from "../../Containers/homeHeader/homeHeader.container";

export default function HomePage() {
  return <div className="HomePage-container overflow-hidden">
    {/* <NavContainer/>
    <HomeHeaderContainer/> */}
    <HomeBodyContainer/>
    {/* <FooterContainer/> */}
  </div>
}
