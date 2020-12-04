import React from "react";
import {Button, Counter} from "..";
import S from "./styles/Card.styles";

export default function Card({children}) {
  return <>{children}</>
}


Card.ProductCard = function ProductCard({hasCounter=false, children, ...restProps}) {

  const hasExtraComponent = hasCounter;

  return <S.ProductCardContainer {...restProps}>
    <div className="relative">
    {children}  {/* Image */}

    {/* Place Holder for hover effect */}
    <S.ProductCardDecoDiv className="productCard_decoDiv grid place-items-center">
      <Button.TwoLinesBtn shape="circle" className="text-xs xs:text-base md:text-xs xl:text-lg"/>
    </S.ProductCardDecoDiv>
    </div>
    <S.ProductCardFooter className="ProductCardFooter flex flex-col items-center" hasExtraComponent={hasExtraComponent}>
      <p className="text-xs xs:text-base md:text-xs lg:text-base 2xl:text-lg">豬肉雞軟骨餃子</p>
      <p className="text-xs xs:text-base md:text-xs lg:text-base 2xl:text-lg">豬肉雞軟骨餃子</p>

      { hasCounter && <Counter.CardCounter/>}
    </S.ProductCardFooter>
  </S.ProductCardContainer>
}