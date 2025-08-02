import React from 'react'
import Location from '../../assets/HowItWorksAssets/ChooseLocation.svg'
import Vehicle from '../../assets/HowItWorksAssets/ChooseVehicle.svg'
import Verification from '../../assets/HowItWorksAssets/Verification.svg'
import Journey from "../../assets/HowItWorksAssets/BeginJourney.svg";
import { HowBottom, HowBottomChild, HowBottomH2, HowBottomP, HowH3, HowMainDiv, HowP } from '../../Styles/HowItWorksStyles';

const HowItWorksComp = () => {
  return (
    <div className="ContainerMini">
      <HowMainDiv>
        <HowP>HOW IT WORKS</HowP>
        <HowH3>Presenting Your New Go-To Car Rental Experience</HowH3>
        <HowBottom>
          <HowBottomChild>
            <img src={Location} alt="Location" />
            <HowBottomH2>Choose a Location</HowBottomH2>
            <HowBottomP>
              Select the ideal destination to begin your journey with ease
            </HowBottomP>
          </HowBottomChild>
          <HowBottomChild>
            <img src={Vehicle} alt="Vehicle" />
            <HowBottomH2>Choose Your Vehicle</HowBottomH2>
            <HowBottomP>
              Browse our fleet and find the perfect car for your needs
            </HowBottomP>
          </HowBottomChild>
          <HowBottomChild>
            <img src={Verification} alt="Verification" />
            <HowBottomH2>Verification</HowBottomH2>
            <HowBottomP>
              Review your information and confirm your booking
            </HowBottomP>
          </HowBottomChild>
          <HowBottomChild>
            <img src={Journey} alt="Journey" />
            <HowBottomH2>Begin Your Journey</HowBottomH2>
            <HowBottomP>
              Start your adventure with confidence and ease
            </HowBottomP>
          </HowBottomChild>
        </HowBottom>
      </HowMainDiv>
    </div>
  );
}

export default HowItWorksComp;