import { styled } from "styled-components";

export const FeatureListingWTop = styled.div`
display: flex;
align-items: end;
justify-content: space-between;
margin-top: 150px;
`
export const FeatureListing = styled.h1`
  color: var(--Neutral-1000, #101010);

  /* Heading 3/Bold */
  font-family: Urbanist;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 58px; /* 131.818% */
`;

export const FeatureListingP = styled.p`
  color: var(--Neutral-500, #737373);

  /* Text/Font LG/Medium */
  font-family: Urbanist;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
`;

export const FeatureListingBtn = styled.button`
  display: flex;
  padding: 12px 22px 12px 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 12px;
  background: var(--Button-button-bg-1, #70f46d);
  &:hover {
    cursor: pointer;
    background: var(--Button-button-bg-1, rgb(92, 196, 90));
  }
`;

export const FeatureListingBottom = styled.div`
display: grid;
grid-template-areas: "a a a a";
gap: 30px;
margin-top: 30px;
justify-content: space-between;
`

export const FeatureChildTop = styled.div`
  width: 294px;
  height: 244px;
  flex-shrink: 0;
  border-radius: 12px 12px 0 0; 
`;

export const FeatureCarImage = styled.img`
  width: 294px;
  height: 220px;
  flex-shrink: 0;
  border-radius: 12px 12px 0 0;
`;

export const FeatureChildBottom = styled.div`
display: flex;
flex-direction: column;
gap: 20px;
  width: 294px;
  height: 300px;
  flex-shrink: 0;
  padding: 28px 21px;
  border-radius: 12px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Neutral-100, #fff);   
  margin-top: -50px;
  z-index: 10;
position: relative;
`;

export const InsideChildh1 = styled.h1`
  color: var(--Neutral-1000, #101010);

  /* Text/Font LG/Bold */
  font-family: Urbanist;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
`;

export const ChildFlexDiv = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

export const ChildFlexWithGap = styled.div`
display: flex;
flex-direction: column;
align-items: start;
gap: 10px;
`

export const ChildFlexDivJc = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const InsideChildP = styled.p`
  color: var(--Neutral-500, #737373);

  /* Text/Font SM/Medium */
  font-family: Urbanist;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;

export const ChildCost = styled.h3`
  color: var(--Neutral-1000, #101010);

  /* Heading 6/Bold */
  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;

export const ChildCostSpan = styled.span`
  color: var(--Neutral-500, #737373);

  /* Text/Font MD/Medium */
  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
`;

export const FeatureBookingBtn = styled.button`
  display: flex;
  padding: 8px 18px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Button-button-bg-2, #f2f4f6);

  color: var(--Button-button-text-2, #000);

  /* Text/Font SM/Bold */
  font-family: Urbanist;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */

  &:hover {
    cursor: pointer;
    background: var(--Button-button-bg-1, #70f46d);
  }
`;

export const FeatureHrLine = styled.hr`
margin-top: 15px;
height: 1px;
background: var(--Border-Border-1, #dde1de);
`;

export const FeatureStarDiv = styled.div`
  border-radius: 33px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Background-Body, #fff);
  /* Shadow 1 */
  box-shadow: 0px 2px 7px 0px rgba(0, 0, 0, 0.07);
  padding: 5px 14px;
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  right: 20px;
  bottom: 285px;
`;