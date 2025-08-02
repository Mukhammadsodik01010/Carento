import React from "react";
import mapImage from "../../assets/map.png";
import Menu from '../../assets/Menu.svg'
import UpDown from '../../assets/UpDown.svg'
import List from '../../assets/list.svg'
import NavDownArrow1 from "../../assets/Navbar/navDownArrow.svg";
import NavbarComponent from "./Navbar";
import FeatureCarImg from "../../assets/FeatureCar.jpg";
import LocationIcon from "../../assets/locationBlack.svg";
import SppedIcon from "../../assets/Most/speed.svg";
import Gear from "../../assets/Most/Gear.svg";
import Fuel from "../../assets/Most/Fuel.svg";
import Seats from "../../assets/Most/seat.svg";
import StartFeature from "../../assets/Most/star.svg";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Rating from "@mui/material/Rating";
  
import { FeatureListing, FeatureListingP } from "../../Styles/FeaturedListing";
import {
  ChildCost,
  ChildCostSpan,
  ChildFlexDiv,
  ChildFlexDivJc,
  ChildFlexWithGap,
  FeatureBookingBtn,
  FeatureCarImage,
  FeatureChildBottom,
  FeatureChildTop,
  FeatureHrLine,
  FeatureStarDiv,
  InsideChildh1,
  InsideChildP,
  FeaturedListingChild,
} from "../../Styles/FeaturedListing";
import {
  Acardionh1,
  AcardionNumber,
  AcardionNumberh4,
  AcardionRating,
  AllCarsBgInside,
  AllCarsChildsContainer,
  AllCarsChildsWrapper,
  AllCarsh1,
  AllCarsh4,
  AllCarsHrLine,
  AllCarsLedt,
  AllCarsMain,
  AllCarsP,
  AllCarsRight,
  ChildsSortingTop,
  MapImg,
  SeeMore,
  SeeMoreDiv,
  ShowSort,
  ShowSortSpan,
  ToursNumber,
} from "../../Styles/AllCarsListStyles";
import FooterComponent from "./Footer";
import BrendsComp from "./Brends";
import { Link } from "react-router-dom";


