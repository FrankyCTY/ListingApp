import React from "react";
import S from "./styles/Button.styles";

export default function Button({children}) {
  return <>
        {children}
      </>
}

Button.ReadMoreBtn = function ReadMoreBtn({shape="rect", children, restProps}) {
  return <S.ReadMoreBtn shape={shape} {...restProps}><p>詳しく見る</p><span>read more</span>{children}</S.ReadMoreBtn>
}