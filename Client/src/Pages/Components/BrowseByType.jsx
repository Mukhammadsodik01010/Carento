import React from 'react'
import RightArrowBig from '../../assets/RightBigArrow.svg'
import Audi from '../../assets/CaruselAssets/audi.jpg'
import { BrowseButton, BrowseChild, BrowseChildsImg, BrowseChildsWrapper, BrowseFlexDiv, BrowseH1, BrowseP, Vehicles, VehicleTypes } from '../../Styles/BrowseStyles';

const BrowseByTypeComponent = () => {
    return (
      <div className="ContainerMini">
        <BrowseFlexDiv>
          <div>
            <BrowseH1>Browse by Type</BrowseH1>
            <BrowseP>Find the perfect ride for any occasion</BrowseP>
          </div>
          <BrowseButton>
            View All <img src={RightArrowBig} alt="RightArrowBig" />
          </BrowseButton>
        </BrowseFlexDiv>
        <BrowseChildsWrapper>
          <BrowseChild>
            <BrowseChildsImg src={Audi} alt="Audi" />
            <Vehicles>24 Vehicles</Vehicles>
            <VehicleTypes>Crossover</VehicleTypes>
          </BrowseChild>
          <BrowseChild>
            <BrowseChildsImg src={Audi} alt="Audi" />
            <Vehicles>24 Vehicles</Vehicles>
            <VehicleTypes>Hatchback</VehicleTypes>
          </BrowseChild>
          <BrowseChild>
            <BrowseChildsImg src={Audi} alt="Audi" />
            <Vehicles>24 Vehicles</Vehicles>
            <VehicleTypes>Sedan</VehicleTypes>
          </BrowseChild>
          <BrowseChild>
            <BrowseChildsImg src={Audi} alt="Audi" />
            <Vehicles>24 Vehicles</Vehicles>
            <VehicleTypes>SUV</VehicleTypes>
          </BrowseChild>
          <BrowseChild>
            <BrowseChildsImg src={Audi} alt="Audi" />
            <Vehicles>24 Vehicles</Vehicles>
            <VehicleTypes>Sport</VehicleTypes>
          </BrowseChild>
          <BrowseChild>
            <BrowseChildsImg src={Audi} alt="Audi" />
            <Vehicles>24 Vehicles</Vehicles>
            <VehicleTypes>Minivan</VehicleTypes>
          </BrowseChild>
        </BrowseChildsWrapper>
      </div>
    );
}

export default BrowseByTypeComponent