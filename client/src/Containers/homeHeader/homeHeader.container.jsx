import React from "react";
import {Carousel, Decoration, Button} from "../../Components";
import SlideImg01 from "../../assets/images/slide/slide_img_1.jpg";
import SlideImg02 from "../../assets/images/slide/slide_img_2.jpg";
import SlideImg03 from "../../assets/images/slide/slide_img_3.jpg";
import SlideImg04 from "../../assets/images/slide/slide_img_4.jpg";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const S ={};
S.HeaderReadMoreBtnContainer = styled.div`
  position: absolute;
  right: 1rem;
  bottom: 3rem;

  @media screen and (min-width: 768px) {
    right: 50%;
    bottom: 50%;
    transform: translateX(50%);
  }
`;

S.HighlightedLinksContainer = styled.div`
  position: absolute;
  top: 4rem;
  right: 5%;
  display: flex;
`;

export default function HomeHeaderContainer() {

  const isTabletView = useMediaQuery({ query: "(min-width: 768px)" });

  return <div className="relative">
      <div className="overflow-hidden">
      {/* <Carousel.ImageContainer imgId={1}>
          <Carousel.Image src={SlideImg01} alt="SlideImg01" />
        </Carousel.ImageContainer>
        <Carousel.ImageContainer imgId={2}>
          <Carousel.Image src={SlideImg02} alt="SlideImg02" />
        </Carousel.ImageContainer>
        <Carousel.ImageContainer imgId={3}>
          <Carousel.Image src={SlideImg03} alt="SlideImg03" />
        </Carousel.ImageContainer> */}
      <Carousel.ImageContainer imgId={4}>
        <Carousel.Image src={SlideImg04} alt="SlideImg04" />
      </Carousel.ImageContainer>
      <Decoration.WavyDivider bottomWaveColor={"white"}>
        <S.HeaderReadMoreBtnContainer>
          <Button.ReadMoreBtn shape="circle" className="text-xxs md:text-xs lg:text-sm 2xl:text-base"/>
        </S.HeaderReadMoreBtnContainer>
      </Decoration.WavyDivider>

      </div>
      
      {isTabletView && <S.HighlightedLinksContainer>
        {new Array(4).fill(1).map((x, idx) => {
          return <div key={idx} className="block w-8 bg-white p-2 mx-2"><span>豬肉雞軟骨餃子</span></div>
        })}
      </S.HighlightedLinksContainer>}
  </div>
}