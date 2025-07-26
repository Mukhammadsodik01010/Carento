import styled from "styled-components";
import AddsFirstImage from "../assets/AddsCarusel/Tucson1.avif";
import Chevrolet from "../assets/AddsCarusel/Chevrole.jpg";
import Kia from "../assets/AddsCarusel/Kia.webp";

export const AddsMAin1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 100px;
  gap: 30px;
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 12px;
  background-image: url(${AddsFirstImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 100px;
`;

export const AddsMAin2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 100px;
  gap: 30px;
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 12px;
  background-image: url(${Chevrolet});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 100px;
`;

export const AddsMAin3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 100px;
  gap: 30px;
  width: 100%;
  height: 500px;
  border: none;
  border-radius: 12px;
  background-image: url(${Kia});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 100px;
`;

export const AddsCaruselP = styled.p`
  color: var(--Brand-Brand-2, #70f46d);

  /* Text/Font MD/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
`;

export const AddsCaruselh1 = styled.h1`
  color: var(--Neutral-0, #fff);
  width: 470px;
  /* Heading 3/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 58px; /* 131.818% */
`;

export const AddsCaruselh6 = styled.h6`
  color: var(--Neutral-0, #fff);
  width: 470px;
  /* Text/Font LG/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
`;

export const AddsCAruselBtn = styled.button`
  display: flex;
  padding: 12px 22px;
  width: 200px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  background: var(--Button-button-bg-1, #70f46d);
  border: none;
  color: var(--Button-button-text-1, #101010);

  /* Text/Font MD/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
`;

export const AddsRightArrowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -81px;
  right: 100px;
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

export const AddsLeftArrowDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 520px;
  right: 150px;
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

