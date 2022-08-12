import styled from "styled-components";
import { mixinInput, mixinBtn } from "../mixins.js";

export const ConfirmBtn = styled.input.attrs({
  type: "submit",
})`
  ${mixinBtn}
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.75rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
`;

export const TextInput = styled.input.attrs({ type: "text" })`
  ${mixinInput}
  width: 100%;
`;

export const Label = styled.label`
  color: var(--Very-dark-violet);
  font-size: 1rem;
`;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  gap: 0.4rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1.5rem;
  width: 22rem;
`;

export const DetailsForm = styled.form``;

const CardDetailsForm = ({ className }) => {
  return (
    <DetailsForm className={className}>
      <FormContainer>
        <LabelContainer>
          <Label htmlFor="name-input">CARDHOLDER NAME</Label>
          <TextInput id="name-input" placeholder="e.g. Jane Appleseed" />
        </LabelContainer>
        <LabelContainer>
          <Label htmlFor="number-input">CARD NUMBER</Label>
          <TextInput id="number-input" placeholder="e.g. 1234 5678 9123 0000" />
        </LabelContainer>
        <Container>
          <LabelContainer>
            <Label htmlFor="exp-date-input">EXP. DATE (MM/YY)</Label>
            <DateContainer>
              <TextInput placeholder="MM" />
              <TextInput placeholder="YY" />
            </DateContainer>
          </LabelContainer>
          <LabelContainer>
            <Label htmlFor="cvc-input">CVC</Label>
            <TextInput id="cvc-input" placeholder="e.g. 123" />
          </LabelContainer>
        </Container>
        <ConfirmBtn />
      </FormContainer>
    </DetailsForm>
  );
};

export default CardDetailsForm;
