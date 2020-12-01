import styled from "styled-components";

const S = {};

S.RoundedIcon = styled.div`
  --size: 3rem;
  height: var(--size);
  width: var(--size);
  border-radius: 50%;
  border: 1px solid #e4e4e4;
  background: white;
  display: grid;
  place-items: center;
  i {
    font-size: ${({iconSize}) => `${iconSize}`};
  }
`;

export default S;