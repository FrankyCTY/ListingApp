import React from "react";
import S from "./styles/Carousel.styles";

export default function Carousel({children, ...restProps}) {
  return <S.Frame {...restProps}>
        {children}
      </S.Frame>
}


// Image
Carousel.ImageContainer = function ImageContainer({imgId=1, children, ...restProps}) {
  return <S.ImageContainer {...restProps}>
    {children}
  </S.ImageContainer>
}

Carousel.Image = function CarouselImage({src, alt, ...restProps}) {
  return <S.ImageWrapper className="image-wrapper" {...restProps}>
      <S.CarouselImage src={src} alt={alt}/>
    </S.ImageWrapper>
}