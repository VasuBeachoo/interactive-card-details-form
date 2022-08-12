import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import CardDetailsForm from "./components/CardDetailsForm";
import CompletedView from "./components/CompletedView";

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1.5rem;
  width: 34rem;
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 6rem;
`;

const App = () => {
  return (
    <AppContainer>
      <GlobalStyle />
      <CardsContainer>
        <CardFront />
        <CardBack />
      </CardsContainer>
      <CompletedView />
    </AppContainer>
  );
};

export default App;
