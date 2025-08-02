import styled from "styled-components";

export const DetailedPageNavigation = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 50px 0;
`;
export const NavigationNameH3 = styled.h3`
  color: var(--Neutral-700, #4d4d4d);

  /* Text/Font MD/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
`;
export const NavigationNameH1 = styled.h1`
  color: var(--Neutral-1000, #101010);

  /* Text/Font MD/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
`;

export const RankingWrapper = styled.div`
  display: flex;
  padding: 10px 16px;
  gap: 10px;
  border-radius: 33px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Background-Body, #fff);
  width: 180px;
`;

export const RankingP = styled.h4`
  color: var(--Neutral-1000, #101010);

  /* Text/Font MD/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
`;
export const RankingSpan = styled.span`
  color: var(--Neutral-500, #737373);

  /* Text/Font SM/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;

export const DetailsNameH1 = styled.h1`
  width: 817px;
  margin-top: 20px;
  color: var(--Neutral-1000, #101010);

  /* Heading 4/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 133.333% */
`;

export const CarDetailsFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => (props.$gap ? "30px" : "0")};
  margin-top: ${(props) => (props.$Margin ? "0" : props.$TwentyMargin ?"20px" : "40px")};
`;
export const CarDetailsFlexLeft = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) =>
    props.$Inside ? "20px" : props.$fivepx ? "5px " : "100px"};
`;

export const LocationName = styled.h5`
  color: var(--Neutral-1000, #101010);

  /* Text/Font MD/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
`;
export const FlletCode = styled.h6`
  color: var(--Neutral-1000, #101010);
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
  text-decoration-line: underline;
  cursor: pointer;
`;

export const ShareDiv = styled.div`
  display: flex;
  height: 55px;
  padding: 8px 20px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border-radius: 50px;
  border: 1px solid var(--Border-Border-1, #dde1de);

  color: var(--Button-button-text-2, #000);

  /* Text/Font SM/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */

  &:hover {
    cursor: pointer;
    background: var(--Button-button-bg-2, #f2f4f6);
  }
`;
export const ImagesMain = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`;
export const ImagesMainleft = styled.img`
  width: 50%;
  height: 100%;
  border: none;
  border-radius: 12px;
`;

export const ImagesRightInside = styled.div`
  display: flex;
  /* align-items: center; */
  gap: 28px;
  margin: ${(props) => (props.$bottom ? "50px 0" : "0")};
`;
export const ImageChilds = styled.img`
  width: 48%;
  height: 230px;
  border: none;
  border-radius: 12px;
`;
export const ImagesChilsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${(props) => (props.$Acardion ? "10px" : "20px")};
`;

export const VidePlayMainDiv = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  gap: 30px;
  top: 400px;
  left: 180px;
`;
export const VidePlayInside = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 50px;
  padding: 12px 22px;
  border-radius: 50px;
  background: #fff;
  &:hover {
    cursor: pointer;
    background: var(--Brand-Brand-2, #70f46d);
  }
`;

export const DetailsBottomLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  flex: 4;
`;
export const DetailsBottomRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex: 2;
`;

export const CarDetailsWrapper = styled.div`
  display: grid;
  grid-template-areas: "a a a a";
  padding: 30px 40px;
  gap: 10px;
  justify-content: center;
  border-radius: 8px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Background-card-bg, #fff);
`;
export const CarDetailsWrapperChild = styled.div`
  display: flex;
  width: 175px;
  padding: 12px 18px;
  align-items: center;
  gap: 9px;
  border-radius: 4px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Background-bg2, #d8f4db);
`;
export const CarDetailsWrapperChildP = styled.p`
  color: var(--Neutral-1000, #101010);

  /* Text/Font MD/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
`;

export const AcardioTitle = styled.h1`
  color: var(--Neutral-1000, #101010);

  /* Heading 6/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: ${(props) => (props.$Smallerpx ? "16px" : "24px")};
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;
export const AcardionOverview = styled.p`
  color: var(--Neutral-800, #454545);

  /* Text/Font SM/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  margin-top: ${(props) => (props.$down ? "20px" : "0")};
`;

export const QuestionAnswer = styled.div`
  width: 100%;
  padding: 14px 20px;
  align-items: flex-start;
  gap: 9px;
  border-radius: 8px;
  border: 1px solid var(--Border-Border-1, #dde1de);
`;
export const LoanAcardion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 42px 50px;
  border-radius: 8px;
  background: var(--Neutral-100, #f2f4f6);
`;
export const LoanInsideFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const LoanInoutsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
export const LoanAccInput = styled.input`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  color: black;
  font-size: 16px;
  height: 56px;
  padding: 20px;
  border: none;
  outline: none;
  border-radius: 8px;
  border: 1px solid var(--Neutral-200, #e4e6e8);
  background: var(--Background-card-bg, #fff);

  &::placeholder {
    color: #8e8e8e;
    font-size: 16px;
  }
`;

export const PaymentsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 100px;
  margin-top: 20px;
`;
export const LoanPayments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const LoanPaymentsh5 = styled.h5`
  color: var(--Neutral-1000, #101010);

  /* Text/Font SM/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;
export const LoanAcardionBtn = styled.button`
  display: flex;
  height: 56px;
  padding: 12px 22px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border: none;
  border-radius: 8px;
  background: ${(props) => (props.$lightGrenn ? "#D8F4DB" : "#70f46d")};
  margin-top: 30px;
  &:hover {
    cursor: pointer;
    background: var(--Button-button-bg-1, rgb(92, 196, 90));
  }
`;

export const Cardetailshr = styled.hr`
  margin: 40px 0px;
  height: 1px;
  background: var(--Border-Border-1, #dde1de);
`;

export const Textarea = styled.textarea`
  color: black;
  font-size: 16px;
  width: 100%;
  padding: 20px;
  border: none;
  outline: none;
  margin-top: 30px;
  border-radius: 4px;
  border: 1px solid var(--Neutral-200, #e4e6e8);
  background: var(--Background-card-bg, #fff);

  &::placeholder {
    color: #8e8e8e;
    font-size: 16px;
  }
`;
export const RentThisvehicleDiv = styled.div`
  width: 100%;
  align-items: flex-start;
  border-radius: 8px;
  border: 1px solid var(--Border-Border-1, #dde1de);
`;
export const RentThisvehicleDivInside = styled.div`
  width: 100%;
  padding: 14px 20px;
  align-items: flex-start;
`;

export const RentThisvehicle = styled.div`
  width: 100%;
  height: 66px;
  display: flex;
  align-items: center;
  padding: 17px 44px;
  border-radius: 8px 8px 0 0;
  border-bottom: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Neutral-100, #f2f4f6);
`;

export const EmptyDiv = styled.div`
height: 40px;
width: 50%;
  padding: 10px 20px;
  gap: 89px;
  border-radius: 4px;
  border: 1px solid var(--Border-Border-1, #dde1de);
`;

export const HelpDiv = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: center;
gap: 10px;
margin: 20px 0;
`