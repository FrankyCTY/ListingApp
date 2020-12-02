import React from "react";
import S from "./styles/Image.styles";

export default function Image({children}) {
  return <>{children}</>
}

Image.ImgWithIntro = function ImgWithIntro({
  imgSrc, alt, introText, children, ...restProps
}) {

  return <S.ImgWithIntro {...restProps}>
    <img src={imgSrc} alt={alt}></img>
    <S.IntroText>{introText}</S.IntroText>
    {children}
    </S.ImgWithIntro>
}