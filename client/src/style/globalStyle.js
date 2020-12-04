import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
    font-family: 'Noto Serif JP', serif;
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

  // * {
    //   background: #000 !important;
    //   color: #0f0 !important;
    //   outline: solid #f00 1px !important;
    // }
  

  img {
    object-fit: cover;
    object-position: center;
    height: 100%;
    width: 100%; 
  }
`;

export default GlobalStyle;