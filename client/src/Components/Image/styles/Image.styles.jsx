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

export default S;