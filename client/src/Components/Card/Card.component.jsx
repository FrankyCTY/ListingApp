import React from "react";
import {Button, Counter} from "..";
import S from "./styles/Card.styles";

export default function Card({children}) {
  return <>{children}</>
}


Card.ProductCard = function ProductCard({hasCounter=false, cardImg, alt, ...restProps}) {

  const hasExtraComponent = hasCounter;

  return <S.ProductCardContainer {...restProps}>
    <img src={cardImg} alt={alt} />
    <S.ProductCardFooter className="ProductCardFooter flex flex-col items-center" hasExtraComponent={hasExtraComponent}>
      <p className="text-xs xs:text-base md:text-xs lg:text-base 2xl:text-lg">豬肉雞軟骨餃子</p>
      <p className="text-xs xs:text-base md:text-xs lg:text-base 2xl:text-lg">豬肉雞軟骨餃子</p>

      { hasCounter && <Counter.CardCounter/>}
    </S.ProductCardFooter>


    <S.ProductCardDecoDiv className="productCard_decoDiv grid place-items-center">
      <Button.ReadMoreBtn shape="circle" className="text-xs xs:text-base md:text-xs xl:text-lg"/>
    </S.ProductCardDecoDiv>
  </S.ProductCardContainer>
}