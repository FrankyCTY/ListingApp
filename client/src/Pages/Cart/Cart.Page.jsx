import React from "react";
import {Nav, Card, Counter, Decoration} from "../../Components";
import GridContainer from "../../Containers/grid/grid.container";
import { useMediaQuery } from "react-responsive";
import AspectRatioImageContainer from "../../Containers/aspectRatioImage/aspectRatioImage.container";

export default function CartPage() {
  return <div className="CartPage-container py-4 md:py-8">

    <section className="CartPage-Top flex flex-col items-center mb-4 xs:mb-8 md:mb-12 xl:mb-16">
      <Nav.LogoContainer className="w-20 md:w-32 xl:w-48"/>
      <h1 className="text-xl md:text-2xl xl:text-3xl">購物籃</h1>
      <span className="text-sm md:text-lg xl:text-2xl">1 商品</span>
    </section>
    
    <CartItemSection/>

  </div>
}

const CartItemSection = () => {
  const isTabletView = useMediaQuery({ query: "(min-width: 768px)" });

  return isTabletView ?
  <div className="relative">
  <Decoration.ThickRectangle className="absolute" style={{top: "4rem"}} />
  <GridContainer>
  {new Array(12).fill(1).map((card, idx) => <Card.ProductCard hasCounter={true} key={idx} cardImg="https://images.unsplash.com/photo-1605452052713-e76a575c96a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=80&w=600" alt="test Img"/>)}
  </GridContainer>
  </div>

: new Array(12).fill(1).map((card, idx) => <div className="flex mb-2 xs:mb-4" key={idx}>
  <AspectRatioImageContainer className="img-container w-4/12 mr-4">
    <img src="https://images.unsplash.com/photo-1605452052713-e76a575c96a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=80&w=600" alt="img9"/>
  </AspectRatioImageContainer>

  <div className="w-8/12 flex flex-col justify-between px-4">
    <div>
      <div className="flex justify-between">
        <span className="text-sm xs:text-xl">豬肉雞軟骨餃子</span>
        <button className="text-xs xs:text-lg">刪除</button>
      </div>
      <p className="text-sm xs:text-xl">HKD 599</p>
    </div>
    <Counter.CardCounter btnShape="circle"/>
  </div>
</div>)
}

