import React from "react";
import styled from "styled-components";

const S = {};

S.ProductCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;
  padding: 0 5%;
  justify-content: space-between;

  @media screen and (min-width: 550px) {
    column-gap: 2rem;
    row-gap: 3rem;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(120px, 380px));
  }
  @media screen and (min-width: 1280px) {
    column-gap: 3rem;
  }
`;

export default function GridContainer({children, ...restProps}) {
    return <S.ProductCardsContainer {...restProps}>
      {children}
    </S.ProductCardsContainer>
}