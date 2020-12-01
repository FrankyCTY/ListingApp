import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    height: 100%;
    width: 100%;
    text-rendering: optimizeLegibility;
    font-feature-settings: "palt";
    color: #333;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    backface-visibility: hidden;
  }

  img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%; 
  }
`;

export default GlobalStyle;