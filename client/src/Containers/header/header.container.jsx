import React from "react";
import {Header} from "../../Components";

export default function HeaderContainer() {
  return <Header>
    <Header.LogoContainer/>
    <div>
      <Header.NavTogglerContainer>
      </Header.NavTogglerContainer>
    </div>
    <Header.NavLinkContainer/>
  </Header>
}