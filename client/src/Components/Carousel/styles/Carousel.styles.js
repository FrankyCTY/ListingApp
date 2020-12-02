import styled from "styled-components";

const S = {};

S.Frame = styled.div`
  height: 100vh;
  width: 100vw;
  background: #f7fbfc;
  
`;
S.ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;
S.ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
`;
S.CarouselImage = styled.img`
  transition: transform 16s ease, opacity 1.2s ease, -webkit-transform 16s ease;
  // display: block;
`;
export default S;