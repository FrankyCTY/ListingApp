import styled, {css} from "styled-components";

const btnStyles = css`
outline: 0;
border: 0;
`;

const S = {};

S.ReadMoreBtn = styled.button`
  ${btnStyles}
  background: ${({theme}) => theme.btn.readMoreBtn_bg};
  color: ${({theme}) => theme.btn.readMoreBtn_text};
  box-shadow: 0px 5px 30px rgba(17, 17, 17, 0.3);
  padding: .6em 0;
  width: 95%;
  margin: 0 auto;
  display: block;
  font-size: .8rem;
  ${({shape}) => {
    switch(shape) {
      case "rect":
        break;
      case "circle":
        return `
          --size: 4rem;
          padding: 0;
          width: var(--size);
          height: var(--size);
          border-radius: 50%;
          font-size: .6rem;
        `;
      default:
        break;
    }
  }}
`;

export default S;