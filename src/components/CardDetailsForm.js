import styled from "styled-components";

export const ConfirmBtn = styled.input.attrs({
  type: "submit",
  value: "Confirm",
})``;

export const DateInput = styled.input.attrs({ type: "date" })``;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const TextInput = styled.input.attrs({ type: "text" })``;

export const Label = styled.label``;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
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
            <DateInput id="exp-date-input" />
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
