import styled from "styled-components";

export const BrowseFlexDiv = styled.div`
display: flex;
width: 100%;
align-items: center;
justify-content: space-between;
margin-top: 77px;
`

export const BrowseButton = styled.button`
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

export const BrowseH1 = styled.h1`
  color: var(--Neutral-1000, #101010);

  /* Heading 3/Bold */
  font-family: Urbanist;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 58px; /* 131.818% */
`;

export const BrowseP = styled.p`
  color: var(--Neutral-500, #737373);

  /* Text/Font LG/Medium */
  font-family: Urbanist;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
`;

export const BrowseChildsWrapper = styled.div`
  display: grid;
  grid-template-areas: "a a a a a a";
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin-top: 30px;
`;

export const BrowseChild = styled.div`
width: 200  px;
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 50px;
`

export const BrowseChildsImg = styled.img`
  height: 91px;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Neutral-100, #f2f4f6);
`;

export const Vehicles = styled.p`
  display: inline-flex;
  padding: 4px 11px;
  justify-content: center;
  align-items: center;
  border-radius: 18px;
  border: 0.6px solid var(--Border-Border-1, #dde1de);
  background: var(--Neutral-0, #fff);
  margin-top: -12px;

  color: var(--Neutral-500, #737373);
  text-align: center;

  /* Text/Font XS/Bold */
  font-family: Urbanist;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px; /* 150% */
`;

export const VehicleTypes = styled.h3`
margin-top: 5px;
  color: var(--Neutral-1000, #101010);
  text-align: center;

  /* Text/Font LG/Bold */
  font-family: Urbanist;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px; /* 155.556% */
`;