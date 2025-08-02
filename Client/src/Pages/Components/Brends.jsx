import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ArrowBtn from "../../assets/RightBigArrow.svg";
import Opel from "../../assets/BrendsAssets/Opel.svg";
import BMV from "../../assets/BrendsAssets/BMV.svg";
import Ford from "../../assets/BrendsAssets/Ford.svg";
import Hyundai from "../../assets/BrendsAssets/Hyundai.svg";
import Mazda from "../../assets/BrendsAssets/Mazda.svg";
import Mercedes from "../../assets/BrendsAssets/Mercedes.svg";
import Nissan from "../../assets/BrendsAssets/Nissan.svg";
import Peugeot from "../../assets/BrendsAssets/Peugeot.svg";
import Toyota from "../../assets/BrendsAssets/Toyota.svg";
import {
  FeatureListing,
  FeatureListingBtn,
  FeatureListingP,
  FeatureListingWTop,
} from "../../Styles/FeaturedListing";
import {
  BrandsBottom,
  BrandsChild,
  Brandsh1,
  BrandsImage,
  BrandsP,
  BrandsWrapper,
} from "../../Styles/BrendsStyles";

const BrendsComp = () => {
  const settings = {
    infinite: true,
    slidesToShow: 9,
    // slidesToScroll: 3,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 500,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: true,
  };
  return (
    <BrandsWrapper>
      <div className="ContainerMini">
        <FeatureListingWTop style={{ marginTop: "0" }}>
          <div>
            <FeatureListing>Premium Brands</FeatureListing>
            <FeatureListingP>
              Unveil the Finest Selection of High-End Vehicles
            </FeatureListingP>
          </div>
          <Link className="navLink" to={"/all-brends"}>
            <FeatureListingBtn>
              Show All Brands <img src={ArrowBtn} alt="ArrowBtn" />
            </FeatureListingBtn>
          </Link>
        </FeatureListingWTop>
        <BrandsBottom>
          <div className="slider-container">
            <Slider {...settings}>
              <div>
                <BrandsChild>
                  <BrandsImage src={Opel} alt="Opel" />
                  <Brandsh1>Opel</Brandsh1>
                  <BrandsP>180 cars</BrandsP>
                </BrandsChild>
              </div>
              <div>
                <BrandsChild>
                  <BrandsImage src={BMV} alt="BMV" />
                  <Brandsh1>BMV</Brandsh1>
                  <BrandsP>65 cars</BrandsP>
                </BrandsChild>
              </div>
              <div>
                <BrandsChild>
                  <BrandsImage src={Ford} alt="Ford" />
                  <Brandsh1>Ford</Brandsh1>
                  <BrandsP>24 cars</BrandsP>
                </BrandsChild>
              </div>
              <div>
                <BrandsChild>
                  <BrandsImage src={Hyundai} alt="Hyundai" />
                  <Brandsh1>Hyundai</Brandsh1>
                  <BrandsP>55 cars</BrandsP>
                </BrandsChild>
              </div>
              <div>
                <BrandsChild>
                  <BrandsImage src={Mazda} alt="Mazda" />
                  <Brandsh1>Mazda</Brandsh1>
                  <BrandsP>99 cars</BrandsP>
                </BrandsChild>
              </div>
              <div>
                <BrandsChild>
                  <BrandsImage src={Mercedes} alt="Mercedes" />
                  <Brandsh1>Mercedes</Brandsh1>
                  <BrandsP>33 cars</BrandsP>
                </BrandsChild>
              </div>
              <div>
                <BrandsChild>
                  <BrandsImage src={Nissan} alt="Nissan" />
                  <Brandsh1>Nissan</Brandsh1>
                  <BrandsP>37 cars</BrandsP>
                </BrandsChild>
              </div>
              <div>
                <BrandsChild>
                  <BrandsImage src={Peugeot} alt="Peugeot" />
                  <Brandsh1>Peugeot</Brandsh1>
                  <BrandsP>12 cars</BrandsP>
                </BrandsChild>
              </div>
              <div>
                <BrandsChild>
                  <BrandsImage src={Toyota} alt="Toyota" />
                  <Brandsh1>Toyota</Brandsh1>
                  <BrandsP>81 cars</BrandsP>
                </BrandsChild>
              </div>
            </Slider>
          </div>
        </BrandsBottom>
      </div>
    </BrandsWrapper>
  );
};

export default BrendsComp;
