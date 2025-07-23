import React from "react";
import {
  BgColor,
  FlexDiv,
  FlexDivNav,
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
import { Link } from "react-router-dom";

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
          <Link className="navLink" to={"/"}>
            <FlexDiv>
              <img src={Logo} alt="Logo" />
              <SidetopP $Logo>Carento</SidetopP>
            </FlexDiv>
          </Link>
          <FlexDiv $nogap>
            <FlexDivNav $Components>
              Home
              <img src={NavDownArrow} alt="NavDownArrow    " />
            </FlexDivNav>
            <FlexDivNav $Components>
              Inventory <img src={NavDownArrow} alt="NavDownArrow   " />
            </FlexDivNav>
            <FlexDivNav $Components>
              Dealers <img src={NavDownArrow} alt="NavDownArrow " />
            </FlexDivNav>
            <FlexDivNav $Components>
              Shop <img src={NavDownArrow} alt="NavDownArrow    " />
            </FlexDivNav>
            <FlexDivNav $Components>
              Pages <img src={NavDownArrow} alt="NavDownArrow   " />
            </FlexDivNav>
            <FlexDivNav $Components>
              News <img src={NavDownArrow} alt="NavDownArrow    " />
            </FlexDivNav>
            <FlexDivNav $Components>Contact</FlexDivNav>
          </FlexDiv>
          <FlexDiv $navMiddle>
            <Link className="navLink" to={"/log-in"}>
              <FlexDivNav className="hoverEffect">
                <img src={UserIcon} alt="UserIcon" />
                <SidetopP $Signin>Sign in</SidetopP>
              </FlexDivNav>
            </Link>
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
