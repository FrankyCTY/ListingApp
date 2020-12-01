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

export default function EmailContactContainer() {
  return <S.PhoneContactContainer className="emailContact-container border-4">
    <Icon.RoundedIcon iconClass="iconfont iconemail" iconSize="1.2rem" className="mb-2"/>
    <S.Text>メールでのお問い合わせ</S.Text>
    <p>info@sennarido.co.jp</p>
  </S.PhoneContactContainer>
}
