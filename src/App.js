import { useState } from "react";
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
  min-width: 34rem;

  @media (max-width: 1050px) {
    flex-direction: column-reverse;
    min-width: 70%;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  gap: 5rem;
  padding: 1rem;

  @media (max-width: 1050px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0;
    padding: 4rem 1rem 0;
  }
`;

const App = () => {
  const [completed, setCompleted] = useState(false);
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");

  const resetForm = () => {
    setName("");
    setNumber("");
    setMonth("");
    setYear("");
    setCvc("");
    setCompleted(false);
  };

  return (
    <AppContainer>
      <GlobalStyle />
      <CardsContainer>
        <CardFront name={name} number={number} month={month} year={year} />
        <CardBack cvc={cvc} />
      </CardsContainer>
      {completed ? (
        <CompletedView resetForm={resetForm} />
      ) : (
        <CardDetailsForm
          name={name}
          setName={setName}
          number={number}
          setNumber={setNumber}
          month={month}
          setMonth={setMonth}
          year={year}
          setYear={setYear}
          cvc={cvc}
          setCvc={setCvc}
          submitForm={() => setCompleted(true)}
        />
      )}
    </AppContainer>
  );
};

export default App;
