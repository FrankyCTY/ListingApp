import styled from "styled-components";
const S = {};

S.ThreeImagesContainer = styled.div`
  width: 100%;
  display: flex;
  transform: translateY(-50%);
  justify-content: space-between;
  padding: 0 5%;

  @media screen and (min-width: 768px) {
    justify-content: start;
  }
`;

S.PicOneContainer = styled.div`
  background: #e2e8f0;
  @media screen and (min-width: 768px) {
    width: 95%;
    img {
      transform: translate(-38%, 80%);
    }
  }
`;

S.BigImgContainer = styled.div`
  display: flex;
  transform: translate(46%, 0);
`;

export default S;