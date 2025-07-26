import styled from "styled-components";

export const Mosth1 = styled.h1`
  color: var(--Neutral-1000, #101010);
  margin-top: 80px;
  /* Heading 3/Bold */
  font-family: "Urbanist" sans-serif;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 58px; /* 131.818% */
`;

export const LeaddingCarsDiv = styled.div`
display: flex;
justify-content: space-between;

`
export const MostDetailsWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 10px;
`

export const MOstP = styled.p`
  color: var(--Neutral-500, #737373);

  /* Text/Font LG/Medium */
  font-family: "Urbanist" sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
`;

export const MostPButtons = styled.div`
display: flex;
align-items: center;
gap: 20px;
`
export const MostPButon = styled.button`
  display: flex;
  padding: 9px 16px;
  align-items: center;
  gap: 10px;
  border-radius: 50px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Button-button-bg-2, #f2f4f6);
`;

export const MostChildsWrapper = styled.div`
display: grid;
grid-template-areas: "a a";
justify-content: space-between;
gap: 30px;
margin-top: 30px;
`
 
export const CHildImgWrapper = styled.div`
  width: 300px;
  height: 250px;
  border-radius: 12px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  z-index: 10;
`;

export const MostChild = styled.div`
display: flex;
  width: 612px;
  height: 250px;
  flex-shrink: 0;
`;

export const MostChildImg = styled.img`
  width: 300px;
  height: 250px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid var(--Border-Border-1, #dde1de);
`;

export const ImageRightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  width: 350px;
  border-radius: 12px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Background-card-bg, #fff);
  z-index: 20;
  margin-left: -20px;
`;

export const FlexGap10 = styled.div`
display: flex;
align-items: center;
gap: 10px;
`


export const CarDetailsP = styled.p`
  color: var(--Neutral-1000, #101010);

  /* Text/Font SM/Medium */
  font-family: "Urbanist" sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;

export const CarDetailsSpan = styled.span`
  color: var(--Neutral-500, #737373);

  /* Text/Font SM/Medium */
  font-family: "Urbanist" sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;

export const ChildCarName = styled.h2`
  color: var(--Neutral-1000, #101010);

  /* Heading 6/Bold */
  font-family: "Urbanist" sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;

export const MostChildHr = styled.hr`
height: 1px;
  background: var(--Border-Border-1, #dde1de);
  margin-top: 20px;
`;

export const BookButton = styled.button`
  display: flex;
  padding: 8px 18px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Button-button-bg-2, #f2f4f6);

  &:hover {
    cursor: pointer;
    background: var(--Button-button-bg-1, #70f46d);
  }
`;

export const ReloadButtonWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const ReloadButton = styled.button`
  display: flex;
  padding: 16px 32px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 12px;
  border: 1px solid var(--Brand-Brand-2-darken, #5edd5b);
  background: var(--Button-button-bg-1, #70f46d);
  color: var(--Button-button-text-1, #101010);

  /* Text/Font MD/Bold */
  font-family: "Urbanist" sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */

  &:hover {
    cursor: pointer;
    background: var(--Button-button-bg-1, rgb(92, 196, 90));
  }
`;