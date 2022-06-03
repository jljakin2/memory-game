import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{
      --primary: #FDA214;

      --secondary400: #304859;
      --secondary300: #6395B8;
      --secondary200: #7191A5;
      --secondary100: #BCCED9;

      --text: #152938;

      --white: #FCFCFC;
      --grey: #F2F2F2;
    }

    html {
      box-sizing: border-box;
      font-size: 100%; // 16px
    }

    *, *::before, *::after {
      box-sizing: inherit;
      
      margin: 0;
      padding: 0;
    }

    body {
      font-family: "Atkinson Hyperlegible", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      position: relative;
      color: white;
    }
`;

export default GlobalStyles;
