import React from "react";
import styled from "styled-components";

const S = {};

S.AspectRatioImageContainer = styled.div`
position: relative;

display: block;
height: 0;
padding-bottom: ${({imgVerticalRatio}) => imgVerticalRatio};

img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

`;

export default function AspectRatioImageContainer({imgVerticalRatio="33%", children, ...restProps}) {
  return <S.AspectRatioImageContainer imgVerticalRatio={imgVerticalRatio} {...restProps}>
    {children}
  </S.AspectRatioImageContainer>
}
