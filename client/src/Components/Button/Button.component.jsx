import React from "react";
import S from "./styles/Button.styles";

export default function Button({children}) {
  return <>
        {children}
      </>
}

Button.ReadMoreBtn = function ReadMoreBtn({shape="rect", children, ...restProps}) {
  return <S.ReadMoreBtn shape={shape} {...restProps}><p>詳しく見る</p><span>read more</span>{children}</S.ReadMoreBtn>
}

Button.CheckOutBtn = function ReadMoreBtn({iconClass, children, ...restProps}) {
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