import React from 'react'
import NavbarComponent from './Components/Navbar'
import FooterComponent from './Components/Footer'
import NOFound from "../assets/LoginAssets/NoFound.svg";
import ArrowLeft from "../assets/LeftArrow.svg";
import { ImageWrapper, NoButton, NoFoundDiv, NoH1, NoH3, NoP } from '../Styles/NoFoundStyles';

const NotFoundComponent = () => {
  return (
    <>
      <NavbarComponent />
      <div className="Container">
        <NoFoundDiv>
          <NoH1>404</NoH1>
          <NoH3>Page not found</NoH3>
          <NoP>
            Page not available. Please search again or navigate using the menu.
          </NoP>
          <NoButton>
            <img src={ArrowLeft} alt="ArrowLeft" />
            Back toHome
          </NoButton>
          <ImageWrapper src={NOFound} alt="" />
        </NoFoundDiv>
      </div>
      <FooterComponent />
    </>
  );
}

export default NotFoundComponent