import React from "react";
import Slider from "react-slick";
import RightArrow from "../../assets//CaruselAssets/RightArrow.svg";
import LeftArrrow from "../../assets/CaruselAssets/LeftArrowCarusel.svg";
import ArrowCarusel from "../../assets/RightBigArrow.svg";
import {
  AddsCAruselBtn,
  AddsCaruselh1,
  AddsCaruselh6,
  AddsCaruselP,
  AddsMAin1,
  AddsLeftArrowDiv,
  AddsRightArrowDiv,
  AddsMAin2,
  AddsMAin3,
} from "../../Styles/AddCaruselStyles";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className="ContainerMini" onClick={onClick}>
      <AddsRightArrowDiv>
        <img src={RightArrow} alt="RightArrow" />
      </AddsRightArrowDiv>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="ContainerMini" onClick={onClick}>
      <AddsLeftArrowDiv>
        <img src={LeftArrrow} alt="LeftArrrow" />
      </AddsLeftArrowDiv>
    </div>
  );
}

function AddsCaruselComp() {
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
    <div className="ContainerMini">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="ContainerMini">
            <AddsMAin2>
              <AddsCaruselP>CAR REVIEW</AddsCaruselP>
              <AddsCaruselh1>
                Chevrolet 2024 new CHEVY Blazer review
              </AddsCaruselh1>
              <AddsCaruselh6>
                The Chevrolet 2024 new CHEVY Blazeris easy to drive and provides
                a sufficient all-electric range.
              </AddsCaruselh6>
              <AddsCAruselBtn>
                View Details <img src={ArrowCarusel} alt="ArrowCarusel" />
              </AddsCAruselBtn>
            </AddsMAin2>
          </div>
          <div className="ContainerMini">
            <AddsMAin1>
              <AddsCaruselP>CAR REVIEW</AddsCaruselP>
              <AddsCaruselh1>
                Hyundai Tucson Plug-In Hybrid 2025 review
              </AddsCaruselh1>
              <AddsCaruselh6>
                The Tucson Plug-in Hybrid is easy to drive and provides a
                sufficient all-electric range.{" "}
              </AddsCaruselh6>
              <AddsCAruselBtn>
                View Details <img src={ArrowCarusel} alt="ArrowCarusel" />
              </AddsCAruselBtn>
            </AddsMAin1>
          </div>
          <div className="ContainerMini">
            <AddsMAin3>
              <AddsCaruselP>CAR REVIEW</AddsCaruselP>
              <AddsCaruselh1>Kia 2025 EV5 review</AddsCaruselh1>
              <AddsCaruselh6>
                Kia 2025 EV5 is easy to drive and provides a sufficient
                all-electric range.{" "}
              </AddsCaruselh6>
              <AddsCAruselBtn>
                View Details <img src={ArrowCarusel} alt="ArrowCarusel" />
              </AddsCAruselBtn>
            </AddsMAin3>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default AddsCaruselComp;
