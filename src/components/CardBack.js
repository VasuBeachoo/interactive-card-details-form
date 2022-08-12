import styled from "styled-components";
import { mixinCard, mixinCardText } from "../mixins";
import bgCardBack from "../assets/bg-card-back.png";

export const Cvc = styled.p`
  ${mixinCardText}
  font-size: 0.9rem;
  letter-spacing: 0.125rem;
  transform: translate(22.375rem, 7rem);
`;

export const CardBackContainer = styled.div`
  ${mixinCard}
  align-self: flex-end;
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
