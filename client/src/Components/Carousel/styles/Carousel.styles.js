import styled from "styled-components";

const S = {};

S.Frame = styled.div`

`;
S.ImageContainer = styled.div`
  height: 92vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  left: -2rem;
  background: #f7fbfc;
`;
S.ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
S.CarouselImage = styled.img`
  transition: transform 16s ease, opacity 1.2s ease, -webkit-transform 16s ease;
  display: block;
`;
export default S;