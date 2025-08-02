import React from "react";
import Clock from "../../assets/FooterAssets/ClockIcon.svg";
import FaceBook from "../../assets/FooterAssets/Facebook.svg";
import Instagram from "../../assets/FooterAssets/Instagram.svg";
import Location from "../../assets/FooterAssets/locationIcon.svg";
import Mail from "../../assets/FooterAssets/Mail.svg";
import Phone from "../../assets/FooterAssets/PhoneIcon.svg";
import Twitter from "../../assets/FooterAssets/Twitter.svg";
import Youtube from "../../assets/FooterAssets/Youtube.svg";
import Logo from "../../assets/favicon.svg";
import Envelop from "../../assets/Envelop.svg";

import {
  ChildsDiv,
  EmailInput,
  EmailWrapper,
  FlexDiv,
  Footer,
  FooterBg,
  FooterBottomP,
  FooterButton,
  FooterComponents,
  FooterFlex,
  FooterRight,
  InfoP,
  Line,
  LocationInfo,
  LogoWrapper,
  NumberP,
  TagP,
} from "../../Styles/FooterStyles";

const FooterComponent = () => {
  return (
    <FooterBg>
      <div className="ContainerMini">
        <Footer>
          <FlexDiv>
            <TagP>
              Subscribe to see secret deals prices drop the moment you sign up!
            </TagP>
            <FlexDiv>
              <EmailWrapper>
                <img src={Envelop} alt="Envelop" />
                <EmailInput type="email" placeholder="Enter your email" />
              </EmailWrapper>
              <FooterButton>Subscribe</FooterButton>
            </FlexDiv>
          </FlexDiv>
          <Line $LineMB />
          <FooterFlex>
            <FooterRight>
              <LogoWrapper>
                <img src={Logo} alt="Logo" />
                <InfoP $Logo>Carento</InfoP>
              </LogoWrapper>
              <LocationInfo>
                <FooterFlex $AlignStart>
                  <img src={Location} alt="Location" />
                  <InfoP>
                    2356 Oakwood Drive, Suite 18, San Francisco, California
                    94111, US
                  </InfoP>
                </FooterFlex>
                <FooterFlex>
                  <img src={Clock} alt="Clock" />
                  <InfoP>Hours: 8:00 - 17:00, Mon - Sat</InfoP>
                </FooterFlex>
                <FooterFlex>
                  <img src={Mail} alt="Mail" />
                  <InfoP>support@carento.com</InfoP>
                </FooterFlex>
              </LocationInfo>
              <div>
                <FooterFlex $info>
                  <img src={Phone} alt="Phone" />
                  <InfoP $Green> Need help? Call us</InfoP>
                </FooterFlex>
                <NumberP>+1 222-555-33-99</NumberP>
              </div>
            </FooterRight>
            <FooterComponents>
              <ChildsDiv>
                <InfoP $childs>Company</InfoP>
                <InfoP>About Us</InfoP>
                <InfoP>Our Awards</InfoP>
                <InfoP>Agencies</InfoP>
                <InfoP>Copyright Notices</InfoP>
                <InfoP>Terms of Use</InfoP>
                <InfoP>Privacy Notice</InfoP>
                <InfoP>Lost & Found</InfoP>
              </ChildsDiv>
              <ChildsDiv>
                <InfoP $childs>Our Services</InfoP>
                <InfoP>Car Rental Services</InfoP>
                <InfoP>Vehicle Leasing Options</InfoP>
                <InfoP>Long-Term Car Rentals</InfoP>
                <InfoP>Car Sales and Trade-Ins</InfoP>
                <InfoP>Luxury Car Rentals</InfoP>
                <InfoP>Rent-to-Own Programs</InfoP>
                <InfoP>Fleet Management Solutions</InfoP>
              </ChildsDiv>
              <ChildsDiv>
                <InfoP $childs>Our Partners</InfoP>
                <InfoP>Affiliates</InfoP>
                <InfoP>Travel Agents</InfoP>
                <InfoP>AARP Members</InfoP>
                <InfoP>Points Programs</InfoP>
                <InfoP>Military & Veterans</InfoP>
                <InfoP>Work with us</InfoP>
                <InfoP>Advertise with us</InfoP>
              </ChildsDiv>
              <ChildsDiv>
                <InfoP $childs>Support</InfoP>
                <InfoP>Forum support</InfoP>
                <InfoP> Help Center</InfoP>
                <InfoP>Live chat</InfoP>
                <InfoP>How it works</InfoP>
                <InfoP>Security</InfoP>
                <InfoP>Refund Policy</InfoP>
              </ChildsDiv>
            </FooterComponents>
          </FooterFlex>
          <Line />
          <FlexDiv>
            <FooterBottomP>
              © 2024 Carento Inc. All rights reserved.
            </FooterBottomP>
            <FlexDiv>
              <FooterBottomP $Follow>Follow Us</FooterBottomP>
              <img src={Instagram} alt="Instagram" />
              <img src={FaceBook} alt="FaceBook" />
              <img src={Twitter} alt="Twitter" />
              <img src={Youtube} alt="Youtube" />
            </FlexDiv>
          </FlexDiv>
        </Footer>
      </div>
    </FooterBg>
  );
};

export default FooterComponent;
