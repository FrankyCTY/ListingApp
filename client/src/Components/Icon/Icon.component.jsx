import React from "react";
import S from "./styles/Icon.styles";

export default function Icon({children}) {
  return <>{children}</>
}

Icon.RoundedIcon = function RoundedIcon({
  iconSize="1.5rem", iconClass, ...restProps
}) {

  return <S.RoundedIcon iconSize={iconSize} {...restProps}>
    <i className={`${iconClass}`}></i>
    </S.RoundedIcon>
}