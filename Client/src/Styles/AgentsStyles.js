import styled from "styled-components";


export const AgentsP = styled.p`
  color: var(--Neutral-500, #737373);
  text-align: center;
margin-top: 100px;
  /* Text/Font XL/Medium */
  font-family: Urbanist;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 32px; /* 160% */
`;

export const AgentsH1 = styled.h1`
  color: var(--Neutral-1000, #101010);
  text-align: center;

  /* Heading 3/Bold */
  font-family: Urbanist;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 58px; /* 131.818% */
`;

export const AgentsWrapper = styled.div`
display: grid;
grid-template-areas: "a a a a";
gap: 30px;
justify-content: space-between;
margin-top: 50px;
margin-bottom: 100px;
`
export const AgentsChildTop = styled.div`
  width: 292px;
  height: 292px;
  border-radius: 12px;
  background: #c4c4c4;
`;

export const AgentsChildTopImg = styled.img`
  width: 292px;
  height: 292px;
  border-radius: 12px;
`;

export const AgentsChildBottom = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 292px;
  padding: 20px;
  margin-top: -30px;
  justify-content: center;
  align-items: start;
  border-radius: 12px;
  background-color: #fff;
  border: 1px solid var(--Border-Border-1, #dde1de);
z-index: 10;
`;

export const AgentsBottomImahes = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
`
export const AgentsProfilesDiv = styled.div`
display: flex;
align-items: center;
gap: 10px;
`

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6.877px;
  align-items: flex-start;
  gap: 6.877px;
  border-radius: 68.772px;
  background: var(--Neutral-100, #f2f4f6);
  &:hover {
    cursor: pointer;
    background: var(--Button-button-bg-1, #70f46d);
  }
`;

export const AgentName = styled.h1`
  color: var(--Neutral-1000, #101010);

  /* Heading 6/Bold */
  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`;

export const AgentPosition = styled.p`
  color: var(--Neutral-500, #737373);

  /* Text/Font SM/Medium */
  font-family: Urbanist;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;
