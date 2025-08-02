import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Opel from "../../assets/BrendsAssets/Opel.svg";
import CarImgMain from "../../assets/CarDetaildMain.webp";
import TickImage from "../../assets/Tick.svg";
import {
  AllBrendsDiv,
  AllBrendsH1,
  AllBrendsMain,
  AllBrendsP,
} from "../../Styles/AllBrendsStyles";
import {
  AcardionOverview,
  AcardioTitle,
} from "../../Styles/CarDetailedPageStyles";
import {
  AboutDealer,
  Dealerhrline,
  DealerImageName,
  DealerImg,
  DealerLeft,
  DealerMain,
  DealerName,
  DealerNameh1,
  DealerNameh3,
  DealerNameP,
  DealerRight,
  DealerServices,
  DealerServicesChild,
  DealerServicesChildInside,
  LeftSideImg,
  RightSideImages,
} from "../../Styles/DealerDetailsStyles";

const DealerDetailsComp = () => {
  return (
    <>
      <AllBrendsMain>
        <AllBrendsDiv className="ContainerMini">
          <AllBrendsH1> Peugeot Sheffield</AllBrendsH1>
          <AllBrendsP>Since 2012</AllBrendsP>
        </AllBrendsDiv>
      </AllBrendsMain>
      <div className="ContainerMini">
        <DealerMain>
          <DealerLeft>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <AcardioTitle component="span">Overview</AcardioTitle>
              </AccordionSummary>
              <AccordionDetails>
                <DealerImageName>
                  <DealerImg src={Opel} alt="Opel" />
                  <DealerName>
                    <DealerNameh1>Peugeot Sheffield</DealerNameh1>
                    <DealerNameh3>
                      123 Kingsway Strandeif, Manchester, M19 2XS
                    </DealerNameh3>
                    <DealerNameP>180 Vehicles</DealerNameP>
                  </DealerName>
                </DealerImageName>
                <Dealerhrline />
                <AboutDealer>
                  At Peugeot Sheffield, we pride ourselves on delivering
                  exceptional service and a wide selection of high-quality
                  vehicles to meet all your driving needs. Located in the heart
                  of Sheffield on Arundel Gate, our dealership offers a
                  comprehensive range of new and pre-owned Peugeot models, each
                  meticulously inspected to ensure top performance and
                  reliability.
                </AboutDealer>
                <AboutDealer>
                  Whether you’re looking for a stylish hatchback, a versatile
                  SUV, or a family-friendly car, our expert team is here to
                  guide you through every step of the purchasing process,
                  providing personalized advice and support. With our commitment
                  to customer satisfaction, you can trust Peugeot Sheffield to
                  find the perfect vehicle for you.
                </AboutDealer>
                <DealerMain $Images>
                  <LeftSideImg src={CarImgMain} alt="CarImgMain" />
                  <DealerName>
                    <RightSideImages src={CarImgMain} alt="CarImgMain" />
                    <RightSideImages src={CarImgMain} alt="CarImgMain" />
                  </DealerName>
                </DealerMain>
              </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <AcardioTitle component="span">Services</AcardioTitle>
              </AccordionSummary>
              <AccordionDetails>
                <DealerServices>
                  <DealerServicesChild>
                    <DealerServicesChildInside>
                      <img src={TickImage} alt="TickImage" />
                      <p>
                        Exclusive new vehicle sales with customization options
                      </p>
                    </DealerServicesChildInside>
                    <DealerServicesChildInside>
                      <img src={TickImage} alt="TickImage" />
                      <p>
                        Exclusive new vehicle sales with customization options
                      </p>
                    </DealerServicesChildInside>
                    <DealerServicesChildInside>
                      <img src={TickImage} alt="TickImage" />
                      <p>
                        Exclusive new vehicle sales with customization options
                      </p>
                    </DealerServicesChildInside>
                    <DealerServicesChildInside>
                      <img src={TickImage} alt="TickImage" />
                      <p>
                        Exclusive new vehicle sales with customization options
                      </p>
                    </DealerServicesChildInside>
                    <DealerServicesChildInside>
                      <img src={TickImage} alt="TickImage" />
                      <p>
                        Exclusive new vehicle sales with customization options
                      </p>
                    </DealerServicesChildInside>
                  </DealerServicesChild>
                  <DealerServicesChild>
                    <DealerServicesChildInside>
                      <img src={TickImage} alt="TickImage" />
                      <p>
                        Exclusive new vehicle sales with customization options
                      </p>
                    </DealerServicesChildInside>
                    <DealerServicesChildInside>
                      <img src={TickImage} alt="TickImage" />
                      <p>
                        Exclusive new vehicle sales with customization options
                      </p>
                    </DealerServicesChildInside>
                    <DealerServicesChildInside>
                      <img src={TickImage} alt="TickImage" />
                      <p>
                        Exclusive new vehicle sales with customization options
                      </p>
                    </DealerServicesChildInside>
                    <DealerServicesChildInside>
                      <img src={TickImage} alt="TickImage" />
                      <p>
                        Exclusive new vehicle sales with customization options
                      </p>
                    </DealerServicesChildInside>
                  </DealerServicesChild>
                </DealerServices>
              </AccordionDetails>
            </Accordion>
          </DealerLeft>
          <DealerRight> cscfs</DealerRight>
        </DealerMain>
      </div>
    </>
  );
};

export default DealerDetailsComp;
