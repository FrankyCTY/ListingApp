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

S.Section3PlaceHolder = styled.div`
  height: 35rem; 
  @media screen and (min-width: 768px) {
    height: 44rem;
  }
`;

S.Section4PlaceHolder = styled.div`
  // height: 15rem;
  // border: 1px solid pink;
  // @media screen and (min-width: 768px) {
  //   height: 20rem;
  // }
`;

S.BigImgContainer = styled.div`
  display: flex;
  width: 45rem;
  margin-bottom: 2rem;
  transform: translateX(20%);
  
  @media screen and (min-width: 768px) {
    position: absolute;
    right: 0;
    width: 65rem;
    transform: translateX(58%);
  }
  @media screen and (min-width: 1280px) {
    width: 65rem;
    transform: translateX(40%);
  }
`;

export default S;