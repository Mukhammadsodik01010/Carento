import React from "react";
import {
  BgColor,
  FlexDiv,
  MenuDiv,
  Navbar,
  SideTop,
  SidetopP,
  SiteTopButton,
  Span,
} from "../../Styles/NavbarStyles";
import Globe from "../../assets/Navbar/Global.svg";
import ArrowDown from "../../assets/Navbar/DownArrow.svg";
import RightArrow from "../../assets/Navbar/arrow-right.svg";
import Car from "../../assets/Navbar/CarIcon.svg";
import Envelop from "../../assets/Envelop.svg";
import SunImage from "../../assets/Navbar/Sun.svg";
import Telephone from "../../assets/Navbar/TelephoneImg.svg";
import NavDownArrow from "../../assets/Navbar/navDownArrow.svg";
import MenuIcon from "../../assets/Navbar/menuIcon.svg";
import UserIcon from "../../assets/Navbar/userIcon.svg";
import Logo from "../../assets/favicon.svg";

const NavbarComponent = () => {
  return (
    <>
      <BgColor>
        <div className="Container">
          <SideTop>
            <FlexDiv $navMiddle>
              <FlexDiv>
                <img src={Telephone} alt="Telephone" />
                <SidetopP>+1 222-555-33-99</SidetopP>
              </FlexDiv>
              <FlexDiv>
                <img src={Envelop} alt="Envelop" />
                <SidetopP>sale@carento.com</SidetopP>
              </FlexDiv>
            </FlexDiv>
            <FlexDiv>
              <img src={Car} alt="Car" />
              <SidetopP>
                More than <Span>800+ </Span>special collection cars in this
                summer
              </SidetopP>
              <SiteTopButton>
                Access Now <img src={RightArrow} alt="RightArrow" />
              </SiteTopButton>
            </FlexDiv>
            <FlexDiv $nogap>
              <FlexDiv $withpadding>
                <img src={Globe} alt="Globe" />
                <SidetopP>EN</SidetopP>
                <img src={ArrowDown} alt="ArrowDown" />
              </FlexDiv>
              <FlexDiv $withpadding $borderLeft>
                <SidetopP>USD</SidetopP>
                <img src={ArrowDown} alt="ArrowDown" />
              </FlexDiv>
              <FlexDiv $withpadding $borderLeft>
                <img src={SunImage} alt="SunImage" />
              </FlexDiv>
            </FlexDiv>
          </SideTop>
        </div>
      </BgColor>
      <div className="Container">
        <Navbar>
          <FlexDiv>
            <img src={Logo} alt="Logo" />
            <SidetopP $Logo>Carento</SidetopP>
          </FlexDiv>
          <FlexDiv $navMiddle>
            <SidetopP $Components>
              Home
              <img src={NavDownArrow} alt="NavDownArrow    " />
            </SidetopP>
            <SidetopP $Components>
              Inventory <img src={NavDownArrow} alt="NavDownArrow   " />
            </SidetopP>
            <SidetopP $Components>
              Dealers <img src={NavDownArrow} alt="NavDownArrow " />
            </SidetopP>
            <SidetopP $Components>
              Shop <img src={NavDownArrow} alt="NavDownArrow    " />
            </SidetopP>
            <SidetopP $Components>
              Pages <img src={NavDownArrow} alt="NavDownArrow   " />
            </SidetopP>
            <SidetopP $Components>
              News <img src={NavDownArrow} alt="NavDownArrow    " />
            </SidetopP>
            <SidetopP $Components>Contact</SidetopP>
          </FlexDiv>
          <FlexDiv $navMiddle>
            <FlexDiv>
              <img src={UserIcon} alt="UserIcon" />
              <SidetopP $Signin>Sign in</SidetopP>
            </FlexDiv>
            <SiteTopButton $navByuton>Add Listing</SiteTopButton>
            <MenuDiv>
              <img src={MenuIcon} alt="MenuIcon" />
            </MenuDiv>
          </FlexDiv>
        </Navbar>
      </div>
    </>
  );
};

export default NavbarComponent;
