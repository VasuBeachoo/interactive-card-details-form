import { createGlobalStyle } from "styled-components";
import bgMainDesktop from "./assets/bg-main-desktop.png";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --White: hsl(0, 0%, 100%);
    --Light-grayish-violet: hsl(270, 3%, 87%);
    --Dark-grayish-violet: hsl(279, 6%, 55%);
    --Very-dark-violet: hsl(278, 68%, 11%);

    --Font-family: "Space Grotesk", sans-serif;
  }

  * {
    box-sizing: border-box;
    font-family: var(--Font-family);
  }

  body {
    background: url(${bgMainDesktop}) no-repeat;
    background-size: 37vw;
    margin: 0;
  }
`;

export default GlobalStyle;
