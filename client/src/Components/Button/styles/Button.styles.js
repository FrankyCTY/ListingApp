import styled, {css} from "styled-components";

const btnStyles = css`
outline: 0;
border: 0;
cursor: pointer;
`;

const S = {};

S.ReadMoreBtn = styled.button`
  ${btnStyles}
  background: ${({theme}) => theme.btn.readMoreBtn_bg};
  color: ${({theme}) => theme.btn.readMoreBtn_text};
  box-shadow: 0px 5px 30px rgba(17, 17, 17, 0.3);
  padding: .6em 0;
  width: 95%;
  display: block;
  font-size: 0.6rem;
  ${({shape}) => {
    switch(shape) {
      case "rect":
        break;
      case "circle":
        return `
          --size: 7em;
          padding: 0;
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
        `;
      default:
        break;
    }
  }}

  @media screen and (min-width: 768px) {
    ${({shape}) => {
      if(shape === "rect") {
        return `
        width: 12rem;
        font-size: 0.7rem;
        `;
      }
    }}
  }
`;

export default S;