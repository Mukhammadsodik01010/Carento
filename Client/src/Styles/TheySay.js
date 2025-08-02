import styled from "styled-components";

export const TheySayTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  gap: 20px;
`;
export const Theysaybottom = styled.div`
  margin-top: 50px;
  margin-bottom: 100px;
`;
export const MsgDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 50px;
  padding: 20px 30px;
  border-radius: 50px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Button-button-bg-2, #f2f4f6);

  color: var(--Button-button-text-2, #000);

  /* Text/Font SM/Bold */
  font-family: Urbanist;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;

export const TheySayH1 = styled.h1`
  color: var(--Neutral-1000, #101010);
  text-align: center;

  /* Heading 3/Bold */
  font-family: Urbanist;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 58px; /* 131.818% */
`;

export const TheySayMain = styled.div`
max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TheyChildWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 450px;
  /* height: 400px; */
  padding: 50px;
  border-radius: 12px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Background-Body, #fff);
`;


export const TheySaySlickH1 = styled.h1`
  color: var(--Neutral-1000, #101010);

  /* Text/Font XL/Bold */
  font-family: Urbanist;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 160% */
`;

export const TheySaySlickP = styled.p`
  color: var(--Neutral-1000, #101010);

  /* Text/Font MD/Regular */
  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;

export const TheysayFlex = styled.div`
display: flex;
align-items: end;
justify-content: space-between;
`

export const TheysayFlexImg = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const TheySayImg = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
`;

export const MsgName = styled.h2`
  color: var(--Neutral-1000, #101010);

  /* Text/Font LG/Bold */
  font-family: Urbanist;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
`;

export const MsgWrapper = styled.div`
display: flex;
flex-direction: column;
`

export const MsgLocation = styled.h4`
  color: var(--Neutral-1000, #101010);

  /* Text/Font MD/Regular */
  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 26px; /* 162.5% */
`;