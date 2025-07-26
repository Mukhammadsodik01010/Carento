import React from "react";
import ArrrowMOst from "../../assets/Most/DownArrowBlack.svg";
import Image from '../../assets/Most/Most.jpeg'
import Star from "../../assets/Most/star.svg";
import Speed from "../../assets/Most/speed.svg";
import Gear from "../../assets/Most/Gear.svg";
import Fuel from "../../assets/Most/Fuel.svg";
import Seat from "../../assets/Most/seat.svg";
import Reload from "../../assets/Most/reload.svg";
import {
  BookButton,
  CarDetailsP,
  CarDetailsSpan,
  ChildCarName,
  CHildImgWrapper,
  FlexGap10,
  ImageRightSide,
  LeaddingCarsDiv,
  MostChild,
  MostChildHr,
  MostChildImg,
  MostChildsWrapper,
  MostDetailsWrapper,
  Mosth1,
  MOstP,
  MostPButon,
  MostPButtons,
  ReloadButton,
  ReloadButtonWrapper,
} from "../../Styles/MostSearchedStyles";

const MostSearchedComp = () => {
  return (
    <div className="ContainerMini">
      <Mosth1>Most Searched Vehicles</Mosth1>
      <LeaddingCarsDiv>
        <MOstP>The world's leading car brands</MOstP>
        <MostPButtons>
          <MostPButon>
            Categories <img src={ArrrowMOst} alt="ArrrowMOst" />
          </MostPButon>
          <MostPButon>
            Duration <img src={ArrrowMOst} alt="ArrrowMOst" />
          </MostPButon>
          <MostPButon>
            Review / Rating <img src={ArrrowMOst} alt="ArrrowMOst" />
          </MostPButon>
          <MostPButon>
            Price range <img src={ArrrowMOst} alt="ArrrowMOst" />
          </MostPButon>
        </MostPButtons>
      </LeaddingCarsDiv>
      <MostChildsWrapper>
        <MostChild>
          <CHildImgWrapper>
            <MostChildImg src={Image} alt="Image" />
          </CHildImgWrapper>
          <ImageRightSide>
            <FlexGap10>
              <img src={Star} alt="Star" />
              <CarDetailsP>
                4.95 <CarDetailsSpan>(672 reviews)</CarDetailsSpan>
              </CarDetailsP>
            </FlexGap10>
            <ChildCarName>Volvo S60 D4 R-Design</ChildCarName>
            <LeaddingCarsDiv>
              <MostDetailsWrapper>
                <FlexGap10>
                  <img src={Speed} alt="Speed" />
                  <CarDetailsP>72.491km</CarDetailsP>
                </FlexGap10>
                <FlexGap10>
                  <img src={Fuel} alt="Fuel" />
                  <CarDetailsP>Diesel</CarDetailsP>
                </FlexGap10>
              </MostDetailsWrapper>

              <MostDetailsWrapper>
                <FlexGap10>
                  <img src={Gear} alt="Gear" />
                  <CarDetailsP>Automatic</CarDetailsP>
                </FlexGap10>
                <FlexGap10>
                  <img src={Seat} alt="Seat" />
                  <CarDetailsP>2 seats</CarDetailsP>
                </FlexGap10>
              </MostDetailsWrapper>
            </LeaddingCarsDiv>
            <MostChildHr />
            <LeaddingCarsDiv>
              <ChildCarName>
                <CarDetailsSpan>From </CarDetailsSpan>
                $35.62
              </ChildCarName>
              <BookButton>Book Now</BookButton>
            </LeaddingCarsDiv>
          </ImageRightSide>
        </MostChild>
        <MostChild>
          <CHildImgWrapper>
            <MostChildImg src={Image} alt="Image" />
          </CHildImgWrapper>
          <ImageRightSide>
            <FlexGap10>
              <img src={Star} alt="Star" />
              <CarDetailsP>
                4.95 <CarDetailsSpan>(672 reviews)</CarDetailsSpan>
              </CarDetailsP>
            </FlexGap10>
            <ChildCarName>Volvo S60 D4 R-Design</ChildCarName>
            <LeaddingCarsDiv>
              <MostDetailsWrapper>
                <FlexGap10>
                  <img src={Speed} alt="Speed" />
                  <CarDetailsP>72.491km</CarDetailsP>
                </FlexGap10>
                <FlexGap10>
                  <img src={Fuel} alt="Fuel" />
                  <CarDetailsP>Diesel</CarDetailsP>
                </FlexGap10>
              </MostDetailsWrapper>

              <MostDetailsWrapper>
                <FlexGap10>
                  <img src={Gear} alt="Gear" />
                  <CarDetailsP>Automatic</CarDetailsP>
                </FlexGap10>
                <FlexGap10>
                  <img src={Seat} alt="Seat" />
                  <CarDetailsP>2 seats</CarDetailsP>
                </FlexGap10>
              </MostDetailsWrapper>
            </LeaddingCarsDiv>
            <MostChildHr />
            <LeaddingCarsDiv>
              <ChildCarName>
                <CarDetailsSpan>From </CarDetailsSpan>
                $35.62
              </ChildCarName>
              <BookButton>Book Now</BookButton>
            </LeaddingCarsDiv>
          </ImageRightSide>
        </MostChild>
        <MostChild>
          <CHildImgWrapper>
            <MostChildImg src={Image} alt="Image" />
          </CHildImgWrapper>
          <ImageRightSide>
            <FlexGap10>
              <img src={Star} alt="Star" />
              <CarDetailsP>
                4.95 <CarDetailsSpan>(672 reviews)</CarDetailsSpan>
              </CarDetailsP>
            </FlexGap10>
            <ChildCarName>Volvo S60 D4 R-Design</ChildCarName>
            <LeaddingCarsDiv>
              <MostDetailsWrapper>
                <FlexGap10>
                  <img src={Speed} alt="Speed" />
                  <CarDetailsP>72.491km</CarDetailsP>
                </FlexGap10>
                <FlexGap10>
                  <img src={Fuel} alt="Fuel" />
                  <CarDetailsP>Diesel</CarDetailsP>
                </FlexGap10>
              </MostDetailsWrapper>

              <MostDetailsWrapper>
                <FlexGap10>
                  <img src={Gear} alt="Gear" />
                  <CarDetailsP>Automatic</CarDetailsP>
                </FlexGap10>
                <FlexGap10>
                  <img src={Seat} alt="Seat" />
                  <CarDetailsP>2 seats</CarDetailsP>
                </FlexGap10>
              </MostDetailsWrapper>
            </LeaddingCarsDiv>
            <MostChildHr />
            <LeaddingCarsDiv>
              <ChildCarName>
                <CarDetailsSpan>From </CarDetailsSpan>
                $35.62
              </ChildCarName>
              <BookButton>Book Now</BookButton>
            </LeaddingCarsDiv>
          </ImageRightSide>
        </MostChild>
        <MostChild>
          <CHildImgWrapper>
            <MostChildImg src={Image} alt="Image" />
          </CHildImgWrapper>
          <ImageRightSide>
            <FlexGap10>
              <img src={Star} alt="Star" />
              <CarDetailsP>
                4.95 <CarDetailsSpan>(672 reviews)</CarDetailsSpan>
              </CarDetailsP>
            </FlexGap10>
            <ChildCarName>Volvo S60 D4 R-Design</ChildCarName>
            <LeaddingCarsDiv>
              <MostDetailsWrapper>
                <FlexGap10>
                  <img src={Speed} alt="Speed" />
                  <CarDetailsP>72.491km</CarDetailsP>
                </FlexGap10>
                <FlexGap10>
                  <img src={Fuel} alt="Fuel" />
                  <CarDetailsP>Diesel</CarDetailsP>
                </FlexGap10>
              </MostDetailsWrapper>

              <MostDetailsWrapper>
                <FlexGap10>
                  <img src={Gear} alt="Gear" />
                  <CarDetailsP>Automatic</CarDetailsP>
                </FlexGap10>
                <FlexGap10>
                  <img src={Seat} alt="Seat" />
                  <CarDetailsP>2 seats</CarDetailsP>
                </FlexGap10>
              </MostDetailsWrapper>
            </LeaddingCarsDiv>
            <MostChildHr />
            <LeaddingCarsDiv>
              <ChildCarName>
                <CarDetailsSpan>From </CarDetailsSpan>
                $35.62
              </ChildCarName>
              <BookButton>Book Now</BookButton>
            </LeaddingCarsDiv>
          </ImageRightSide>
        </MostChild>
        <MostChild>
          <CHildImgWrapper>
            <MostChildImg src={Image} alt="Image" />
          </CHildImgWrapper>
          <ImageRightSide>
            <FlexGap10>
              <img src={Star} alt="Star" />
              <CarDetailsP>
                4.95 <CarDetailsSpan>(672 reviews)</CarDetailsSpan>
              </CarDetailsP>
            </FlexGap10>
            <ChildCarName>Volvo S60 D4 R-Design</ChildCarName>
            <LeaddingCarsDiv>
              <MostDetailsWrapper>
                <FlexGap10>
                  <img src={Speed} alt="Speed" />
                  <CarDetailsP>72.491km</CarDetailsP>
                </FlexGap10>
                <FlexGap10>
                  <img src={Fuel} alt="Fuel" />
                  <CarDetailsP>Diesel</CarDetailsP>
                </FlexGap10>
              </MostDetailsWrapper>

              <MostDetailsWrapper>
                <FlexGap10>
                  <img src={Gear} alt="Gear" />
                  <CarDetailsP>Automatic</CarDetailsP>
                </FlexGap10>
                <FlexGap10>
                  <img src={Seat} alt="Seat" />
                  <CarDetailsP>2 seats</CarDetailsP>
                </FlexGap10>
              </MostDetailsWrapper>
            </LeaddingCarsDiv>
            <MostChildHr />
            <LeaddingCarsDiv>
              <ChildCarName>
                <CarDetailsSpan>From </CarDetailsSpan>
                $35.62
              </ChildCarName>
              <BookButton>Book Now</BookButton>
            </LeaddingCarsDiv>
          </ImageRightSide>
        </MostChild>
        <MostChild>
          <CHildImgWrapper>
            <MostChildImg src={Image} alt="Image" />
          </CHildImgWrapper>
          <ImageRightSide>
            <FlexGap10>
              <img src={Star} alt="Star" />
              <CarDetailsP>
                4.95 <CarDetailsSpan>(672 reviews)</CarDetailsSpan>
              </CarDetailsP>
            </FlexGap10>
            <ChildCarName>Volvo S60 D4 R-Design</ChildCarName>
            <LeaddingCarsDiv>
              <MostDetailsWrapper>
                <FlexGap10>
                  <img src={Speed} alt="Speed" />
                  <CarDetailsP>72.491km</CarDetailsP>
                </FlexGap10>
                <FlexGap10>
                  <img src={Fuel} alt="Fuel" />
                  <CarDetailsP>Diesel</CarDetailsP>
                </FlexGap10>
              </MostDetailsWrapper>

              <MostDetailsWrapper>
                <FlexGap10>
                  <img src={Gear} alt="Gear" />
                  <CarDetailsP>Automatic</CarDetailsP>
                </FlexGap10>
                <FlexGap10>
                  <img src={Seat} alt="Seat" />
                  <CarDetailsP>2 seats</CarDetailsP>
                </FlexGap10>
              </MostDetailsWrapper>
            </LeaddingCarsDiv>
            <MostChildHr />
            <LeaddingCarsDiv>
              <ChildCarName>
                <CarDetailsSpan>From </CarDetailsSpan>
                $35.62
              </ChildCarName>
              <BookButton>Book Now</BookButton>
            </LeaddingCarsDiv>
          </ImageRightSide>
        </MostChild>
      </MostChildsWrapper>
      <ReloadButtonWrapper>
        <ReloadButton>
          <img src={Reload} alt="Reload" />
          Load More Cars
        </ReloadButton>
      </ReloadButtonWrapper>
    </div>
  );
};

export default MostSearchedComp;
