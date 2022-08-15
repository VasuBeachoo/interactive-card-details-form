import { createGlobalStyle } from "styled-components";
import bgMainDesktop from "./assets/bg-main-desktop.png";
import bgMainMobile from "./assets/bg-main-mobile.png";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --White: hsl(0, 0%, 100%);
    --Light-grayish-violet: hsl(270, 3%, 87%);
    --Dark-grayish-violet: hsl(279, 6%, 55%);
    --Very-dark-violet: hsl(278, 68%, 11%);
    --Red: rgb(255, 0, 0);

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

    @media (max-width: 1050px) {
      background: url(${bgMainMobile}) no-repeat;
      background-size: 110vw;
    }
  }
`;

export default GlobalStyle;
