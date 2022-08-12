import styled from "styled-components";
import { mixinCard, mixinCardText } from "../mixins";
import bgCardFront from "../assets/bg-card-front.png";
import cardLogo from "../assets/card-logo.svg";

export const CardExpiry = styled.p`
  ${mixinCardText}
  font-size: 0.95rem;
  letter-spacing: 0.1rem;
`;

export const CardHolder = styled.p`
  ${mixinCardText}
  font-size: 0.95rem;
  letter-spacing: 0.1rem;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardNumber = styled.p`
  ${mixinCardText}
  font-size: 1.55rem;
  letter-spacing: 0.175rem;
`;

export const CardLogo = styled.img`
  margin-bottom: auto;
`;

export const CardFrontContainer = styled.div`
  ${mixinCard}
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: flex-start;
  gap: 1.3rem;
  background: url(${bgCardFront});
  padding: 2rem;
`;

const CardFront = ({ className }) => {
  return (
    <CardFrontContainer className={className}>
      <CardLogo src={cardLogo} alt="card-logo" />
      <CardNumber>0000 0000 0000 0000</CardNumber>
      <BottomContainer>
        <CardHolder>Jane Appleseed</CardHolder>
        <CardExpiry>00/00</CardExpiry>
      </BottomContainer>
    </CardFrontContainer>
  );
};

export default CardFront;
