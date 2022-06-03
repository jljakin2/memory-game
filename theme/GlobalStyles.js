import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root{

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
      font-family: "Roboto", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      position: relative;
      color: white;
    }
`;

export default GlobalStyles;
