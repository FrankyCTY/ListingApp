import React, { useContext } from "react";
import S from "./styles/Nav.styles";
import LogoSmallSvg from "../../assets/svg/logo/logo2.svg";
import {Link} from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";

import {
  NavToggleContextProvider,
  NavToggleContext,
} from "../../context/NavToggle.context";



export default function Nav({children, ...restProps}) {
  return <NavToggleContextProvider>
    <S.Frame {...restProps}>
      {children}
    </S.Frame>
    </NavToggleContextProvider>
}

Nav.TopContainer = function TopContainer({children, ...restProps}) {
  const {isTogglerActive} = useContext(NavToggleContext);
  return <S.TopContainer isNavMenuOpened={isTogglerActive} {...restProps}>
      <Nav.LogoContainer/>
      <Nav.NavTogglerContainer/>
    {children}
    </S.TopContainer>
}

Nav.LogoContainer = function LogoContainer({children, ...restProps}) {
  return <S.LogoContainer {...restProps}>
    <Link to="/">
      <S.LogoSmall src={LogoSmallSvg}></S.LogoSmall>
    </Link>
    {children}
    </S.LogoContainer>
}

Nav.NavBg = function NavBg({children, ...restProps}) {
  const {isTogglerActive} = useContext(NavToggleContext);
  return <>{isTogglerActive ? <S.NavBg {...restProps} /> : <></>}</>
}



Nav.NavTogglerContainer = function NavTogglerContainer({children, ...restProps}) {

  const { isTogglerActive, setTogglerActive } = useContext(NavToggleContext);

  const onTogglerClick = () => {
    setTogglerActive(!isTogglerActive);
  }

  return <S.NavTogglerContainer onClick={onTogglerClick} className={`${isTogglerActive ? "active" : ""}`} {...restProps}>
    <S.NavTogglerLine className={`${isTogglerActive ? "active" : ""}`}/>
    {children}
  </S.NavTogglerContainer>
}

Nav.NavLinkContainer = function NavLinkContainer({children, restProps}) {
  const {isTogglerActive} = useContext(NavToggleContext);
  return <>
  {isTogglerActive ? <S.NavLinkContainer {...restProps}>
    <Nav.NavLinkItem mainText="こだわり" subText="commitment"/>
    <Nav.NavLinkItem mainText="商品紹介" subText="products"/>
    <Nav.NavLinkItem mainText="会社案内" subText="corporate information"/>
    <Nav.NavLinkItem mainText="個人情報保護方針"/>
    {children}
  </S.NavLinkContainer> : <></>}
  </>
}

Nav.NavLinkItem = function NavLinkItem({mainText, subText="", restProps}) {

  const router = useRouter();

  return <S.NavLinkItem onClick={() => router.push("/")} subText={subText} {...restProps}>
    <S.NavText subText={subText}>{mainText}</S.NavText>
  </S.NavLinkItem>
}