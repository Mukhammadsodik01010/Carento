import styled from "styled-components";
import BrendsBgImage from "../assets/BrendsAssets/AllBrendsImage.jpg";

export const AllCarsMain = styled.div`
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

export const AllCarsBgInside = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 30px;
height: 500px;
width: 100%;
`
export const AllCarsh4 = styled.h4`
  display: flex;
  padding: 12px 22px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--Background-bg2, #d8f4db);

  color: var(--Button-button-text-2, #000);

  /* Text/Font SM/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;

export const AllCarsh1 = styled.h1`
  color: var(--Neutral-0, #fff);
  text-align: center;

  /* Heading 2/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 52px;
  font-style: normal;
  font-weight: 700;
  line-height: 76px; /* 146.154% */
`;

export const AllCarsP = styled.p`
  color: var(--Neutral-0, #fff);
  text-align: center;

  /* Text/Font LG/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
`;

export const AllCarsChildsContainer = styled.div`
margin-top: 50px;
 display: flex;
 gap: 30px;
 margin-bottom: 50px;
`
export const AllCarsLedt = styled.div`
flex: 1.5;
/* border: 1px solid red; */
`
export const AllCarsRight = styled.div`
  flex: 4;
  /* border: 1px solid red; */
`;

export const AllCarsChildsWrapper = styled.div`
display: grid;
grid-template-areas: "a a a";
justify-content: space-between;
gap: 20px;
`


export const Acardionh1 = styled.h1`
  color: var(--Neutral-1000, #101010);

  /* Text/Font LG/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
`;
export const MapImg = styled.img`
width: 100%;
height: 200px;
`
export const SeeMoreDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 5px;
`;
export const SeeMore = styled.h6`
  display: flex;
  align-items: center;
  gap: 5px;

  color: var(--Neutral-1000, #101010);

  /* Text/Font XS/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
`;

export const AcardionNumber = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: ${(props)=>props.$TOP ? "15px 0px" :"0" };
`

export const AcardionNumberh4 = styled.h4`
  display: flex;
  padding: 3px 6px ;
  justify-content: center;
  align-items: center;
  border-radius: 7px;
  background: var(--Border-Border-1, #dde1de);

  color: var(--Neutral-1000, #101010);
  text-align: center;

  /* Text/Font XS/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
`;

export const AcardionRating = styled.div`
display: flex;
align-items: center;
gap: 10px;
`
export const AllCarsHrLine = styled.hr`
margin: 20px 0;
margin: ${(props)=>props.$Margin ? "50px 0" : "20px 0"};
  height: 1px;
  background: var(--Border-Border-1, #dde1de);
`;

export const ToursNumber = styled.h5`
  color: var(--Neutral-500, #737373);

  /* Text/Font SM/Bold */
  font-family: Urbanist;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;

export const ShowSort = styled.p`
  color: var(--Neutral-500, #737373);

  /* Text/Font XS/Medium */
  font-family: Urbanist;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
`;

export const ShowSortSpan = styled.span`
  color: var(--Neutral-1000, #101010);

  /* Text/Font XS/Medium */
  font-family: Urbanist;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const ChildsSortingTop = styled.div`
  display: flex;
  padding: 10px 15px;
  gap: 10px;
  border-radius: 4px;
  border: 1px solid var(--Border-Border-1, #dde1de);
`;