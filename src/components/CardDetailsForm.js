import { useState } from "react";
import styled from "styled-components";
import { mixinInput, mixinBtn } from "../mixins.js";

export const ConfirmBtn = styled.input.attrs({
  type: "submit",
  value: "Confirm",
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

export const ErrorMsg = styled.p`
  ${(props) => (props.showErrors ? "display: block" : "display: none")};
  color: var(--Red);
  font-size: 0.8rem;
  margin: 0;
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
  width: 25rem;
  background-color: var(--White);
  border-radius: 0.75rem;
  padding: 2rem;

  @media (max-width: 1050px) {
    transform: translateY(-4.5rem);
  }
`;

export const DetailsForm = styled.form``;

const CardDetailsInput = ({
  className,
  label,
  id,
  value,
  placeholder,
  maxLength,
  onChange,
  errorMsg,
  showErrors,
}) => {
  return (
    <LabelContainer className={className}>
      <Label htmlFor={id}>{label}</Label>
      <TextInput
        id={id}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        errorMsg={errorMsg}
        showErrors={showErrors}
      />
      <ErrorMsg showErrors={showErrors}>{errorMsg}</ErrorMsg>
    </LabelContainer>
  );
};

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
  submitForm,
}) => {
  const [showErrors, setShowErrors] = useState(false);

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

  const validateName = (name) => {
    if (name.trim() === "") return "Cannot be blank";
    else return "";
  };

  const validateNumber = (number) => {
    if (number.trim() === "") return "Cannot be blank";
    else if (number.length !== 19) return "Incomplete number";
    else if (parseInt(number.replace(/\s/g, "")).toString().length !== 16)
      return "Invalid Number";
    else return "";
  };

  const validateDate = (month, year) => {
    if (month.trim() === "" || year.trim() === "") return "Cannot be blank";
    else if (month.length !== 2 || year.length !== 2) return "Incomplete date";
    else if (
      (parseInt(month).toString().length !== 2 && month[0] !== "0") ||
      (parseInt(year).toString().length !== 2 && year[0] !== "0") ||
      parseInt(month) === 0 ||
      parseInt(month) > 12
    )
      return "Invalid date";
    else return "";
  };

  const validateCvc = (cvc) => {
    if (cvc.trim() === "") return "Cannot be blank";
    else if (cvc.length !== 3) return "Incomplete CVC";
    else if (parseInt(cvc).toString().length !== 3) return "Invalid CVC";
    else return "";
  };

  return (
    <DetailsForm
      className={className}
      onSubmit={(e) => {
        e.preventDefault();

        if (
          validateName(name) === "" &&
          validateNumber(number) === "" &&
          validateDate(month, year) === "" &&
          validateCvc(cvc) === ""
        )
          submitForm();
        else setShowErrors(true);
      }}
    >
      <FormContainer>
        <CardDetailsInput
          label="CARDHOLDER NAME"
          id="name-input"
          value={name}
          placeholder="e.g. Jane Appleseed"
          maxLength={30}
          onChange={(e) => setName(e.target.value)}
          errorMsg={validateName(name)}
          showErrors={showErrors}
        />
        <CardDetailsInput
          label="CARD NUMBER"
          id="number-input"
          value={number}
          placeholder="e.g. 1234 5678 9123 0000"
          maxLength={19}
          onChange={inputNumber}
          errorMsg={validateNumber(number)}
          showErrors={showErrors}
        />
        <Container>
          <LabelContainer>
            <Label>EXP. DATE (MM/YY)</Label>
            <DateContainer>
              <TextInput
                value={month}
                placeholder="MM"
                maxLength={2}
                onChange={(e) => setMonth(e.target.value)}
                errorMsg={validateDate(month, year)}
                showErrors={showErrors}
              />
              <TextInput
                value={year}
                placeholder="YY"
                maxLength={2}
                onChange={(e) => setYear(e.target.value)}
                errorMsg={validateDate(month, year)}
                showErrors={showErrors}
              />
            </DateContainer>
            <ErrorMsg showErrors={showErrors}>
              {validateDate(month, year)}
            </ErrorMsg>
          </LabelContainer>
          <CardDetailsInput
            label="CVC"
            id="cvc-input"
            value={cvc}
            placeholder="e.g. 123"
            maxLength={3}
            onChange={(e) => setCvc(e.target.value)}
            errorMsg={validateCvc(cvc)}
            showErrors={showErrors}
          />
        </Container>
        <ConfirmBtn />
      </FormContainer>
    </DetailsForm>
  );
};

export default CardDetailsForm;
