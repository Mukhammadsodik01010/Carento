import React from "react";
import NavbarComponent from "./Navbar";
import ArrowBtn from "../../assets/RightBigArrow.svg";
import ArrowBtnLeft from "../../assets/LeftBigArrow.svg";
import Opel from "../../assets/BrendsAssets/Opel.svg";
import {
  AllBrendGroups,
  AllBrendsChild,
  AllBrendsChildDes,
  AllBrendsChildName,
  AllBrendsChildRight,
  AllBrendsDiv,
  AllBrendsGroupsArrow,
  AllBrendsGroupSmallDivs,
  AllBrendsH1,
  AllBrendsHrLine,
  AllBrendsImage,
  AllBrendsMain,
  AllBrendsNum,
  AllBrendsP,
  AllBrendsWrapper,
} from "../../Styles/AllBrendsStyles";
import {
  FeatureListing,
  FeatureListingBtn,
  FeatureListingP,
  FeatureListingWTop,
} from "../../Styles/FeaturedListing";
import {
  AddsBotomNumber,
  AddsBotomP,
  AddsBottomChild,
  AddsBotttomdivAllBrends,
  AllbrendsBackground,
} from "../../Styles/GlobalBranches";
import FooterComponent from "./Footer";
import { Link } from "react-router-dom";


const AllBrendsComp = () => {
  return (
    <>
      <NavbarComponent />

      <AllBrendsMain>
        <AllBrendsDiv className="ContainerMini">
          <AllBrendsH1> Dealer Listing</AllBrendsH1>
          <AllBrendsP>Professional car rental people</AllBrendsP>
        </AllBrendsDiv>
      </AllBrendsMain>
      <div className="ContainerMini">
        <FeatureListingWTop>
          <div>
            <FeatureListing>Our Vehicle Brends</FeatureListing>
            <FeatureListingP>
              Turning dreams into reality with versatile vehicles.
            </FeatureListingP>
          </div>
          {/* <Link className="navLink" to={"/all-brends"}> */}
          <FeatureListingBtn>
            Become a renter <img src={ArrowBtn} alt="ArrowBtn" />
          </FeatureListingBtn>
          {/* </Link> */}
        </FeatureListingWTop>

        <AllBrendsWrapper>
          <Link className="navLink" to={"/dealer-details"}>
            <AllBrendsChild>
              <div>
                <AllBrendsImage src={Opel} alt="Opel" />
              </div>
              <AllBrendsChildRight>
                <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
                <AllBrendsChildDes>
                  123 Kingsway Strandeif, Manchester, M19 2XS
                </AllBrendsChildDes>
                <AllBrendsNum>180 Vehicles</AllBrendsNum>
              </AllBrendsChildRight>
            </AllBrendsChild>
          </Link>

          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
          <AllBrendsChild>
            <div>
              <AllBrendsImage src={Opel} alt="Opel" />
            </div>
            <AllBrendsChildRight>
              <AllBrendsChildName>Opel Manchester</AllBrendsChildName>
              <AllBrendsChildDes>
                123 Kingsway Strandeif, Manchester, M19 2XS
              </AllBrendsChildDes>
              <AllBrendsNum>180 Vehicles</AllBrendsNum>
            </AllBrendsChildRight>
          </AllBrendsChild>
        </AllBrendsWrapper>
        <AllBrendGroups>
          <AllBrendsGroupSmallDivs>
            <AllBrendsGroupsArrow src={ArrowBtnLeft} alt="ArrowBtnLeft" />
          </AllBrendsGroupSmallDivs>
          <AllBrendsGroupSmallDivs>
            <h4>1</h4>
          </AllBrendsGroupSmallDivs>
          <AllBrendsGroupSmallDivs>
            <h4>2</h4>
          </AllBrendsGroupSmallDivs>
          <AllBrendsGroupSmallDivs>
            <h4>3</h4>
          </AllBrendsGroupSmallDivs>
          <AllBrendsGroupSmallDivs>
            <h4>4</h4>
          </AllBrendsGroupSmallDivs>
          <AllBrendsGroupSmallDivs>
            <h4>5</h4>
          </AllBrendsGroupSmallDivs>
          <AllBrendsGroupSmallDivs>
            <h4>...</h4>
          </AllBrendsGroupSmallDivs>
          <AllBrendsGroupSmallDivs>
            <AllBrendsGroupsArrow src={ArrowBtn} alt="ArrowBtn" />
          </AllBrendsGroupSmallDivs>
        </AllBrendGroups>
      </div>
      <AllBrendsHrLine />
      <AllbrendsBackground>
        <div className="ContainerMini">
          <AddsBotttomdivAllBrends>
            <AddsBottomChild>
              <AddsBotomNumber>45+</AddsBotomNumber>
              <AddsBotomP>Global Branches</AddsBotomP>
            </AddsBottomChild>
            <AddsBottomChild>
              <AddsBotomNumber>29K</AddsBotomNumber>
              <AddsBotomP>Destinations Collaboration</AddsBotomP>
            </AddsBottomChild>
            <AddsBottomChild>
              <AddsBotomNumber>20+</AddsBotomNumber>
              <AddsBotomP>Years Experience</AddsBotomP>
            </AddsBottomChild>
            <AddsBottomChild>
              <AddsBotomNumber>168K</AddsBotomNumber>
              <AddsBotomP>Happy Customers</AddsBotomP>
            </AddsBottomChild>
            <AddsBottomChild>
              <AddsBotomNumber>15M</AddsBotomNumber>
              <AddsBotomP>User Accounts</AddsBotomP>
            </AddsBottomChild>
          </AddsBotttomdivAllBrends>
        </div>
      </AllbrendsBackground>
      <FooterComponent />
    </>
  );
};

export default AllBrendsComp;
