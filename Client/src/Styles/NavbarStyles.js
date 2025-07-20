import styled from "styled-components";

export const BgColor = styled.div`
  background: var(--Neutral-900, #313131);
  border: none;
  border-bottom: 3px solid rgba(255, 255, 255, 0.3);
`;
export const SideTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 42px;
  padding: 5px 0;
`;

export const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props) => (props.$nogap ? "0" : "10px")};
  gap: ${(props) => (props.$navMiddle ? "20px" : "10px")};
  padding: ${(props) => (props.$withpadding ? "0 10px" : "0")};
  border-left: ${(props) =>
    props.$borderLeft ? "1px solid rgba(255, 255, 255, 0.30)" : "none"};
`;
export const SidetopP = styled.p`
  display: flex;
  gap: 10px;
  font-family: "Urbanist", sans-serif;

  color: ${(props) =>
    props.$Logo
      ? "black"
      : props.$Components
      ? "#101010"
      : props.$Signin
      ? "#101010"
      : "#fff"};

  font-size: ${(props) =>
    props.$Logo ? "32px" : props.$Components ? "16px" : "14px"};

  font-weight: ${(props) =>
    props.$Logo ? "800" : props.$Signin ? "700" : "500"};

  line-height: 22px;
`;

export const Span = styled.span`
  color: #70f46d;
`;

export const SiteTopButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: ${(props) => (props.$navByuton ? "10px 15px" : "5px 10px")};
  border: none;
  border-radius: 8px;
  background: var(--Brand-Brand-2, #70f46d);
  color: var(--Brand-Brand-1, #101010);
  font-family: "Urbanist", sans-serif;
  font-size: ${(props) => (props.$navByuton ? "14px" : "12px")};
  font-style: normal;
  font-weight: ${(props) => (props.$navByuton ? "700" : "500")};
  line-height: 18px;
`;

// Navbar start

export const Navbar = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;
export const MenuDiv = styled.div`
  display: flex;
  width: 42px;
  height: 42px;
  padding: 13px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #70f46d;
`;
