import styled from "styled-components";
import Road from '../assets/Rental/RoadImg.jpg'

export const RentalBgzdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 800px;
  /* bg image beriladi */
  background-image: url(${Road});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const ReantalTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const RenatSystemH4 = styled.h4`
  text-align: center;
  width: 200px;
  padding: 12px 22px;
  gap: 10px;
  border-radius: 12px;
  background: var(--Neutral-0, #fff);
  color: var(--Button-button-text-2, #000);

  /* Text/Font SM/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;

export const RenatlSystemh1 = styled.h1`
  color: var(--Neutral-1000, #101010);
  text-align: center;
  width: 473px;
  /* Heading 4/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 133.333% */
`;
export const RentalBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  margin-top: 100px;
`;

export const RentalBottomLedt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: start;
  width: 400px;
  padding: 40px;
  border-radius: 12px;
  background: var(--Neutral-0, #fff);

`;

export const RChildImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  background-color: #d8f4db;
  border: none;
  border-radius: 50%;
`;

export const RCHildH1 = styled.h1`
  color: var(--Neutral-1000, #101010);

  /* Heading 6/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;

export const RCHildP = styled.p`
  color: var(--Neutral-1000, #101010);

  /* Text/Font MD/Regular */
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;

export const RChildButton = styled.button`
  display: flex;
  padding: 12px 22px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border: none;
  border-radius: 12px;
  background: var(--Button-button-bg-1, #70f46d);

  color: var(--Button-button-text-1, #101010);

  /* Text/Font MD/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
`;
