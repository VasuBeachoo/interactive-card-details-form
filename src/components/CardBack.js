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

const CardBack = ({ className, cvc }) => {
  const displayCvc = (cvc) => {
    let cvcString = cvc;
    for (let i = cvc.length; i < 3; i++) {
      cvcString += "0";
    }
    return cvcString;
  };

  return (
    <CardBackContainer className={className}>
      <Cvc>{displayCvc(cvc)}</Cvc>
    </CardBackContainer>
  );
};

export default CardBack;
