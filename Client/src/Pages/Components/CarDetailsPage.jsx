import React from "react";
import NavbarComponent from "./Navbar";
import ArrowJJJ from "../../assets/DetailedPageRightArrow.svg";
import StartFeature from "../../assets/Most/star.svg";
import MapLocation from "../../assets/MapLocation.svg";
import LocationIcon from "../../assets/locationBlack.svg";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Share from "../../assets/Share.svg";
import { grey } from "@mui/material/colors";
import CarImgMain from "../../assets/CarDetaildMain.webp";
import CarImg1 from "../../assets/CarDetails1.jpg";
import CarImg2 from "../../assets/CarDetails2.jpg";
import CarImg3 from "../../assets/CarDetails3.jpeg";
import CarImg4 from "../../assets/CarDetails4.jpg";
import TickImg from "../../assets/Tick.svg";
import QuestionMark from "../../assets/Qmark.svg";
import Menu from "../../assets/Menu.svg";
import VideoP from "../../assets/VideoPlay.svg";
import SppedIcon from "../../assets/Most/speed.svg";
import Gear from "../../assets/Most/Gear.svg";
import Fuel from "../../assets/Most/Fuel.svg";
import Seats from "../../assets/Most/seat.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ArrowLoan from "../../assets/RightBigArrow.svg";
import Rating from "@mui/material/Rating";
import FormControlLabel from "@mui/material/FormControlLabel";
import UserNew from "../../assets/UserNew.svg";

import {
  AcardionOverview,
  AcardioTitle,
  CarDetailsFlex,
  CarDetailsFlexLeft,
  Cardetailshr,
  CarDetailsWrapper,
  CarDetailsWrapperChild,
  CarDetailsWrapperChildP,
  DetailedPageNavigation,
  DetailsBottomLeft,
  DetailsBottomRight,
  DetailsNameH1,
  EmptyDiv,
  FlletCode,
  HelpDiv,
  ImageChilds,
  ImagesChilsWrapper,
  ImagesMain,
  ImagesMainleft,
  ImagesRightInside,
  LoanAcardion,
  LoanAcardionBtn,
  LoanAccInput,
  LoanInoutsWrapper,
  LoanInsideFlex,
  LoanPayments,
  LoanPaymentsh5,
  LocationName,
  NavigationNameH1,
  NavigationNameH3,
  PaymentsWrapper,
  QuestionAnswer,
  RankingP,
  RankingSpan,
  RankingWrapper,
  RentThisvehicle,
  RentThisvehicleDiv,
  RentThisvehicleDivInside,
  ShareDiv,
  Textarea,
  VidePlayInside,
  VidePlayMainDiv,
} from "../../Styles/CarDetailedPageStyles";
import FooterComponent from "./Footer";
import BrendsComp from "./Brends";

