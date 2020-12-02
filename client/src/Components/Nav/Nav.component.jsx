import React, { useContext } from "react";
import S from "./styles/Nav.styles";
import LogoSmallSvg from "../../assets/svg/logo/logo2.svg";
import {Link} from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";
import { useMediaQuery } from "react-responsive";

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
  const isTabletView = useMediaQuery({ query: "(min-width: 768px)" });

  const renderMobileView = () => {
    return <>
      <Nav.SearchBar/>
      <Nav.NavTogglerContainer/>
    </>
  }
  const renderTabletView = () => {
    return <div className="flex">
      <Nav.SearchBar className="mr-2 md:mr-6"/>
      <Nav.NavMenuIconsContainer className="static mr-5%"/>
    </div>
  }

  return <S.TopContainer isNavMenuOpened={isTogglerActive} {...restProps}>
      <Nav.LogoContainer/>
      {isTabletView ? renderTabletView() : renderMobileView()}
    {children}
    </S.TopContainer>
}

Nav.SearchBar = function SearchBar({children, ...restProps}) {
  return <S.SearchBar {...restProps}>
    <S.SearchInput type="text" placeholder="輸入關鍵字 例如: 品牌/種類"></S.SearchInput>
    <S.SearchIcon className="iconfont iconsearch-copy" />
  </S.SearchBar>
}

Nav.LogoContainer = function LogoContainer({children, ...restProps}) {
  return <>
    <Link to="/">
      <S.LogoSmall src={LogoSmallSvg} {...restProps}></S.LogoSmall>
    </Link>
    {children}
    </>
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

Nav.NavMenuIconsContainer = function NavMenuIconsContainer({children, ...restProps}) {
  return <S.NavMenuIconsContainer {...restProps}>
  <S.NavMenuIconBtn className="iconfont iconuser" iconSize="1rem"/>
  <S.NavMenuIconBtn className="iconfont iconcart" iconSize="1.2rem"/>
</S.NavMenuIconsContainer>
}

Nav.NavLinkContainer = function NavLinkContainer({children, ...restProps}) {
  const {isTogglerActive} = useContext(NavToggleContext);
  return <>
  {isTogglerActive ? <S.NavLinkContainer {...restProps}>
    <Nav.NavLinkItem mainText="こだわり" subText="commitment"/>
    <Nav.NavLinkItem mainText="商品紹介" subText="products"/>
    <Nav.NavLinkItem mainText="会社案内" subText="corporate information"/>
    <Nav.NavLinkItem mainText="個人情報保護方針"/>

    <Nav.NavMenuIconsContainer/>

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