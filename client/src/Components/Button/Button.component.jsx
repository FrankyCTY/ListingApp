import React from "react";
import S from "./styles/Button.styles";

export default function Button({children}) {
  return <>
        {children}
      </>
}

Button.TwoLinesBtn = function TwoLinesBtn({firstLineText="詳しく見る", secondLineText="read more", outline=false, shape="rect", children, ...restProps}) {
  return <S.TwoLinesBtn outline={outline} shape={shape} {...restProps}>
    <p>{firstLineText}</p>
    <span>{secondLineText}</span>
    {children}
    </S.TwoLinesBtn>
}

Button.CheckOutBtn = function CheckOutBtn({iconClass, children, ...restProps}) {
  return <S.CheckOutBtn {...restProps}>
    <i className={`iconfont iconbasket mr-2 ${iconClass}`} />
    <div>
      <p>加入購物車</p>
      <span>Add To Cart</span>
    </div>
    {children}
    </S.CheckOutBtn>
}

Button.SimpleBtn = function SimpleBtn({shape="circle", iconClass, children, ...restProps}) {
  return <S.SimpleBtn shape={shape} {...restProps}>
    <i className={`${iconClass}`} />
    {children}
    </S.SimpleBtn>
}