const CarDetailsPageComp = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      <NavbarComponent />
      <hr />
      <div className="ContainerMini">
        <DetailedPageNavigation>
          <NavigationNameH3>Home</NavigationNameH3>
          <img src={ArrowJJJ} alt="ArrowJJJ" />
          <NavigationNameH3>Cars Rental</NavigationNameH3>
          <img src={ArrowJJJ} alt="ArrowJJJ" />
          <NavigationNameH1>Hyundai Accent 2025</NavigationNameH1>
        </DetailedPageNavigation>
        <RankingWrapper>
          <img src={StartFeature} alt="StartFeature" />
          <RankingP>
            4.95 <RankingSpan>(672 reviews)</RankingSpan>
          </RankingP>
        </RankingWrapper>
        <div>
          <DetailsNameH1>
            Hyundai Accent 2015 - Modern compact sedan in blue color on
            beautiful dark wheels
          </DetailsNameH1>
          <CarDetailsFlex>
            <CarDetailsFlexLeft>
              <CarDetailsFlexLeft $Inside>
                <CarDetailsFlexLeft $fivepx>
                  <img src={LocationIcon} alt="LocationIcon" />
                  <LocationName>Las Vegas, USA</LocationName>
                </CarDetailsFlexLeft>
                <FlletCode>Show on map</FlletCode>
              </CarDetailsFlexLeft>
              <CarDetailsFlexLeft $Inside>
                <CarDetailsFlexLeft $fivepx>
                  <img src={MapLocation} alt="MapLocation" />
                  <LocationName>Fleet Code:</LocationName>
                </CarDetailsFlexLeft>
                <FlletCode>LVA-4125</FlletCode>
              </CarDetailsFlexLeft>
            </CarDetailsFlexLeft>
            <CarDetailsFlexLeft $Inside>
              <ShareDiv>
                <img src={Share} alt="Share" />
                <p>Share</p>
              </ShareDiv>
              <ShareDiv>
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                  sx={{
                    "& .MuiSvgIcon-root": { fontSize: 30 },
                    "&.Mui-checked": {
                      color: grey[900],
                    },
                  }}
                />
                <p>Wishlist</p>
              </ShareDiv>
            </CarDetailsFlexLeft>
          </CarDetailsFlex>
        </div>
        <div className="ContainerMini">
          <ImagesMain>
            <ImagesMainleft src={CarImgMain} alt="CarImgMain" />

            <ImagesChilsWrapper>
              <ImagesRightInside>
                <ImageChilds src={CarImg1} alt="CarImg1" />
                <ImageChilds src={CarImg2} alt="CarImg2" />
              </ImagesRightInside>
              <ImagesRightInside>
                <ImageChilds src={CarImg3} alt="CarImg3" />
                <ImageChilds src={CarImg4} alt="CarImg4" />
              </ImagesRightInside>
            </ImagesChilsWrapper>
          </ImagesMain>
          <VidePlayMainDiv>
            <VidePlayInside>
              <img src={Menu} alt="Menu" />
              <p>See all photos</p>
            </VidePlayInside>
            <VidePlayInside>
              <img src={VideoP} alt="VideoP" />
              <p>Video Clips</p>
            </VidePlayInside>
          </VidePlayMainDiv>
        </div>

        <ImagesRightInside $bottom>
          <DetailsBottomLeft>
            <CarDetailsWrapper>
              <CarDetailsWrapperChild>
                <img src={SppedIcon} alt="SppedIcon" />
                <CarDetailsWrapperChildP>56,500</CarDetailsWrapperChildP>
              </CarDetailsWrapperChild>
              <CarDetailsWrapperChild>
                <img src={Fuel} alt="Fuel" />
                <CarDetailsWrapperChildP>Diesel</CarDetailsWrapperChildP>
              </CarDetailsWrapperChild>
              <CarDetailsWrapperChild>
                <img src={Gear} alt="Gear" />
                <CarDetailsWrapperChildP>Automatic</CarDetailsWrapperChildP>
              </CarDetailsWrapperChild>
              <CarDetailsWrapperChild>
                <img src={Seats} alt="Seats" />
                <CarDetailsWrapperChildP>7 seats</CarDetailsWrapperChildP>
              </CarDetailsWrapperChild>
              <CarDetailsWrapperChild>
                <img src={SppedIcon} alt="SppedIcon" />
                <CarDetailsWrapperChildP>56,500</CarDetailsWrapperChildP>
              </CarDetailsWrapperChild>
              <CarDetailsWrapperChild>
                <img src={SppedIcon} alt="SppedIcon" />
                <CarDetailsWrapperChildP>56,500</CarDetailsWrapperChildP>
              </CarDetailsWrapperChild>
              <CarDetailsWrapperChild>
                <img src={SppedIcon} alt="SppedIcon" />
                <CarDetailsWrapperChildP>56,500</CarDetailsWrapperChildP>
              </CarDetailsWrapperChild>
              <CarDetailsWrapperChild>
                <img src={SppedIcon} alt="SppedIcon" />
                <CarDetailsWrapperChildP>56,500</CarDetailsWrapperChildP>
              </CarDetailsWrapperChild>
            </CarDetailsWrapper>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <AcardioTitle component="span">Overview</AcardioTitle>
              </AccordionSummary>
              <AccordionDetails>
                <AcardionOverview>
                  Introducing the epitome of modern sophistication in the realm
                  of compact SUVs – the Seltos K3. Dressed in a captivating blue
                  hue that exudes elegance and flair, this dynamic vehicle
                  stands as a testament to innovation and style. With its sleek
                  design accentuated by striking dark wheels, the Seltos K3 is
                  not merely a mode of transportation but a statement of refined
                  taste and contemporary living.
                </AcardionOverview>
                <AcardionOverview $down>
                  Prepare to embark on a journey where cutting-edge technology
                  meets unparalleled comfort, all wrapped in a package of
                  unparalleled aesthetics. Join us as we delve into the world of
                  the Seltos K3, where every detail is crafted to elevate your
                  driving experience to new heights.
                </AcardionOverview>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <AcardioTitle component="span">
                  Included in the price
                </AcardioTitle>
              </AccordionSummary>
              <AccordionDetails>
                <CarDetailsFlex $Margin>
                  <ImagesChilsWrapper $Acardion>
                    <CarDetailsFlexLeft $fivepx>
                      <img src={TickImg} alt="TickImg" />
                      <AcardionOverview $withtick>
                        Free cancellation up to 48 hours before pick-up
                      </AcardionOverview>
                    </CarDetailsFlexLeft>
                    <CarDetailsFlexLeft $fivepx>
                      <img src={TickImg} alt="TickImg" />
                      <AcardionOverview $withtick>
                        Theft Protection with ₫66,926,626 excess
                      </AcardionOverview>
                    </CarDetailsFlexLeft>
                  </ImagesChilsWrapper>
                  <ImagesChilsWrapper $Acardion>
                    <CarDetailsFlexLeft $fivepx>
                      <img src={TickImg} alt="TickImg" />
                      <AcardionOverview $withtick>
                        Collision Damage Waiver with $700 deductible
                      </AcardionOverview>
                    </CarDetailsFlexLeft>
                    <CarDetailsFlexLeft $fivepx>
                      <img src={TickImg} alt="TickImg" />
                      <AcardionOverview $withtick>
                        Unlimited mileage
                      </AcardionOverview>
                    </CarDetailsFlexLeft>
                  </ImagesChilsWrapper>
                </CarDetailsFlex>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <AcardioTitle component="span">Question & Answers</AcardioTitle>
              </AccordionSummary>
              <AccordionDetails>
                <ImagesChilsWrapper $Acardion>
                  <QuestionAnswer>
                    <CarDetailsFlexLeft $fivepx>
                      <img src={QuestionMark} alt="QuestionMark" />
                      <AcardioTitle $Smallerpx>
                        Is The High Roller suitable for all ages?
                      </AcardioTitle>
                    </CarDetailsFlexLeft>
                    <AcardionOverview>
                      Absolutely! The High Roller offers a family-friendly
                      experience suitable for visitors of all ages. Children
                      must be accompanied by an adult.
                    </AcardionOverview>
                  </QuestionAnswer>
                  <QuestionAnswer>
                    <CarDetailsFlexLeft $fivepx>
                      <img src={QuestionMark} alt="QuestionMark" />
                      <AcardioTitle $Smallerpx>
                        Can I bring food or drinks aboard The High Roller?
                      </AcardioTitle>
                    </CarDetailsFlexLeft>
                    <AcardionOverview>
                      Outside food and beverages are not permitted on The High
                      Roller. However, there are nearby dining options at The
                      LINQ Promenade where you can enjoy a meal before or after
                      your ride.
                    </AcardionOverview>
                  </QuestionAnswer>
                  <QuestionAnswer>
                    <CarDetailsFlexLeft $fivepx>
                      <img src={QuestionMark} alt="QuestionMark" />
                      <AcardioTitle $Smallerpx>
                        Is The High Roller wheelchair accessible?
                      </AcardioTitle>
                    </CarDetailsFlexLeft>
                    <AcardionOverview>
                      es, The High Roller cabins are wheelchair accessible,
                      making it possible for everyone to enjoy the breathtaking
                      views of Las Vegas.
                    </AcardionOverview>
                  </QuestionAnswer>
                </ImagesChilsWrapper>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <AcardioTitle component="span">Loan Calculator</AcardioTitle>
              </AccordionSummary>
              <AccordionDetails>
                <LoanAcardion>
                  <LoanInsideFlex>
                    <LoanInoutsWrapper>
                      <AcardionOverview>Price of vehicle</AcardionOverview>
                      <LoanAccInput type="text" placeholder="$20,000" />
                    </LoanInoutsWrapper>
                    <LoanInoutsWrapper>
                      <AcardionOverview>Interest rate</AcardionOverview>
                      <LoanAccInput type="text" placeholder="5%" />
                    </LoanInoutsWrapper>
                  </LoanInsideFlex>
                  <LoanInsideFlex>
                    <LoanInoutsWrapper>
                      <AcardionOverview>Terms</AcardionOverview>
                      <LoanAccInput type="text" placeholder="12 months" />
                    </LoanInoutsWrapper>
                    <LoanInoutsWrapper>
                      <AcardionOverview>Down payment</AcardionOverview>
                      <LoanAccInput type="text" placeholder="$12,000" />
                    </LoanInoutsWrapper>
                  </LoanInsideFlex>
                  <PaymentsWrapper>
                    <LoanPayments>
                      <LoanPaymentsh5>Down payment ammout</LoanPaymentsh5>
                      <LoanPaymentsh5>Amount financed</LoanPaymentsh5>
                      <LoanPaymentsh5>Monthly payment</LoanPaymentsh5>
                    </LoanPayments>
                    <LoanPayments>
                      <LoanPaymentsh5>$800,00</LoanPaymentsh5>
                      <LoanPaymentsh5>$12,000</LoanPaymentsh5>
                      <LoanPaymentsh5>$480,00</LoanPaymentsh5>
                    </LoanPayments>
                  </PaymentsWrapper>
                  <LoanAcardionBtn>
                    Apply for a loan <img src={ArrowLoan} alt="ArrowLoan" />
                  </LoanAcardionBtn>
                </LoanAcardion>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <AcardioTitle component="span">Add a review</AcardioTitle>
              </AccordionSummary>
              <AccordionDetails>
                <CarDetailsFlex $Margin>
                  <ImagesRightInside>
                    <DetailsBottomLeft>
                      <LoanPaymentsh5>Price</LoanPaymentsh5>
                      <LoanPaymentsh5>Service</LoanPaymentsh5>
                    </DetailsBottomLeft>
                    <DetailsBottomLeft>
                      <Rating name="simple-controlled" value={4} />
                      <Rating name="simple-controlled" value={4} />
                    </DetailsBottomLeft>
                  </ImagesRightInside>
                  <ImagesRightInside>
                    <DetailsBottomLeft>
                      <LoanPaymentsh5>Safety</LoanPaymentsh5>
                      <LoanPaymentsh5>Entertainment</LoanPaymentsh5>
                    </DetailsBottomLeft>
                    <DetailsBottomLeft>
                      <Rating name="simple-controlled" value={4} />
                      <Rating name="simple-controlled" value={4} />
                    </DetailsBottomLeft>
                  </ImagesRightInside>
                  <ImagesRightInside>
                    <DetailsBottomLeft>
                      <LoanPaymentsh5>Accessibility</LoanPaymentsh5>
                      <LoanPaymentsh5>Support</LoanPaymentsh5>
                    </DetailsBottomLeft>
                    <DetailsBottomLeft>
                      <Rating name="simple-controlled" value={4} />
                      <Rating name="simple-controlled" value={4} />
                    </DetailsBottomLeft>
                  </ImagesRightInside>
                </CarDetailsFlex>
                <Cardetailshr />
                <AcardioTitle>Leave feedback</AcardioTitle>
                <CarDetailsFlex $gap>
                  <LoanAccInput type="text" placeholder="Yourname" />
                  <LoanAccInput type="text" placeholder="Email Address" />
                </CarDetailsFlex>
                <Textarea rows={5} placeholder="Your comment"></Textarea>
                <LoanAcardionBtn>
                  Submit review <img src={ArrowLoan} alt="ArrowLoan" />
                </LoanAcardionBtn>
              </AccordionDetails>
            </Accordion>
          </DetailsBottomLeft>
          <DetailsBottomRight>
            <QuestionAnswer>
              <AcardioTitle>Get Started</AcardioTitle>
              <LoanAcardionBtn style={{ width: "100%" }} $lightGrenn>
                Schedule Test Drive <img src={ArrowLoan} alt="ArrowLoan" />
              </LoanAcardionBtn>
              <LoanAcardionBtn style={{ width: "100%" }} $lightGrenn>
                Make An Offer Price
                <img src={ArrowLoan} alt="ArrowLoan" />
              </LoanAcardionBtn>
            </QuestionAnswer>
            <RentThisvehicleDiv>
              <RentThisvehicle>
                <AcardioTitle>Rent This Vehicle</AcardioTitle>
              </RentThisvehicle>
              <RentThisvehicleDivInside>
                <CarDetailsFlex $TwentyMargin>
                  <AcardioTitle $Smallerpx>Pick-Up</AcardioTitle>
                  {/* data picker uchun div */}
                  <EmptyDiv> </EmptyDiv>
                </CarDetailsFlex>
                <CarDetailsFlex $TwentyMargin>
                  <AcardioTitle $Smallerpx>Drop-Off</AcardioTitle>
                  {/* data picker uchun div */}
                  <EmptyDiv></EmptyDiv>
                </CarDetailsFlex>
                <Cardetailshr />
                <LoanPayments>
                  <AcardioTitle>Add Extra</AcardioTitle>
                  <div>
                    <CarDetailsFlex $Margin>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="GPS Navigation System"
                      />
                      <h3>$25.00</h3>
                    </CarDetailsFlex>
                    <CarDetailsFlex $Margin>
                      <FormControlLabel
                        control={<Checkbox defaultChecked />}
                        label="GPS Navigation System"
                      />
                      <h3>$25.00</h3>
                    </CarDetailsFlex>
                    <CarDetailsFlex $Margin>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="GPS Navigation System"
                      />
                      <h3>$25.00</h3>
                    </CarDetailsFlex>
                    <CarDetailsFlex $Margin>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="GPS Navigation System"
                      />
                      <h3>$25.00</h3>
                    </CarDetailsFlex>
                  </div>
                  <Cardetailshr />
                  <CarDetailsFlex $Margin>
                    <h4>Subtotal</h4>
                    <h3>$624.00</h3>
                  </CarDetailsFlex>
                  <CarDetailsFlex $Margin>
                    <h4>Sale discount</h4>
                    <h3>$124.00</h3>
                  </CarDetailsFlex>
                  <CarDetailsFlex $Margin>
                    <h4>Total Payable</h4>
                    <h3>$500.00</h3>
                  </CarDetailsFlex>
                  <LoanAcardionBtn>
                    Book Now
                    <img src={ArrowLoan} alt="ArrowLoan" />
                  </LoanAcardionBtn>
                  <HelpDiv>
                    <img src={UserNew} alt="UserNew" />
                    <p>Need some help?</p>
                  </HelpDiv>
                </LoanPayments>
              </RentThisvehicleDivInside>
                      </RentThisvehicleDiv>
                      <QuestionAnswer>
                          vcvrw
                      </QuestionAnswer>
          </DetailsBottomRight>
        </ImagesRightInside>
      </div>
      <BrendsComp />
      <FooterComponent />
    </>
  );
};

export default CarDetailsPageComp;
