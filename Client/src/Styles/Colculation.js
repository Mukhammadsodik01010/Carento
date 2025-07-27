import styled from "styled-components";



export const ColBgDiv = styled.div`
  height: 800px;
  width: 100%;
  /* opacity: 0.6; */
  background:rgb(104, 106, 104);
`;

export const ColMain = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 100px 0;
`

export const ColLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 621px;
  height: 600px;
  padding: 50px;
  border-radius: 12px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Background-card-bg, #fff);
`;

export const ColLefth1 = styled.h1`
  color: var(--Neutral-1000, #101010);

  /* Heading 5/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px; /* 128.571% */
`;
export const ColLeftP = styled.p`
  color: var(--Neutral-500, #737373);

  /* Text/Font SM/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;


export const ColRight = styled.div`
  display: flex;
  flex-direction: column;
  width: 621px;
  height: 600px;
  gap: 20px;
`;


export const ColRightH1 = styled.h1`
  color: var(--Neutral-0, #fff);
  width: 456px;
  /* Heading 3/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 44px;
  font-style: normal;
  font-weight: 700;
  line-height: 58px; /* 131.818% */
  margin-top: 100px;
`;

export const ColRightP = styled.p`
  color: var(--Neutral-0, #fff);
  width: 445px;
  /* Text/Font LG/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 155.556% */
  margin-top: 10px;
`;




export const LeftInputswrapper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;
gap: 20px;
`
export const ColInputs = styled.input`
  display: flex;
  width: 250px;
  height: 56px;
  padding: 18px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Neutral-200, rgb(186, 188, 190));
  margin-top: 8px;
  color: var(--Neutral-400, #8e8e8e);
  outline: none;

  /* Text/Font SM/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;

export const LabelsP = styled.p`
  color: var(--Neutral-1000, #101010);
  margin-top: 15px;
  /* Text/Font SM/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;

export const ColResultWrapper = styled.div`
display: flex;
margin-top: 30px;
gap: 100px;
`
export const ColResultName = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
align-items: start;
`

export const ColResulth2 = styled.h2`
  color: var(--Neutral-1000, #101010);

  /* Text/Font SM/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;
export const CollResulth4 = styled.h4`
color: ${(props)=>props.$Blue ? "#5EDD5B" : "#101010"};
  /* Text/Font SM/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px; /* 157.143% */
`;

export const ColBtn = styled.button`
  display: flex;
  height: 56px;
  padding: 28px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 20px;
  align-self: stretch;
  border: none;
  border-radius: 8px;
  background: var(--Button-button-bg-1, #70f46d);

  color: var(--Button-button-text-1, #101010);

  /* Text/Font MD/Bold */
  font-family: Urbanist;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px; /* 162.5% */

  &:hover {
    cursor: pointer;
    background: var(--Button-button-bg-1, rgb(92, 196, 90));
  }
`;