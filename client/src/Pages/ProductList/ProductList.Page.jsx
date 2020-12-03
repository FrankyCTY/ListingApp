import React from "react";
import {Decoration, Card, Button} from "../../Components";
import GridContainer from "../../Containers/grid/grid.container";

export default function ProductListPage({}) {
  
  return <div className="ProductList_Page">

    <div className="ProductListPage_TopPart mb-16 lg:transform lg:-translate-y-16 2xl:-translate-y-32">
      <Decoration.RouteTextBlock className="pl-5% mb-16" routeText="豬肉 > 豬肉 >" nameText="豬肉雞軟骨餃子" />

      <Decoration.PageIntroTextBlock topText="commercial products" title="業務用商品" intro="品質の良い原料を選び、食感を追求した加工方法。
      幅広い方に愛される豆菓子づくりをめざしています。"/>
    </div>

    <div className="relative">
      <Decoration.ThickRectangle className="absolute" style={{top: "4rem"}} />
      
      <GridContainer>
      {new Array(12).fill(1).map((card, idx) => <Card.ProductCard key={idx} cardImg="https://images.unsplash.com/photo-1605452052713-e76a575c96a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=80&w=600" alt="test Img"/>)}
      </GridContainer>
    </div>

    <Button.ReadMoreBtn className="mx-auto my-16 md:w-128"/>
  </div>
}