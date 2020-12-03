import React from "react";
import {Button} from "../../Components";
import styled from "styled-components";

const S = {};

S.CartBottomBarContainer = styled.div`
  display: grid;
  padding: .5rem;
  grid-template-columns: 2fr 6fr 2fr;
  justify-items: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 1rem;
    max-width: 700px;
    padding: 2rem;
  }
`;

export default function CartBottomBarContainer() {
  return <S.CartBottomBarContainer className="mx-auto">
    <Button.TwoLinesBtn className="md:w-1/2 lg:w-48 lg:text-sm md:col-start-1 md:row-start-2" outline={true} firstLineText="返回" secondLineText="back" />
    <h1 className="md:order-first md:justify-self-center md:col-span-full md:row-start-1 md:text-xl lg:text-3xl md:mb-4">總金額 HKD 799.00</h1>
    <Button.TwoLinesBtn className="md:w-1/2 lg:w-48 lg:text-sm md:col-start-2 md:row-start-2" firstLineText="繼續" secondLineText="proceed" />
  </S.CartBottomBarContainer>
}
