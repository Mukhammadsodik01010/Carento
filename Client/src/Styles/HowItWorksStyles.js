import styled from "styled-components";


export const HowMainDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 30px;
padding-top: 50px;
margin-bottom: 50px;
`

export const HowP = styled.p`
  color: var(--Neutral-500, #737373);
  text-align: center;

  /* Text/Font XL/Medium */
  font-family: Urbanist;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 160% */
`;

export const HowH3 = styled.h3`
  width: 672px;
  height: 115px;
  flex-shrink: 0;
  color: var(--Neutral-1000, #101010);
  text-align: center;

  /* Heading 3/Bold */
  font-family: Urbanist;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 58px; /* 131.818% */
`;

export const HowBottom = styled.div`
display: grid;
grid-template-areas: "a a a a";
width: 100%;
gap: 30px;
justify-content: space-between;
`
export const HowBottomChild = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
`

export const HowBottomH2 = styled.h2`
  color: var(--Neutral-1000, #101010);
  text-align: center;

  /* Heading 6/Bold */
  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;

export const HowBottomP = styled.p`
  width: 224px;
  color: var(--Neutral-500, #737373);
  text-align: center;

  /* Text/Font MD/Medium */
  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
`;