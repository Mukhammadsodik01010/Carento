import React from "react";
import Slider from "react-slick";
import {
  Browse,
  CarsForYou,
  CaruselCars,
  CaruselTextsDiv,
  DiscountApp,
  FindCar,
  HighQuality,
  InsideCaruselDiv,
  LeftArrowDiv,
  LookingFor,
  MainDiv1,
  MainDiv2,
  MainDiv3,
  MarkWrapper,
  OrderingViaApp,
  PopularSearch,
  RightArrowDiv,
} from "../../Styles/CaruselStyles";

import RightArrow from '../../assets//CaruselAssets/RightArrow.svg'
import LeftArrrow  from '../../assets/CaruselAssets/LeftArrowCarusel.svg'
import Mark from "../../assets/CaruselAssets/check.svg";
import { FlexDiv } from "../../Styles/NavbarStyles";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="Container" onClick={onClick}>
      <RightArrowDiv>
        <img src={RightArrow} alt="RightArrow" />
      </RightArrowDiv>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="Container" onClick={onClick}>
      <LeftArrowDiv>
        <img src={LeftArrrow} alt="LeftArrrow" />
      </LeftArrowDiv>
    </div>
  );
}

function SimpleSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
    return (
      <>
        <div className="slider-container">
          <Slider {...settings}>
            <div>
              <MainDiv1>
                <div className="Container">
                  <InsideCaruselDiv>
                    <CaruselTextsDiv>
                      <FindCar>Find Your Perfect Car</FindCar>
                      <LookingFor>
                        Looking for a vehicle? You’re in the perfect spot.
                      </LookingFor>
                      <FlexDiv>
                        <FlexDiv>
                          <MarkWrapper>
                            <img src={Mark} alt="Mark" />
                          </MarkWrapper>
                          <HighQuality>High quality at a low cost.</HighQuality>
                        </FlexDiv>
                        <FlexDiv>
                          <MarkWrapper>
                            <img src={Mark} alt="Mark" />
                          </MarkWrapper>
                          <HighQuality>Premium services</HighQuality>
                        </FlexDiv>
                        <FlexDiv>
                          <MarkWrapper>
                            <img src={Mark} alt="Mark" />
                          </MarkWrapper>
                          <HighQuality>24/7 roadside support.</HighQuality>
                        </FlexDiv>
                      </FlexDiv>
                    </CaruselTextsDiv>
                  </InsideCaruselDiv>
                </div>
              </MainDiv1>
            </div>
            <div>
              <MainDiv2>
                <div className="Container">
                  <InsideCaruselDiv>
                    <CaruselTextsDiv>
                      <CarsForYou>+3600 cars for you</CarsForYou>
                      <LookingFor>Find your next vehicle today</LookingFor>
                      <Browse>
                        Browse our diverse inventory and enjoy a seamless buying
                        experience with expert support every step of the way
                      </Browse>
                    </CaruselTextsDiv>
                  </InsideCaruselDiv>
                </div>
              </MainDiv2>
            </div>
            <div>
              <MainDiv3>
                <div className="Container">
                  <InsideCaruselDiv>
                    <CarsForYou>+3600 cars for you</CarsForYou>
                    <LookingFor>Discover your next car today.</LookingFor>
                    <Browse>
                      Explore our wide selection and experience a smooth buying
                      process with personalized support at every stage.
                    </Browse>
                    <PopularSearch>
                      Popular Searches: Economy Standard, Luxury, SUV,
                      Convertible,
                    </PopularSearch>
                  </InsideCaruselDiv>
                </div>
              </MainDiv3>
            </div>
          </Slider>
        </div>
        <div className="Container">
          <CaruselCars></CaruselCars>
          <DiscountApp>
            Get 5% discount when <OrderingViaApp>Ordering via APP</OrderingViaApp>
          </DiscountApp>
        </div>
      </>
    );
}

export default SimpleSlider;
