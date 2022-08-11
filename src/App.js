import styled from "styled-components";
import CardFront from "./components/CardFront";
import CardBack from "./components/CardBack";
import CardDetailsForm from "./components/CardDetailsForm";

export const CardsContainer = styled.div``;

export const AppContainer = styled.div``;

const App = () => {
  return (
    <AppContainer>
      <CardsContainer>
        <CardFront />
        <CardBack />
      </CardsContainer>
      <CardDetailsForm />
    </AppContainer>
  );
};

export default App;
