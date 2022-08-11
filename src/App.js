import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import CardDetailsForm from "./components/CardDetailsForm";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <CardsContainer>
        <CardFront />
        <CardBack />
      </CardsContainer>
      <CardDetailsForm />
    </AppContainer>
  );
};

export default App;
