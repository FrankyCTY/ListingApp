import styled from "styled-components";

const S = {};

S.ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  
  &:hover {
    .productCard_decoDiv {
      opacity: 1;
    }

    .ProductCardFooter {
      background: ${({theme}) => theme.secondColor};
      color: white;
    }
  }


  img {
    display: block;
    height: 75%;
  }
`;

S.ProductCardDecoDiv = styled.div`
  transition: all 200ms ease-in-out;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.5);
  height: 75%;
  pointer-events: none;
  opacity: 0;
`;

S.ProductCardFooter = styled.div`
  width: 100%;
  height: 25%;
  background: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, .2);
  text-align: center;
  transition: all 200ms ease-in-out;
`;

export default S;