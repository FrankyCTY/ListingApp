import React from "react";
import S from "./styles/Image.styles";
import LazyLoad from "react-lazyload";

export default function Image({children}) {
  return <>{children}</>
}

Image.ImgWithIntro = function ImgWithIntro({
  imgSrc, alt, introText, children, ...restProps
}) {

  return <S.ImgWithIntro {...restProps}>
    <Image.LazyLoadImg src={imgSrc} alt={alt} />
    <S.IntroText>{introText}</S.IntroText>
    {children}
    </S.ImgWithIntro>
}

Image.LazyLoadImg = function LazyLoadImg({
  src, alt, imgHeight=800, children, ...restProps
}) {


return <LazyLoad height={imgHeight}>
<img src={src} alt={alt} {...restProps} />
</LazyLoad>
}