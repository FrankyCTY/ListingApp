import React from "react";
import {Decoration, Card, Button} from "../../Components";
import styled from "styled-components";

const S = {};

S.ProductCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;
  padding: 0 5%;
  justify-content: space-between;

  @media screen and (min-width: 550px) {
    column-gap: 2rem;
    row-gap: 3rem;
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, minmax(120px, 1fr));
  }
  @media screen and (min-width: 1280px) {
    column-gap: 3rem;
  }
`;

export default function ProductListPage({}) {
  return <div className="ProductList_Page relative">
    <Decoration.ThickRectangle className="absolute" style={{top: "4rem"}} />
    
    <S.ProductCardsContainer>
    {new Array(12).fill(1).map((card, idx) => <Card.ProductCard key={idx} cardImg="https://images.unsplash.com/photo-1605452052713-e76a575c96a2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=80&w=600" alt="test Img"/>)}
    </S.ProductCardsContainer>

    <Button.ReadMoreBtn className="mx-auto my-16 md:w-128"/>
  </div>
}