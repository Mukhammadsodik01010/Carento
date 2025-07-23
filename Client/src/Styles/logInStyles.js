import styled from "styled-components";

export const LogInDiv = styled.div`
  width: 470px;
  padding: 50px 0;
  border-radius: 8px;
  border: 1px solid var(--Border-Border-1, #dde1de);
  background: var(--Background-Body, #fff);
  margin: 50px auto 100px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const LogInP = styled.p`
  display: flex;
  padding: 6px 22px;
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

export const LogInh1 = styled.h1`
  color: var(--Neutral-1000, #101010);
  text-align: center;

  /* Heading 4/Bold */
  font-family: "Urbanist", sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px; /* 133.333% */
`;

export const InputDiv = styled.div`
  display: flex;
  width: 395px;
  height: 56px;
  padding: 18px 16px;
  gap: 20px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Neutral-200, #e4e6e8);
  background: var(--Neutral-100, #f2f4f6);
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  background-color: inherit;

  &::placeholder {
    color: var(--Neutral-400, #8e8e8e);

    /* Text/Font SM/Medium */
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px; /* 157.143% */
  }
`;

export const CheckboxDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 5px;
`;
export const ForgetPass = styled.div`
  width: 395px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CheckboxP = styled.p`
  color: var(--Neutral-500, #737373);

  /* Text/Font XS/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: ${(props) => (props.$OtherAccounts ? "16px" : "12px")};
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
`;

export const ButtonLogin = styled.button`
  display: flex;
  width: 394px;
  height: 56px;
  padding: 19px 35px 19px 43px;
  justify-content: center;
  align-items: center;
  gap: 10px;
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

export const ImagesDiv = styled.div`
  width: 395px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const GoogleAccaunt = styled.div`
  display: flex;
  padding: 15px 50px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  border: 1px solid var(--Neutral-200, #e4e6e8);
  background: var(--Neutral-100, #f2f4f6);
`;

export const FacebookAccount = styled.div`
  display: flex;
  padding: 13px 12px 15px 15px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--Neutral-200, #e4e6e8);
  background: var(--Neutral-100, #f2f4f6);
`;

export const MessageDiv = styled.div`
  height: 30px;
  width: 395px;
`;

export const RegisterHere = styled.p`
  color: var(--Neutral-500, #737373);
  text-align: center;

  /* Text/Font SM/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;
export const SpanP = styled.span`
  color: var(--Neutral-1000, #101010);
 text-align: center;
  /* Text/Font SM/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;

  &:hover{
    color:rgb(73, 126, 232);
    cursor: pointer;
  }
`;

export const MessageP = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: red;

  /* Text/Font SM/Medium */
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px; /* 157.143% */
`;
