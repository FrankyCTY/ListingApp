import React, { useContext } from "react";
import S from "./styles/Header.styles";
import {Link} from "react-router-dom";
import useRouter from "../../hooks/useRouter.hooks";

export default function Header({children, ...restProps}) {
  return <S.Container {...restProps}>{children}</S.Container>
}
