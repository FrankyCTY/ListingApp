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
  return <S.CompanyContainer className="company-container py-6 md:flex-row md:ml-4 md:justify-center">
    <Nav.LogoContainer className="w-24 mb-2 mr-4"/>
    <div className="whitespace-no-wrap self-end transform translate-y-8">
      <p className="text-base mb-2 md:text-xs">豬肉雞軟骨餃子</p>
      <p className="text-base mb-2 md:text-xs">豬肉雞軟骨餃子</p>
      <p className="text-base mb-2 md:text-xs">豬肉雞軟骨餃子</p>
      <p className="text-sm mb-2 md:text-xs">豬肉雞軟骨餃子</p>
    </div>
  </S.CompanyContainer>
}
