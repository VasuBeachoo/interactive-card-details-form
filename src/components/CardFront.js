import styled from "styled-components";
import bgCardFront from "../assets/bg-card-front.png";
import cardLogo from "../assets/card-logo.svg";

export const CardExpiry = styled.p``;

export const CardHolder = styled.p``;

export const BottomContainer = styled.div``;

export const CardNumber = styled.p``;

export const CardLogo = styled.img``;

export const CardFrontContainer = styled.div`
  width: 27.938rem;
  height: 15.313rem;
  background: url(${bgCardFront});
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