const AllCarsComp = () => {
  return (
    <>
      <NavbarComponent />
      <AllCarsMain>
        <AllCarsBgInside className="ContainerMini">
          <AllCarsh4>Find cars for sale and for rent near you</AllCarsh4>
          <AllCarsh1>Find Your Perfect Car</AllCarsh1>
          <AllCarsP>
            Search and find your best car rental with easy way
          </AllCarsP>
        </AllCarsBgInside>
      </AllCarsMain>
      <div className="ContainerMini" style={{ marginTop: "100px" }}>
        <FeatureListing>Our Vehicle Fleet</FeatureListing>
        <FeatureListingP>
          Turning dreams into reality with versatile vehicles.
        </FeatureListingP>

        <AllCarsChildsContainer>
          <AllCarsLedt>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Acardionh1>Show on map</Acardionh1>
              </AccordionSummary>
              <AccordionDetails>
                <MapImg src={mapImage} alt="mapImage" />
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Acardionh1>Filter Price</Acardionh1>
              </AccordionSummary>
              <AccordionDetails>{/* price amount */}</AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Acardionh1>Car type</Acardionh1>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="All"
                    />
                    <AcardionNumberh4>198</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel control={<Checkbox />} label="Sedans" />
                    <AcardionNumberh4>45</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel control={<Checkbox />} label="SUVs" />
                    <AcardionNumberh4>32</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel control={<Checkbox />} label="Coupes" />
                    <AcardionNumberh4>86</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Hatchbacks"
                    />
                    <AcardionNumberh4>59</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Convertibles"
                    />
                    <AcardionNumberh4>48</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel control={<Checkbox />} label="Trucks" />
                    <AcardionNumberh4>72</AcardionNumberh4>
                  </AcardionNumber>
                </FormGroup>
                <SeeMoreDiv>
                  <SeeMore>
                    See more <img src={NavDownArrow1} alt="NavDownArrow1" />
                  </SeeMore>
                </SeeMoreDiv>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Acardionh1>Car Amenities</Acardionh1>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="All"
                    />
                    <AcardionNumberh4>32</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Leather upholstery"
                    />
                    <AcardionNumberh4>25</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Heated seats"
                    />
                    <AcardionNumberh4>68</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Sunroof/Moonroof"
                    />
                    <AcardionNumberh4>34</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Keyless entry/start"
                    />
                    <AcardionNumberh4>19</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Heads-up display"
                    />
                    <AcardionNumberh4>45</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Adaptive cruise control"
                    />
                    <AcardionNumberh4>76</AcardionNumberh4>
                  </AcardionNumber>
                </FormGroup>
                <SeeMoreDiv>
                  <SeeMore>
                    See more <img src={NavDownArrow1} alt="NavDownArrow1" />
                  </SeeMore>
                </SeeMoreDiv>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Acardionh1>Fuel Type</Acardionh1>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="All"
                    />
                    <AcardionNumberh4>32</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Plug-in Hybrid (PHEV)"
                    />
                    <AcardionNumberh4>13</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Hybrid (HEV)"
                    />
                    <AcardionNumberh4>23</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Electric Vehicle (EV)"
                    />
                    <AcardionNumberh4>16</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel control={<Checkbox />} label="Diesel" />
                    <AcardionNumberh4>21</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Gasoline/Petrol"
                    />
                    <AcardionNumberh4>56</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel control={<Checkbox />} label="Hydrogen" />
                    <AcardionNumberh4>76</AcardionNumberh4>
                  </AcardionNumber>
                </FormGroup>
                <SeeMoreDiv>
                  <SeeMore>
                    See more <img src={NavDownArrow1} alt="NavDownArrow1" />
                  </SeeMore>
                </SeeMoreDiv>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Acardionh1>Review Score</Acardionh1>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <AcardionRating>
                    <FormControlLabel control={<Checkbox />} />
                    <Rating name="read-only" value={5} readOnly />
                  </AcardionRating>
                  <AcardionRating>
                    <FormControlLabel control={<Checkbox />} />
                    <Rating name="read-only" value={4} readOnly />
                  </AcardionRating>
                  <AcardionRating>
                    <FormControlLabel control={<Checkbox defaultChecked />} />
                    <Rating name="read-only" value={3} readOnly />
                  </AcardionRating>
                  <AcardionRating>
                    <FormControlLabel control={<Checkbox />} />
                    <Rating name="read-only" value={2} readOnly />
                  </AcardionRating>
                  <AcardionRating>
                    <FormControlLabel control={<Checkbox />} />
                    <Rating name="read-only" value={1} readOnly />
                  </AcardionRating>
                </FormGroup>
                <SeeMoreDiv>
                  <SeeMore>
                    See more <img src={NavDownArrow1} alt="NavDownArrow1" />
                  </SeeMore>
                </SeeMoreDiv>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Acardionh1>Booking Location</Acardionh1>
              </AccordionSummary>
              <AccordionDetails>
                <FormGroup>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
                      label="Maldives Haven"
                    />
                    <AcardionNumberh4>123</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Santorini Retreat"
                    />
                    <AcardionNumberh4>34</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Parisian Plaza"
                    />
                    <AcardionNumberh4>28</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Tokyo Tower View"
                    />
                    <AcardionNumberh4>21</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Caribbean Cove"
                    />
                    <AcardionNumberh4>18</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Swiss Alps Lodge"
                    />
                    <AcardionNumberh4>36</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="New York Cityscape"
                    />
                    <AcardionNumberh4>32</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Dubai Oasis"
                    />
                    <AcardionNumberh4>54</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Barcelona Beachfront"
                    />
                    <AcardionNumberh4>47</AcardionNumberh4>
                  </AcardionNumber>
                  <AcardionNumber>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="London Luxe"
                    />
                    <AcardionNumberh4>39</AcardionNumberh4>
                  </AcardionNumber>
                </FormGroup>
                <SeeMoreDiv>
                  <SeeMore>
                    See more <img src={NavDownArrow1} alt="NavDownArrow1" />
                  </SeeMore>
                </SeeMoreDiv>
              </AccordionDetails>
            </Accordion>
          </AllCarsLedt>
          <AllCarsRight>
            <AcardionNumber $TOP>
              <AcardionRating>
                <img src={Menu} alt="Menu" />
                <img src={List} alt="List" />
                <ToursNumber>64 Tours found</ToursNumber>
              </AcardionRating>
              <AcardionRating>
                <img src={UpDown} alt="UpDown" />
                <ChildsSortingTop>
                  <ShowSort>
                    Show: <ShowSortSpan>12</ShowSortSpan>
                  </ShowSort>
                  <img src={NavDownArrow1} alt="NavDownArrow1" />
                </ChildsSortingTop>
                <ChildsSortingTop>
                  <ShowSort>
                    Sort by: <ShowSortSpan> Newest Post</ShowSortSpan>
                  </ShowSort>
                  <img src={NavDownArrow1} alt="NavDownArrow1" />
                </ChildsSortingTop>
              </AcardionRating>
            </AcardionNumber>
            <AllCarsHrLine />
            <AllCarsChildsWrapper>
              <Link className="navLink" to={"/car=detailed-page"}>
                <FeaturedListingChild>
                  <FeatureChildTop>
                    <FeatureCarImage src={FeatureCarImg} alt="FeatureCarImg" />
                  </FeatureChildTop>
                  <FeatureChildBottom>
                    <FeatureStarDiv>
                      <img src={StartFeature} alt="StartFeature" />
                      <p>
                        4.95 <span>(672 reviews)</span>
                      </p>
                    </FeatureStarDiv>
                    <InsideChildh1>Volkswagen Golf GTD</InsideChildh1>
                    <ChildFlexDiv>
                      <img src={LocationIcon} alt="LocationIcon" />
                      <InsideChildP>New South Wales, Australia</InsideChildP>
                    </ChildFlexDiv>
                    <FeatureHrLine />
                    <ChildFlexDivJc>
                      <ChildFlexWithGap>
                        <ChildFlexDiv>
                          <img src={SppedIcon} alt="SppedIcon" />
                          <p>25,100 miles</p>
                        </ChildFlexDiv>
                        <ChildFlexDiv>
                          <img src={Fuel} alt="Fuel" />
                          <p>Diesel</p>
                        </ChildFlexDiv>
                      </ChildFlexWithGap>
                      <ChildFlexWithGap>
                        <ChildFlexDiv>
                          <img src={Gear} alt="Gear" />
                          <p>Automatic</p>
                        </ChildFlexDiv>
                        <ChildFlexDiv>
                          <img src={Seats} alt="Seats" />
                          <p>7 seats</p>
                        </ChildFlexDiv>
                      </ChildFlexWithGap>
                    </ChildFlexDivJc>
                    <ChildFlexDivJc>
                      <ChildCost>
                        $69.56 <ChildCostSpan>/ day</ChildCostSpan>
                      </ChildCost>
                      <FeatureBookingBtn>Book Now</FeatureBookingBtn>
                    </ChildFlexDivJc>
                  </FeatureChildBottom>
                </FeaturedListingChild>
              </Link>
              <FeaturedListingChild>
                <FeatureChildTop>
                  <FeatureCarImage src={FeatureCarImg} alt="FeatureCarImg" />
                </FeatureChildTop>
                <FeatureChildBottom>
                  <FeatureStarDiv>
                    <img src={StartFeature} alt="StartFeature" />
                    <p>
                      4.95 <span>(672 reviews)</span>
                    </p>
                  </FeatureStarDiv>
                  <InsideChildh1>Volkswagen Golf GTD</InsideChildh1>
                  <ChildFlexDiv>
                    <img src={LocationIcon} alt="LocationIcon" />
                    <InsideChildP>New South Wales, Australia</InsideChildP>
                  </ChildFlexDiv>
                  <FeatureHrLine />
                  <ChildFlexDivJc>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={SppedIcon} alt="SppedIcon" />
                        <p>25,100 miles</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Fuel} alt="Fuel" />
                        <p>Diesel</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={Gear} alt="Gear" />
                        <p>Automatic</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Seats} alt="Seats" />
                        <p>7 seats</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                  </ChildFlexDivJc>
                  <ChildFlexDivJc>
                    <ChildCost>
                      $69.56 <ChildCostSpan>/ day</ChildCostSpan>
                    </ChildCost>
                    <FeatureBookingBtn>Book Now</FeatureBookingBtn>
                  </ChildFlexDivJc>
                </FeatureChildBottom>
              </FeaturedListingChild>
              <FeaturedListingChild>
                <FeatureChildTop>
                  <FeatureCarImage src={FeatureCarImg} alt="FeatureCarImg" />
                </FeatureChildTop>
                <FeatureChildBottom>
                  <FeatureStarDiv>
                    <img src={StartFeature} alt="StartFeature" />
                    <p>
                      4.95 <span>(672 reviews)</span>
                    </p>
                  </FeatureStarDiv>
                  <InsideChildh1>Volkswagen Golf GTD</InsideChildh1>
                  <ChildFlexDiv>
                    <img src={LocationIcon} alt="LocationIcon" />
                    <InsideChildP>New South Wales, Australia</InsideChildP>
                  </ChildFlexDiv>
                  <FeatureHrLine />
                  <ChildFlexDivJc>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={SppedIcon} alt="SppedIcon" />
                        <p>25,100 miles</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Fuel} alt="Fuel" />
                        <p>Diesel</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={Gear} alt="Gear" />
                        <p>Automatic</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Seats} alt="Seats" />
                        <p>7 seats</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                  </ChildFlexDivJc>
                  <ChildFlexDivJc>
                    <ChildCost>
                      $69.56 <ChildCostSpan>/ day</ChildCostSpan>
                    </ChildCost>
                    <FeatureBookingBtn>Book Now</FeatureBookingBtn>
                  </ChildFlexDivJc>
                </FeatureChildBottom>
              </FeaturedListingChild>
              <FeaturedListingChild>
                <FeatureChildTop>
                  <FeatureCarImage src={FeatureCarImg} alt="FeatureCarImg" />
                </FeatureChildTop>
                <FeatureChildBottom>
                  <FeatureStarDiv>
                    <img src={StartFeature} alt="StartFeature" />
                    <p>
                      4.95 <span>(672 reviews)</span>
                    </p>
                  </FeatureStarDiv>
                  <InsideChildh1>Volkswagen Golf GTD</InsideChildh1>
                  <ChildFlexDiv>
                    <img src={LocationIcon} alt="LocationIcon" />
                    <InsideChildP>New South Wales, Australia</InsideChildP>
                  </ChildFlexDiv>
                  <FeatureHrLine />
                  <ChildFlexDivJc>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={SppedIcon} alt="SppedIcon" />
                        <p>25,100 miles</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Fuel} alt="Fuel" />
                        <p>Diesel</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={Gear} alt="Gear" />
                        <p>Automatic</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Seats} alt="Seats" />
                        <p>7 seats</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                  </ChildFlexDivJc>
                  <ChildFlexDivJc>
                    <ChildCost>
                      $69.56 <ChildCostSpan>/ day</ChildCostSpan>
                    </ChildCost>
                    <FeatureBookingBtn>Book Now</FeatureBookingBtn>
                  </ChildFlexDivJc>
                </FeatureChildBottom>
              </FeaturedListingChild>
              <FeaturedListingChild>
                <FeatureChildTop>
                  <FeatureCarImage src={FeatureCarImg} alt="FeatureCarImg" />
                </FeatureChildTop>
                <FeatureChildBottom>
                  <FeatureStarDiv>
                    <img src={StartFeature} alt="StartFeature" />
                    <p>
                      4.95 <span>(672 reviews)</span>
                    </p>
                  </FeatureStarDiv>
                  <InsideChildh1>Volkswagen Golf GTD</InsideChildh1>
                  <ChildFlexDiv>
                    <img src={LocationIcon} alt="LocationIcon" />
                    <InsideChildP>New South Wales, Australia</InsideChildP>
                  </ChildFlexDiv>
                  <FeatureHrLine />
                  <ChildFlexDivJc>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={SppedIcon} alt="SppedIcon" />
                        <p>25,100 miles</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Fuel} alt="Fuel" />
                        <p>Diesel</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={Gear} alt="Gear" />
                        <p>Automatic</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Seats} alt="Seats" />
                        <p>7 seats</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                  </ChildFlexDivJc>
                  <ChildFlexDivJc>
                    <ChildCost>
                      $69.56 <ChildCostSpan>/ day</ChildCostSpan>
                    </ChildCost>
                    <FeatureBookingBtn>Book Now</FeatureBookingBtn>
                  </ChildFlexDivJc>
                </FeatureChildBottom>
              </FeaturedListingChild>
              <FeaturedListingChild>
                <FeatureChildTop>
                  <FeatureCarImage src={FeatureCarImg} alt="FeatureCarImg" />
                </FeatureChildTop>
                <FeatureChildBottom>
                  <FeatureStarDiv>
                    <img src={StartFeature} alt="StartFeature" />
                    <p>
                      4.95 <span>(672 reviews)</span>
                    </p>
                  </FeatureStarDiv>
                  <InsideChildh1>Volkswagen Golf GTD</InsideChildh1>
                  <ChildFlexDiv>
                    <img src={LocationIcon} alt="LocationIcon" />
                    <InsideChildP>New South Wales, Australia</InsideChildP>
                  </ChildFlexDiv>
                  <FeatureHrLine />
                  <ChildFlexDivJc>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={SppedIcon} alt="SppedIcon" />
                        <p>25,100 miles</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Fuel} alt="Fuel" />
                        <p>Diesel</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={Gear} alt="Gear" />
                        <p>Automatic</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Seats} alt="Seats" />
                        <p>7 seats</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                  </ChildFlexDivJc>
                  <ChildFlexDivJc>
                    <ChildCost>
                      $69.56 <ChildCostSpan>/ day</ChildCostSpan>
                    </ChildCost>
                    <FeatureBookingBtn>Book Now</FeatureBookingBtn>
                  </ChildFlexDivJc>
                </FeatureChildBottom>
              </FeaturedListingChild>
              <FeaturedListingChild>
                <FeatureChildTop>
                  <FeatureCarImage src={FeatureCarImg} alt="FeatureCarImg" />
                </FeatureChildTop>
                <FeatureChildBottom>
                  <FeatureStarDiv>
                    <img src={StartFeature} alt="StartFeature" />
                    <p>
                      4.95 <span>(672 reviews)</span>
                    </p>
                  </FeatureStarDiv>
                  <InsideChildh1>Volkswagen Golf GTD</InsideChildh1>
                  <ChildFlexDiv>
                    <img src={LocationIcon} alt="LocationIcon" />
                    <InsideChildP>New South Wales, Australia</InsideChildP>
                  </ChildFlexDiv>
                  <FeatureHrLine />
                  <ChildFlexDivJc>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={SppedIcon} alt="SppedIcon" />
                        <p>25,100 miles</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Fuel} alt="Fuel" />
                        <p>Diesel</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={Gear} alt="Gear" />
                        <p>Automatic</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Seats} alt="Seats" />
                        <p>7 seats</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                  </ChildFlexDivJc>
                  <ChildFlexDivJc>
                    <ChildCost>
                      $69.56 <ChildCostSpan>/ day</ChildCostSpan>
                    </ChildCost>
                    <FeatureBookingBtn>Book Now</FeatureBookingBtn>
                  </ChildFlexDivJc>
                </FeatureChildBottom>
              </FeaturedListingChild>
              <FeaturedListingChild>
                <FeatureChildTop>
                  <FeatureCarImage src={FeatureCarImg} alt="FeatureCarImg" />
                </FeatureChildTop>
                <FeatureChildBottom>
                  <FeatureStarDiv>
                    <img src={StartFeature} alt="StartFeature" />
                    <p>
                      4.95 <span>(672 reviews)</span>
                    </p>
                  </FeatureStarDiv>
                  <InsideChildh1>Volkswagen Golf GTD</InsideChildh1>
                  <ChildFlexDiv>
                    <img src={LocationIcon} alt="LocationIcon" />
                    <InsideChildP>New South Wales, Australia</InsideChildP>
                  </ChildFlexDiv>
                  <FeatureHrLine />
                  <ChildFlexDivJc>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={SppedIcon} alt="SppedIcon" />
                        <p>25,100 miles</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Fuel} alt="Fuel" />
                        <p>Diesel</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                    <ChildFlexWithGap>
                      <ChildFlexDiv>
                        <img src={Gear} alt="Gear" />
                        <p>Automatic</p>
                      </ChildFlexDiv>
                      <ChildFlexDiv>
                        <img src={Seats} alt="Seats" />
                        <p>7 seats</p>
                      </ChildFlexDiv>
                    </ChildFlexWithGap>
                  </ChildFlexDivJc>
                  <ChildFlexDivJc>
                    <ChildCost>
                      $69.56 <ChildCostSpan>/ day</ChildCostSpan>
                    </ChildCost>
                    <FeatureBookingBtn>Book Now</FeatureBookingBtn>
                  </ChildFlexDivJc>
                </FeatureChildBottom>
              </FeaturedListingChild>
            </AllCarsChildsWrapper>
          </AllCarsRight>
        </AllCarsChildsContainer>
      </div>
      <AllCarsHrLine $Margin />
      <BrendsComp />
      <FooterComponent />
    </>
  );
};

export default AllCarsComp;
