import styled from "styled-components";
import { mixinBtn } from "../mixins";
import iconComplete from "../assets/icon-complete.svg";

export const CompletedBtn = styled.button`
  all: unset;
  box-sizing: border-box;
  ${mixinBtn}
`;

export const CompletedParagraph = styled.p`
  color: var(--Dark-grayish-violet);
  font-size: 1rem;
  letter-spacing: 0.02rem;
  margin: 0 0 2.5rem 0;
`;

export const CompletedHeading = styled.p`
  color: var(--Very-dark-violet);
  font-size: 1.75rem;
  letter-spacing: 0.25rem;
  margin: 2rem 0 0.5rem 0;
`;

export const CompletedIcon = styled.img.attrs({
  src: iconComplete,
  alt: "check-mark-icon",
})``;

export const CompletedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  width: 22rem;
`;

const CompletedView = ({ className }) => {
  return (
    <CompletedContainer className={className}>
      <CompletedIcon />
      <CompletedHeading>THANK YOU!</CompletedHeading>
      <CompletedParagraph>We've added your card details</CompletedParagraph>
      <CompletedBtn>Continue</CompletedBtn>
    </CompletedContainer>
  );
};

export default CompletedView;
