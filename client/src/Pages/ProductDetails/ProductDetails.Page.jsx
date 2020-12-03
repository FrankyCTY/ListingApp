import React from "react";
import {Decoration} from "../../Components";
import PaymentContainer from "../../Containers/payment/payment.container";
import styled from "styled-components";

const S = {};

S.ImgContainer = styled.div`
  position: relative;

  display: block;
  height: 0;
  padding-bottom: 120%;

  @media screen and (min-width: 850px) {
    padding-bottom: 80%;
  }

  @media screen and (min-width: 1280px) {
    padding-bottom: 60%;
  }
`;

S.Img = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;

S.Slider = styled.div`
  overflow: hidden;
  height: 450px;

  @media screen and (min-width: 768px) {
    height: 650px;
  }

  @media screen and (min-width: 1024px) {
    height: 850px;
  }
`;


export default function ProductDetailsPage({}) {
 
  return <div className="ProductDetails_Page">
    <div className="ProductListPage_TopPart mb-16 lg:transform lg:-translate-y-16 2xl:-translate-y-32">
      <Decoration.RouteTextBlock className="pl-5% mb-8" routeText="豬肉 > 豬肉 >" nameText="豬肉雞軟骨餃子" />
    </div>

    <section className="ProductDetails_Body flex">
      {/* Photo Sliders */}
      <S.Slider className="w-1/3 md:w-1/2">
        <S.ImgContainer>
          <S.Img src="https://images.unsplash.com/photo-1605452052713-e76a575c96a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=80&w=600" alt="101"/>
        </S.ImgContainer>
        <S.ImgContainer>
          <S.Img src="https://images.unsplash.com/photo-1606075277057-a81e88cfd782?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=80&w=600" alt="101"/>
        </S.ImgContainer>
        <S.ImgContainer>
          <S.Img src="https://images.unsplash.com/photo-1604490926871-6ba5f6143722?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=80&w=600" alt="101"/>
        </S.ImgContainer>
        <S.ImgContainer>
          <S.Img src="https://source.unsplash.com/random/600x800" alt="101"/>
        </S.ImgContainer>
        
      </S.Slider>

      {/* Checkout Part */}
      <PaymentContainer tailwindClass="w-2/3 md:w-1/2" />
    </section>
  </div>
 
}