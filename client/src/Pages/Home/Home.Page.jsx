import React from "react";
import {Button, Icon} from "../../Components";
import EmailContactContainer from "../../Containers/contactDetails/emailContact.container";
import PhoneContactContainer from "../../Containers/contactDetails/phoneContact.container";
import NavContainer from "../../Containers/nav/nav.container";
import HomeHeaderContainer from "../../Containers/homeHeader/homeHeader.container";
// import HomeHeaderContainer from "../../Containers/homeHeader/homeHeader.container";

export default function HomePage() {
  return <div className="HomePage-container">
    {/* <Button.ReadMoreBtn shape="circle"/> */}
    {/* <Icon.RoundedIcon iconClass="iconfont iconphonenew"/> */}
    {/* <Icon.RoundedIcon iconClass="iconfont iconemail" iconSize="1.2rem" /> */}
    {/* <EmailContactContainer/> */}
    {/* <PhoneContactContainer/> */}
    <NavContainer/>
    <HomeHeaderContainer/>
  </div>
}
