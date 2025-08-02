import React, { Component } from "react";
import Rating from "@mui/material/Rating";
import Slider from "react-slick";
import Msg from "../../assets/msgImages.svg";
import ProfileTwo from "../../assets/Profile2.jpeg";
import ProfileFour from "../../assets/Profile4.jpeg";
import ProfileFive from "../../assets/Profile5.jpeg";
import ProfileSix from "../../assets/Profile6.jpeg";
import ProfileSeven from "../../assets/Profile7.jpeg";
import ProfileEight from "../../assets/Profile8.jpeg";
import ProfileNine from "../../assets/Profile9.jpeg";
import {
  MsgDiv,
  MsgLocation,
  MsgName,
  MsgWrapper,
  TheyChildWrapper,
  Theysaybottom,
  TheysayFlex,
  TheysayFlexImg,
  TheySayH1,
  TheySayImg,
  TheySayMain,
  TheySaySlickH1,
  TheySaySlickP,
  TheySayTop,
} from "../../Styles/TheySay";

function TheySayComp() {
  const settings = {
    infinite: true,
    speed: 4000,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
  };
  return (
    <div className="slider-container">
      <TheySayTop>
        <MsgDiv>
          <img src={Msg} alt="Msg" />
          Testimonials
        </MsgDiv>
        <TheySayH1>What they say about us?</TheySayH1>
      </TheySayTop>
      <Theysaybottom>
        <Slider {...settings}>
          <div>
            <TheySayMain>
              <TheyChildWrapper>
                <TheySaySlickH1>The best booking system</TheySaySlickH1>
                <TheySaySlickP>
                  Embarking on our dream vacation was made a breeze through the
                  seamless coordination of tours and hotels using this
                  exceptional booking platform.
                </TheySaySlickP>
                <TheysayFlex>
                  <TheysayFlexImg>
                    <TheySayImg src={ProfileTwo} alt="ProfileTwo" />
                    <MsgWrapper>
                      <MsgName>Sophia Moore</MsgName>
                      <MsgLocation>New York</MsgLocation>
                    </MsgWrapper>
                  </TheysayFlexImg>
                  <div>
                    <Rating defaultValue={2} name="simple-controlled" />
                  </div>
                </TheysayFlex>
              </TheyChildWrapper>
            </TheySayMain>
          </div>
          <div>
            <TheySayMain>
              <TheyChildWrapper>
                <TheySaySlickH1>Smooth and hassle-free rental</TheySaySlickH1>
                <TheySaySlickP>
                  Renting a car has never been easier. The entire process—from
                  booking to pickup—was incredibly smooth and saved us so much
                  time.
                </TheySaySlickP>
                <TheysayFlex>
                  <TheysayFlexImg>
                    <TheySayImg src={ProfileFour} alt="ProfileFour" />
                    <MsgWrapper>
                      <MsgName>Daniel Kim</MsgName>
                      <MsgLocation>Seoul, South Korea</MsgLocation>
                    </MsgWrapper>
                  </TheysayFlexImg>
                  <div>
                    <Rating defaultValue={1} name="simple-controlled" />
                  </div>
                </TheysayFlex>
              </TheyChildWrapper>
            </TheySayMain>
          </div>
          <div>
            <TheySayMain>
              <TheyChildWrapper>
                <TheySaySlickH1>Reliable cars, great service</TheySaySlickH1>
                <TheySaySlickP>
                  The car was in excellent condition and perfect for our road
                  trip. Staff were friendly and explained everything clearly at
                  pickup.
                </TheySaySlickP>
                <TheysayFlex>
                  <TheysayFlexImg>
                    <TheySayImg src={ProfileFive} alt="ProfileFive" />
                    <MsgWrapper>
                      <MsgName>Emma Johnson</MsgName>
                      <MsgLocation> Los Angeles, USA</MsgLocation>
                    </MsgWrapper>
                  </TheysayFlexImg>
                  <div>
                    <Rating defaultValue={2} name="simple-controlled" />
                  </div>
                </TheysayFlex>
              </TheyChildWrapper>
            </TheySayMain>
          </div>
          <div>
            <TheySayMain>
              <TheyChildWrapper>
                <TheySaySlickH1>Perfect for last-minute needs</TheySaySlickH1>
                <TheySaySlickP>
                  We needed a vehicle urgently, and this platform helped us get
                  a reliable car within an hour. Couldn’t have asked for better
                  support.
                </TheySaySlickP>
                <TheysayFlex>
                  <TheysayFlexImg>
                    <TheySayImg src={ProfileSix} alt="ProfileSix" />
                    <MsgWrapper>
                      <MsgName>Aiden Clarke</MsgName>
                      <MsgLocation>Dublin, Ireland</MsgLocation>
                    </MsgWrapper>
                  </TheysayFlexImg>
                  <div>
                    <Rating defaultValue={4} name="simple-controlled" />
                  </div>
                </TheysayFlex>
              </TheyChildWrapper>
            </TheySayMain>
          </div>
          <div>
            <TheySayMain>
              <TheyChildWrapper>
                <TheySaySlickH1>Affordable and efficient</TheySaySlickH1>
                <TheySaySlickP>
                  Compared to other services, the prices were fair and the car
                  exceeded our expectations. Very economical and convenient.
                </TheySaySlickP>
                <TheysayFlex>
                  <TheysayFlexImg>
                    <TheySayImg src={ProfileTwo} alt="ProfileTwo" />
                    <MsgWrapper>
                      <MsgName>Lila Martinez</MsgName>
                      <MsgLocation>Madrid, Spain</MsgLocation>
                    </MsgWrapper>
                  </TheysayFlexImg>
                  <div>
                    <Rating defaultValue={5} name="simple-controlled" />
                  </div>
                </TheysayFlex>
              </TheyChildWrapper>
            </TheySayMain>
          </div>
          <div>
            <TheySayMain>
              <TheyChildWrapper>
                <TheySaySlickH1>
                  Excellent for long-distance travel
                </TheySaySlickH1>
                <TheySaySlickP>
                  We rented an SUV for a cross-country journey. The vehicle was
                  clean, fuel-efficient, and incredibly comfortable for the
                  whole family.
                </TheySaySlickP>
                <TheysayFlex>
                  <TheysayFlexImg>
                    <TheySayImg src={ProfileSeven} alt="ProfileSeven" />
                    <MsgWrapper>
                      <MsgName>Hiroshi Tanaka</MsgName>
                      <MsgLocation>Osaka, Japan</MsgLocation>
                    </MsgWrapper>
                  </TheysayFlexImg>
                  <div>
                    <Rating defaultValue={2} name="simple-controlled" />
                  </div>
                </TheysayFlex>
              </TheyChildWrapper>
            </TheySayMain>
          </div>
          <div>
            <TheySayMain>
              <TheyChildWrapper>
                <TheySaySlickH1>Easy airport pickup</TheySaySlickH1>
                <TheySaySlickP>
                  Landed and picked up the car right outside the terminal. No
                  delays, no confusion—just straight to the road in minutes.
                </TheySaySlickP>
                <TheysayFlex>
                  <TheysayFlexImg>
                    <TheySayImg src={ProfileEight} alt="ProfileEight" />
                    <MsgWrapper>
                      <MsgName>Grace Evans</MsgName>
                      <MsgLocation>Vancouver, Canada</MsgLocation>
                    </MsgWrapper>
                  </TheysayFlexImg>
                  <div>
                    <Rating defaultValue={1} name="simple-controlled" />
                  </div>
                </TheysayFlex>
              </TheyChildWrapper>
            </TheySayMain>
          </div>
          <div>
            <TheySayMain>
              <TheyChildWrapper>
                <TheySaySlickH1> Great variety of options</TheySaySlickH1>
                <TheySaySlickP>
                  Whether you need a compact car for the city or a van for group
                  travel, this service offers a wide range of vehicles to choose
                  from.
                </TheySaySlickP>
                <TheysayFlex>
                  <TheysayFlexImg>
                    <TheySayImg src={ProfileNine} alt="ProfileNine" />
                    <MsgWrapper>
                      <MsgName>Yusuf Al-Masri</MsgName>
                      <MsgLocation>Dubai, UAE</MsgLocation>
                    </MsgWrapper>
                  </TheysayFlexImg>
                  <div>
                    <Rating defaultValue={3} name="simple-controlled" />
                  </div>
                </TheysayFlex>
              </TheyChildWrapper>
            </TheySayMain>
          </div>
        </Slider>
      </Theysaybottom>
    </div>
  );
}
export default TheySayComp;
