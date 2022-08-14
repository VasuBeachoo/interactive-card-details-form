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

const CardDetailsForm = ({
  className,
  name,
  setName,
  number,
  setNumber,
  month,
  setMonth,
  year,
  setYear,
  cvc,
  setCvc,
}) => {
  const inputName = (e) => {
    setName(e.target.value);
  };

  const inputNumber = (e) => {
    const length = e.target.value.length;

    if (length % 5 === 0 && length !== 0)
      if (e.target.value.charAt(length - 1) !== " ")
        e.target.value =
          e.target.value.substring(0, length - 1) +
          " " +
          e.target.value.charAt(length - 1);
      else e.target.value = e.target.value.substring(0, length - 1);
    setNumber(e.target.value);
  };

  const inputMonth = (e) => {
    setMonth(e.target.value);
  };

  const inputYear = (e) => {
    setYear(e.target.value);
  };

  const inputCvc = (e) => {
    setCvc(e.target.value);
  };

  return (
    <DetailsForm className={className}>
      <FormContainer>
        <LabelContainer>
          <Label htmlFor="name-input">CARDHOLDER NAME</Label>
          <TextInput
            id="name-input"
            value={name}
            placeholder="e.g. Jane Appleseed"
            maxLength={30}
            onChange={inputName}
          />
        </LabelContainer>
        <LabelContainer>
          <Label htmlFor="number-input">CARD NUMBER</Label>
          <TextInput
            id="number-input"
            value={number}
            placeholder="e.g. 1234 5678 9123 0000"
            maxLength={19}
            onChange={inputNumber}
          />
        </LabelContainer>
        <Container>
          <LabelContainer>
            <Label>EXP. DATE (MM/YY)</Label>
            <DateContainer>
              <TextInput
                value={month}
                placeholder="MM"
                maxLength={2}
                onChange={inputMonth}
              />
              <TextInput
                value={year}
                placeholder="YY"
                maxLength={2}
                onChange={inputYear}
              />
            </DateContainer>
          </LabelContainer>
          <LabelContainer>
            <Label htmlFor="cvc-input">CVC</Label>
            <TextInput
              id="cvc-input"
              value={cvc}
              placeholder="e.g. 123"
              maxLength={3}
              onChange={inputCvc}
            />
          </LabelContainer>
        </Container>
        <ConfirmBtn />
      </FormContainer>
    </DetailsForm>
  );
};

export default CardDetailsForm;
