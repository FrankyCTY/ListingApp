import React from "react";
import {Icon, Nav} from "../../Components";
import styled from "styled-components";
import LogoSmallSvg from "../../assets/svg/logo/logo2.svg";

const S = {};

S.CompanyContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) {
    &::after {
      content: '';
      position: absolute;
      right: 0;
      height: 6rem;
      width: 1px;
      background: gray;
    }
  }
`;

S.Text = styled.p`margin-bottom: .5rem;`;

export default function CompanyContainer() {
  return <S.CompanyContainer className="company-container py-6 md:flex-row md:ml-4 md:justify-center md:w-6/12">
    <Nav.LogoContainer className="w-24 mb-2 mr-4"/>
    <div className="md:transform md:-translate-y-4">
      <span className="text-base mb-2 lg:text-lg">豬肉雞軟骨餃子 </span>
      <span className="text-base mb-2 lg:text-lg">豬肉雞軟骨餃子 </span>
      <span className="text-base mb-2 lg:text-lg">豬肉雞軟骨餃子 </span>
      <span className="text-sm mb-2 lg:text-lg">豬肉雞軟骨餃子</span>
    </div>
  </S.CompanyContainer>
}
