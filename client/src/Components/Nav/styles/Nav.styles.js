import styled, {css} from "styled-components";
import NavBgImg from "../../../../src/assets/images/sitemap_bg.jpg";

const S = {};

S.Frame = styled.div`width: 100%; position: fixed; 
z-index: 10000;
top: 0;
left: 0;`;

S.TopContainer = styled.div`
  width: 100%;
  background: ${({isNavMenuOpened}) => {
    return isNavMenuOpened ? "white" : 0;
  }};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding-left: 5%;

  height: ${({isNavMenuOpened}) => {
    if(isNavMenuOpened) {
      return "3rem";
    } else {
      return "3rem";
    }
  }};
`;

// S.LogoContainer = styled.div``;

S.NavBg  = styled.div`
  height: calc(100vh - 285px);
  width: 100vw;
  background: url(${NavBgImg});
  background-size: cover;
`;

S.NavTogglerContainer = styled.div`
  --size: 3rem;
  width: var(--size);
  height: var(--size);
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
width: 3.5rem;
height: 1rem;
`;

S.SearchBar = styled.div`
  width: 55%;
  position: relative;
`;

S.SearchInput = styled.input`
  width: 100%;
  border: 1px solid gray;
  border-radius: 12px;
  font-size: .7rem;
  padding: .3rem 1.5rem .3rem .6rem;
`;

S.SearchIcon = styled.i`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: .4rem;
  font-size: .8rem;
`;

S.NavLinkContainer = styled.div`
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 2rem 10% 4rem;
  position: relative;
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

S.NavMenuIconsContainer = styled.div`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  width: 3.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

S.NavMenuIconBtn = styled.i`
  font-size: ${({iconSize}) => iconSize};
  cursor: pointer;
  &:hover {
    filter: brightness(1.5);
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