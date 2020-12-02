import React from "react";
import {Header, Carousel} from "../../Components";

export default function HeaderContainer() {
  return <Header>
      <Carousel>
        <Carousel.ImageContainer imgId={1}>
          <Carousel.Image src={SlideImg01} alt="SlideImg01" />
        </Carousel.ImageContainer>
        <Carousel.ImageContainer imgId={2}>
          <Carousel.Image src={SlideImg02} alt="SlideImg02" />
        </Carousel.ImageContainer>
        <Carousel.ImageContainer imgId={3}>
          <Carousel.Image src={SlideImg03} alt="SlideImg03" />
        </Carousel.ImageContainer>
        <Carousel.ImageContainer imgId={4}>
          <Carousel.Image src={SlideImg04} alt="SlideImg04" />
        </Carousel.ImageContainer>
      </Carousel>
  </Header>
}