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
`;

S.Text = styled.p`margin-bottom: .5rem;`;

export default function EmailContactContainer() {
  return <S.EmailContactContainer className="emailContact-container border-4">
    <Icon.RoundedIcon iconClass="iconfont iconphonenew" className="mb-2"/>
    <S.Text>お電話でのお問い合わせ</S.Text>
    <S.Text>096-287-3000</S.Text>
    <p>受付時間 9:00〜17:00</p>
  </S.EmailContactContainer>
}
