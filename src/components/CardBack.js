import styled from "styled-components";
import bgCardBack from "../assets/bg-card-back.png";

export const Cvc = styled.p``;

export const CardBackContainer = styled.div`
  width: 27.938rem;
  height: 15.313rem;
  background: url(${bgCardBack});
`;

const CardBack = ({ className }) => {
  return (
    <CardBackContainer className={className}>
      <Cvc>000</Cvc>
    </CardBackContainer>
  );
};

export default CardBack;
