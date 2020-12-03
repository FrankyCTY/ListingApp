import styled, {css} from "styled-components";

const btnStyles = css`
outline: 0;
border: 0;
cursor: pointer;
background: ${({outline, theme}) => outline ? theme.btn.readMoreBtn_text : theme.secondColor};
color: ${({outline, theme}) => outline ? theme.secondColor : theme.btn.readMoreBtn_text};

${({outline, theme}) => outline && `border: 1px solid ${theme.secondColor}`};
`;

const S = {};

S.TwoLinesBtn = styled.button`
  ${btnStyles}
  // box-shadow: 0px 5px 30px rgba(17, 17, 17, 0.3);
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

S.CheckOutBtn = styled.button`
${btnStyles}
width: 8rem;
display: block;
font-size: 0.6rem;
padding: .6em 0;
display: flex;
justify-content: center;
align-items: center;
`;

S.SimpleBtn = styled.button`
${btnStyles}
display: grid;
place-items: center;

i {
  font-size: .8em;
}

${({shape}) => {
  if(shape === "circle") {
    return `border-radius: 50%; `;
  }
}}

--size: 2em;
padding: 0;
width: var(--size);
height: var(--size);
`;

export default S;