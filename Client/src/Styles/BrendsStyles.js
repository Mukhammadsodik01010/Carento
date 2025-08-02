import { styled } from "styled-components";

export const BrandsWrapper = styled.div`
margin-top: 100px;
padding: 80px 0 80px 0;
  background: var(--Neutral-100, #f2f4f6);
`;

export const BrandsBottom = styled.div`
margin-top: 50px;
`

export const BrandsChild = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding: 18px 20px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Neutral-0, #fff);
  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  }
`;

export const BrandsImage = styled.img`
height: 50px;
width: 100px;
`
export const Brandsh1 = styled.h1`
  color: #000;
  text-align: center;

  /* Text/Font MD/Bold */
  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */
`;
export const BrandsP = styled.p`
  color: var(--Neutral-500, #737373);
  text-align: center;

  /* Text/Font XS/Bold */
  font-family: Urbanist;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 150% */
`;