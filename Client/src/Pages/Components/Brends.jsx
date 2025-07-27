import React from 'react'

import ArrowBtn from "../../assets/RightBigArrow.svg";
import Opel from '../../assets/BrendsAssets/Opel.svg'
import { FeatureListing, FeatureListingBtn, FeatureListingP, FeatureListingWTop } from '../../Styles/FeaturedListing';
import { BrandsBottom, BrandsChild, Brandsh1, BrandsImage, BrandsP, BrandsWrapper } from '../../Styles/BrendsStyles';

const BrendsComp = () => {
  return (
    <BrandsWrapper>
      <div className="ContainerMini">
        <FeatureListingWTop style={{ marginTop: "0" }}>
          <div>
            <FeatureListing>Premium Brands</FeatureListing>
            <FeatureListingP>
              Unveil the Finest Selection of High-End Vehicles
            </FeatureListingP>
          </div>
          <FeatureListingBtn>
            Show All Brands <img src={ArrowBtn} alt="ArrowBtn" />
          </FeatureListingBtn>
        </FeatureListingWTop>
            <BrandsBottom>
              <BrandsChild>
                <BrandsImage src={Opel} alt="Opel" />
                <Brandsh1>Opel</Brandsh1>
                <BrandsP>180 cars</BrandsP>
              </BrandsChild>
              <BrandsChild>
                <BrandsImage src={Opel} alt="Opel" />
                <Brandsh1>Opel</Brandsh1>
                <BrandsP>180 cars</BrandsP>
              </BrandsChild>
              <BrandsChild>
                <BrandsImage src={Opel} alt="Opel" />
                <Brandsh1>Opel</Brandsh1>
                <BrandsP>180 cars</BrandsP>
              </BrandsChild>
              <BrandsChild>
                <BrandsImage src={Opel} alt="Opel" />
                <Brandsh1>Opel</Brandsh1>
                <BrandsP>180 cars</BrandsP>
              </BrandsChild>
              <BrandsChild>
                <BrandsImage src={Opel} alt="Opel" />
                <Brandsh1>Opel</Brandsh1>
                <BrandsP>180 cars</BrandsP>
              </BrandsChild>
              <BrandsChild>
                <BrandsImage src={Opel} alt="Opel" />
                <Brandsh1>Opel</Brandsh1>
                <BrandsP>180 cars</BrandsP>
              </BrandsChild>
              <BrandsChild>
                <BrandsImage src={Opel} alt="Opel" />
                <Brandsh1>Opel</Brandsh1>
                <BrandsP>180 cars</BrandsP>
              </BrandsChild>
              <BrandsChild>
                <BrandsImage src={Opel} alt="Opel" />
                <Brandsh1>Opel</Brandsh1>
                <BrandsP>180 cars</BrandsP>
              </BrandsChild>
              <BrandsChild>
                <BrandsImage src={Opel} alt="Opel" />
                <Brandsh1>Opel</Brandsh1>
                <BrandsP>180 cars</BrandsP>
              </BrandsChild>
            </BrandsBottom>
         
      </div>
    </BrandsWrapper>
  );
}

export default BrendsComp;