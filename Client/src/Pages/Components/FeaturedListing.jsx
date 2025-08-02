import React from "react";
import ArrowBtn from "../../assets/RightBigArrow.svg";
import FeatureCarImg from "../../assets/FeatureCar.jpg";
import LocationIcon from "../../assets/locationBlack.svg";
import SppedIcon from '../../assets/Most/speed.svg'
import Gear from '../../assets/Most/Gear.svg'
import Fuel from '../../assets/Most/Fuel.svg'
import Seats from '../../assets/Most/seat.svg'
import StartFeature from "../../assets/Most/star.svg";
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
  FeaturedListingChild,
  FeatureHrLine,
  FeatureListing,
  FeatureListingBottom,
  FeatureListingBtn,
  FeatureListingP,
  FeatureListingWTop,
  FeatureStarDiv,
  InsideChildh1,
  InsideChildP,
} from "../../Styles/FeaturedListing";
import { Link } from "react-router-dom";

const FeaturedListingComp = () => {
  return (
    <div className="ContainerMini">
      <FeatureListingWTop>
        <div>
          <FeatureListing>Featured Listings</FeatureListing>
          <FeatureListingP>
            Find the perfect ride for any occasion
          </FeatureListingP>
        </div>
        <Link to={"/car-details"} className="navLink">
          <FeatureListingBtn>
            View More <img src={ArrowBtn} alt="ArrowBtn" />
          </FeatureListingBtn>
        </Link>
      </FeatureListingWTop>
      <FeatureListingBottom>
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
      </FeatureListingBottom>
    </div>
  );
};

export default FeaturedListingComp;
