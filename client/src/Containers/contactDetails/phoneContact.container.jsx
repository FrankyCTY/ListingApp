import React from "react";
import {Icon} from "../../Components";
import styled from "styled-components";

const S = {};

S.PhoneContactContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  
`;

S.Text = styled.p`margin-bottom: .5rem;`;

export default function PhoneContactContainer() {
  return <S.PhoneContactContainer className="emailContact-container py-6 md:w-3/12">
    <Icon.RoundedIcon iconClass="iconfont iconphonenew" className="mb-2"/>
    <S.Text className="text-sm">お電話でのお問い合わせ</S.Text>
    <S.Text className="text-2xl">096-287-3000</S.Text>
    <p className="text-sm">受付時間 9:00〜17:00</p>
  </S.PhoneContactContainer>
}
