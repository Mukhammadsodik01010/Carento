import styled from "styled-components";
import Porsche from "../assets/CaruselAssets/Porsche.jpg";
import Mers from "../assets/CaruselAssets/mers.jpg";
import Bmw from "../assets/CaruselAssets/bmw.webp";

export const MainDiv1 = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${Mers});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const MainDiv2 = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${Bmw});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const MainDiv3 = styled.div`
  width: 100%;
  height: 700px;
  background-image: url(${Porsche});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const InsideCaruselDiv = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  gap: 30px;
  margin: 0 auto;
`;

export const CaruselTextsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 80%;
  gap: 30px;
`;

export const FindCar = styled.p`
  color: var(--Brand-Brand-2, #70f46d);
  /* Text/Font MD/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
`;

export const LookingFor = styled.h1`
  width: 914px;
  color: var(--Neutral-0, #fff);
  /* Heading 1/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 76px; /* 118.75% */
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const MarkWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  border-radius: 100px;
  background: var(--Brand-Brand-2-darken, #5edd5b);
`;

export const HighQuality = styled.p`
  color: var(--Neutral-0, #fff);
  /* Text/Font SM/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;

export const CarsForYou = styled.p`
  width: 200px;
  display: inline-flex;
  padding: 12px 22px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--Brand-Brand-2, #70f46d);
  color: #000;
  /* Text/Font SM/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;

export const Browse = styled.p`
  color: var(--Neutral-0, #fff);
  /* Heading 6/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 133.333% */
`;

export const PopularSearch = styled.div`
  color: var(--System-white, #fff);
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
  margin-top: 30px;
`;  

export const CaruselCars = styled.div`
position: absolute;
top: -350px;
left: 10%;
z-index: 33;
  margin: 0 auto;
  width: 80%;
  height: 226px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Background-card-bg, #fff);
`;


export const DiscountApp = styled.p`
  position: absolute;
  top: -100px;
  left: 10%;
  z-index: 50;
  color: var(--Neutral-0, #fff);

  /* Text/Font LG/Medium */
  font-family: Urbanist;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
  width: 80%;
  margin-top: 15px;
`;

export const OrderingViaApp = styled.span`
  color: var(--Brand-Brand-2, #70f46d);

  /* Text/Font LG/Medium */
  font-family: Urbanist;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;

export const LeftArrowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 620px;
  right: 250px;
  z-index: 300;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--Neutral-200, #e4e6e8);
  &:hover {
    cursor: pointer;
    background: var(--Brand-Brand-2, #70f46d);
  }
`;

export const RightArrowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -81px;
  right: 190px;
  z-index: 300;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--Neutral-200, #e4e6e8);
  &:hover {
    cursor: pointer;
    background: var(--Brand-Brand-2, #70f46d);
  }
`;