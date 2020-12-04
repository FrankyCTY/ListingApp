import styled from "styled-components";

const S = {};

S.ImgWithIntro = styled.div`
text-align: center;
display: inline-block;
  img {
    --size: 7rem;
    width: var(--size);
    height: var(--size);
    border-radius: 100%;
  }
`;

S.IntroText = styled.span`
color: gray;
font-size: 0.8rem;
`;

S.Con = styled.div`
background: red;
`;

S.PlaceHolder = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background red;

  // z-index: 2;
`;

export default S;