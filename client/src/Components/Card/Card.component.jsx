import React from "react";
import {Button} from "..";
import S from "./styles/Card.styles";

export default function Card({children}) {
  return <>{children}</>
}


Card.ProductCard = function ProductCard({cardImg, alt, ...restProps}) {
  return <S.ProductCardContainer {...restProps}>
    <img src={cardImg} alt={alt} />
    <S.ProductCardFooter className="ProductCardFooter py-2 grid place-items-center">
      <p className="text-xs xs:text-base md:text-xs lg:text-base 2xl:text-lg">豬肉雞軟骨餃子</p>
      <p className="text-xs xs:text-base md:text-xs lg:text-base 2xl:text-lg">豬肉雞軟骨餃子</p>
    </S.ProductCardFooter>
    <S.ProductCardDecoDiv className="productCard_decoDiv grid place-items-center">
      <Button.ReadMoreBtn shape="circle" className="text-xs xs:text-base md:text-xs xl:text-lg"/>
    </S.ProductCardDecoDiv>
  </S.ProductCardContainer>
}