import React from 'react'
import CenterCar from '../../assets/Rental/car-center.png'
import RentalCar from '../../assets/Rental/RentalCar.svg'
import RentalKey from '../../assets/Rental/RentalKey.svg'
import RightArrowBig from '../../assets/RightBigArrow.svg'
import { RChildButton, RCHildH1, RChildImgWrapper, RCHildP, ReantalTop, RenatlSystemh1, RenatSystemH4, RentalBgzdiv, RentalBottom, RentalBottomLedt } from '../../Styles/RenatlSystemStyles';

const RentalSystemComp = () => {
  return (
    <RentalBgzdiv>
      <div className="ContainerMini">
        <ReantalTop>
          <RenatSystemH4>Best Car Rental System</RenatSystemH4>
          <RenatlSystemh1>
            Receive a Competitive Offer Sell Your Car to Us Today.
          </RenatlSystemh1>
        </ReantalTop>
        <RentalBottom>
          <RentalBottomLedt>
            <RChildImgWrapper>
              <img src={RentalCar} alt="RentalCar" />
            </RChildImgWrapper>
            <RCHildH1>Loking for a rental car?</RCHildH1>
            <RCHildP>
              Find your perfect rental car for any journey, from road trips to
              business travel.
            </RCHildP>
            <RChildButton>
              Get Started Now <img src={RightArrowBig} alt="RightArrowBig" />
            </RChildButton>
          </RentalBottomLedt>
          <img src={CenterCar} alt="CenterCar" />
          <RentalBottomLedt>
            <RChildImgWrapper>
              <img src={RentalKey} alt="RentalKey" />
            </RChildImgWrapper>
            <RCHildH1>Loking for a rental car?</RCHildH1>
            <RCHildP>
              Find your perfect rental car for any journey, from road trips to
              business travel.
            </RCHildP>
            <RChildButton>
              Get Started Now <img src={RightArrowBig} alt="RightArrowBig" />
            </RChildButton>
          </RentalBottomLedt>
        </RentalBottom>
      </div>
    </RentalBgzdiv>
  );
}

export default RentalSystemComp