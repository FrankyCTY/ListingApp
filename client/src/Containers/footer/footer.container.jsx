import React from "react";
import styled from "styled-components";
import EmailContactContainer from "../contactDetails/emailContact.container";
import PhoneContactContainer from "../../Containers/contactDetails/phoneContact.container";
import CompanyContainer from "../../Containers/company/company.container";

const S = {};

export default function FooterContainer() {
  return <div className="footer-container md:mt-16">
    <div className="w-full md:flex md:flex-row-reverse items-center">
      <PhoneContactContainer/>
      <EmailContactContainer/>
      <CompanyContainer/>
    </div>
    <div className="bottom-div w-screen" style={{background: "#111", height: "2rem"}}></div>
  </div>
}