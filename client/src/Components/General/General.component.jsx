import React from "react";
import S from "./styles/General.styles";

export default function General({children, ...restProps}) {
  return <S.Container {...restProps}></S.Container>
}