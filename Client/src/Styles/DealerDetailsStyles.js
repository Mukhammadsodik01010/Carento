import styled from "styled-components";

export const DealerMain = styled.div`
  display: flex;
  gap: 20px;
  margin: ${(props) => (props.$Images ? "20px 0" : "100px 0")};
`;
export const DealerLeft = styled.div`
flex: 5;
`
export const DealerRight = styled.div`
  flex: 2;
`;

export const DealerImg = styled.img`
  width: 73px;
  height: 54px;
  flex-shrink: 0;
`;
export const DealerImageName = styled.div`
display: flex;
gap: 30px;
justify-content: start;
`
export const DealerName = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
`
export const DealerNameh1 = styled.h1`
  color: var(--Neutral-1000, #101010);

  /* Heading 6/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;

export const DealerNameh3 = styled.h3`
  color: var(--Neutral-1000, #101010);

  /* Text/Font MD/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
`;
export const DealerNameP = styled.p`
  display: flex;
  padding: 5px 10px;
  width: 100px;

  justify-content: center;
  align-items: center;
  border-radius: 18px;
  border: 0.6px solid var(--Border-Border-1, #dde1de);
  background: var(--Button-button-bg-2, #f2f4f6);

  color: var(--Neutral-1000, #101010);
  text-align: center;

  /* Text/Font XS/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 150% */
`;
export const Dealerhrline = styled.hr`
margin: 30px 0;
  height: 1px;
  border-bottom: 1px solid var(--Border-Border-1, #dde1de);
`;
export const AboutDealer = styled.p`
  color: var(--Neutral-800, #454545);

  /* Text/Font SM/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  margin-top: 40px;
`;
export const LeftSideImg = styled.img`
width: 600px;
height: 400px;
`

export const RightSideImages = styled.img`
  width: 400px;
  height: 190px;
`;
export const DealerServices = styled.div`
display: flex;
justify-content: space-between;
gap: 20px;
`
export const DealerServicesChild = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const DealerServicesChildInside = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;