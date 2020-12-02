import React from "react";
import {Icon} from "../../Components";
import styled from "styled-components";

const S = {};

S.EmailContactContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media screen and (min-width: 768px) {
    &::after {
      content: '';
      position: absolute;
      right: 0;
      height: 6rem;
      width: 1px;
      background: gray;
    }
  }
`;

S.Text = styled.p`margin-bottom: .5rem;`;

export default function EmailContactContainer() {
  return <S.EmailContactContainer className="emailContact-container py-6 hi">
    <Icon.RoundedIcon iconClass="iconfont iconemail" iconSize="1.2rem" className="mb-2"/>
    <S.Text className="text-sm md:text-xs font-bold">メールでのお問い合わせ</S.Text>
    <p className="text-xl md:text-lg">info@sennarido.co.jp</p>
  </S.EmailContactContainer>
}
