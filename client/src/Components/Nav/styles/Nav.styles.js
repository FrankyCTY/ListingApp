import styled from "styled-components";
import NavBgImg from "../../../../src/assets/images/sitemap_bg.jpg";

const S = {};

S.Frame = styled.div`width: 100%; position: fixed; z-index: 10000;`;

S.TopContainer = styled.div`
  width: 100%;
  background: ${({isNavMenuOpened}) => {
    return isNavMenuOpened ? "white" : 0;
  }};
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  position: relative;

  height: ${({isNavMenuOpened}) => {
    if(isNavMenuOpened) {
      return "285px";
    } else {
      return "4rem";
    }
  }};
`;

S.LogoContainer = styled.div`
  margin-top: 1rem;
  padding-left: 5%;
`;

S.NavBg  = styled.div`
  height: calc(100vh - 285px);
  width: 100vw;
  background: url(${NavBgImg});
  background-size: cover;
`;

S.NavTogglerContainer = styled.div`
  width: 4rem;
  height: 4rem;
  background: white;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    background: #f0f0f0; 
  }

  &.active {
    background: #222;
  }
`;

S.NavTogglerLine = styled.div`
height: 45%;
width: 1px;
background: #111;
position: relative;

&.active {
  background: white;
  visibility: hidden;
  &::before {
    transform: translateX(-.5rem) rotate(-45deg);
    visibility: visible;
  }

  &::after {
    transform: translateX(.5rem) rotate(45deg);  
    visibility: visible;
  }
}

&::before,
&::after {
  content: "";
  position: absolute;
  height: 100%;
  width: 100%;
  background: inherit;
  transition: all .2s ease;
}

&::before {
  left: 8px;
}

&::after {
  right: 8px;
}
`;


S.LogoSmall = styled.img`
width: 7.2rem;
height: 2.2rem;
`;

S.NavLinkContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 18%;
  height: 150px;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
  z-index: 20000;
`;
S.NavLinkItem = styled.div`
width: ${({subText}) => {
  return subText === "" ? `1.1rem` : `2.6rem`;
}};
overflow: hidden;
position: relative;
cursor: pointer;
&:hover {
  filter: brightness(2);
}


`;
S.NavText = styled.span`
display: block;
font-size: 1.4rem;
line-height: 1.5rem;
animation: shiftRight 400ms ease;

@keyframes shiftRight {
  from {
    transform: translate(-4rem);
  },
  to {
    transform: translate(0rem);
  }
}

${({subText}) => {
  if(!subText) {
    return `font-size: 0.8rem;
    line-height: 1rem;
    position: relative;
    opacity: 0.5;
    &:after {
      content: '';
      position: absolute;
      top: 3px;
      right: -3px;
      width: 1px;
      height: 100%;
      background: black;
    }
    `;
  }
}}

&::after {
  content: "${({subText}) => {
    return subText ? `${subText}` : "";
  }}";
  height: 100%;
  top: 0;  
  position: absolute;
  writing-mode: vertical-rl;
  font-size: .6rem;
  right: 0;
}
`;

export default S;