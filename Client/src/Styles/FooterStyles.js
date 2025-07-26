import { styled } from "styled-components";

export const FooterBg = styled.div`
  background-color: #171b18;
  padding: 60px 0 40px 0;
`;
export const Footer = styled.div`
  height: 800px;
`;
export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const TagP = styled.p`
  color: #fff;
  width: 540px;
  font-family: "Urbanist", sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 36px;
`;

export const EmailWrapper = styled.div`
  display: flex;
  width: 360px;
  padding: 19px 24px;
  justify-content: start;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  border: 1px solid var(--Neutral-500, #737373);
`;

export const EmailInput = styled.input`
  width: 100%;
  background-color: #171b18;
  border: none;
  outline: none;
  color: #737373;

  &::placeholder {
    color: #737373;
    font-family: "Urbanist", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
  }
`;

export const FooterButton = styled.button`
  display: flex;
  padding: 19px 34px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 12px;
  background: var(--Brand-Brand-2, #70f46d);
  color: #000;
  font-family: Urbanist;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  &:hover {
    cursor: pointer;
    background: var(--Button-button-bg-1, rgb(92, 196, 90));
  }
`;

export const Line = styled.hr`
  border: 2px solid var(--Neutral-500, #737373);
  margin-top: 100px;
  margin-bottom: ${(props) => (props.$LineMB ? "80px" : "40px")};
`;

export const FooterRight = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.3;
`;

export const FooterFlex = styled.div`
  display: flex;
  gap: 10px;
  align-items: ${(props) => (props.$AlignStart ? "flex-start" : "center")};
  margin-top: ${(props) => (props.$info ? "40px" : "20px")};
`;

export const InfoP = styled.p`
  width: 245px;
  color: ${(props) =>
    props.$Green || props.$Logo || props.$childs ? "white" : "#8e8e8e"};
  font-family: "Urbanist", sans-serif;
  font-size: ${(props) => (props.$Logo ? "41px" : "16px")};
  font-style: normal;
  font-weight: ${(props) => (props.$Logo ? "800" : "500")};
  line-height: 26px;
`;

export const NumberP = styled.p`
  color: #70f46d;
  margin-top: 20px;
  font-family: Urbanist;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`;
export const FooterComponents = styled.div`
  flex: 5;
  display: flex;
  justify-content: space-evenly;
`;
export const ChildsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-top: 20px;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FooterBottomP = styled.p`
  color: var(--Neutral-0, #fff);
  font-family: "Urbanist", sans-serif;
  font-size: 14px;
  font-size: ${(props) => (props.$Follow ? "18px" : "14px")};
  font-style: normal;
  font-weight: ${(props) => (props.$Follow ? "700" : "400")};
  line-height: 22px;
  letter-spacing: 0.3px;
`;
