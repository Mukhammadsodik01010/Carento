import styled from "styled-components";

export const NoFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
margin:50px 0  100px 0;
 
`;

export const NoH1 = styled.h1`
  color: var(--Neutral-1000, #101010);
  text-align: center;

  /* Heading 1/Bold */
  font-family: Urbanist;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 76px; /* 118.75% */
`;

export const NoH3 = styled.h3`
  color: var(--Neutral-1000, #101010);
  text-align: center;

  /* Heading 5/Bold */
  font-family: Urbanist;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
`;

export const NoP = styled.p`
  width: 331px;
  height: 91px;
  color: var(--Neutral-500, #737373);
  text-align: center;

  /* Text/Font MD/Medium */
  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px; /* 162.5% */
`;

export const NoButton = styled.button`
  display: flex;
  /* width: 187px;   */
  height: 56px;
  padding: 19px 35px 19px 43px;
  border:none;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  background: var(--Button-button-bg-1, #70f46d);
`;

export const ImageWrapper = styled.img`
  display: flex;
  width: 486px;
  height: 242px;
  padding-right: 0.004px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  margin: 20px;
  margin-right: -20px;
`;