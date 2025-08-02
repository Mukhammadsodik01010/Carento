import styled from "styled-components";
import BrendsBgImage from "../assets/BrendsAssets/AllBrendsImage.jpg";

export const AllBrendsMain = styled.div`
margin-top: 30px !important;
  margin: 0 auto;
  width: 1600px;
  height: 500px;
  background-image: url(${BrendsBgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 15px;
`;

export const AllBrendsDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  height: 500px;
`;

export const AllBrendsH1 = styled.h1`
  color: var(--System-white, #fff);

  /* Heading 2/Bold */
  font-family: Urbanist;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 76px; /* 146.154% */
`;
export const AllBrendsP = styled.p`
  color: var(--System-white, #fff);

  /* Text/Font XL/Medium */
  font-family: Urbanist;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 160% */
`;
export const AllBrendsWrapper = styled.div`
margin-top: 100px;
  display: grid;
  grid-template-areas: "a a a";
  gap: 40px;
  justify-content: space-between;
`;
export const AllBrendsChild = styled.div`
  display: flex;
  width: 400px;
  height: 193px;
  gap: 30px;
  padding: 30px;
  border-radius: 12px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Background-card-bg, #fff);

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  }
`;
export const AllBrendsChildRight = styled.div`
display: flex;
flex-direction: column;
gap: 15px;

`

export const AllBrendsImage = styled.img`
height: 64px;
`
export const AllBrendsChildName = styled.h2`
  color: var(--Neutral-1000, #101010);

  /* Heading 6/Bold */
  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;
export const AllBrendsChildDes = styled.h6`
  color: var(--Neutral-1000, #101010);

  /* Text/Font MD/Medium */
  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
`;

export const AllBrendsNum = styled.p`
  padding: 4px 11px;
  border-radius: 18px;
  border: 0.6px solid var(--Border-Border-1, #dde1de);
  background: var(--Button-button-bg-2, #f2f4f6);
width: 100px;
  color: var(--Neutral-1000, #101010);
 text-align: center;
  /* Text/Font XS/Bold */
  font-family: Urbanist;
  font-size: 12px;
  font-weight: 700;
  line-height: 18px; /* 150% */
`;

export const AllBrendGroups = styled.div`
margin-top: 50px;
display: flex;
align-items: center;
gap: 20px;
`

export const AllBrendsGroupSmallDivs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 4px;
  background: var(--Button-button-bg-2, #f2f4f6);
  &:hover {
    cursor: pointer;
    background: var(--Button-button-bg-1, rgb(92, 196, 90));
  }
`;

export const AllBrendsGroupsArrow = styled.img`
  width: 16px;
  height: 16px;
`;

export const AllBrendsHrLine = styled.hr`
margin-top: 50px;
height: 1px;
  border-top: 1px solid var(--Border-Border-1, #dde1de);
`;