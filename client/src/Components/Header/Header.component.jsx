import React, { useContext } from "react";
import S from "./styles/Header.styles";

export default function Header({children, ...restProps}) {
  return <S.Container {...restProps}>{children}</S.Container>
}
