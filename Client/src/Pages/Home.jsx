import React from "react";
import NavbarComponent from "./Components/Navbar";
import FooterComponent from "./Components/Footer";
import SimpleSlider from "./Components/Carusel";
import BrowseByTypeComponent from "./Components/BrowseByType";
import MostSearchedComp from "./Components/MostSearched";
import RentalSystemComp from "./Components/RentalSystem";
import AddsCaruselComp from "./Components/AddCarusel";
import GlobalBranchesComp from "./Components/GlobalBranches";


const HomeComponent = () => {
  return (
    <>
      <NavbarComponent />
      <SimpleSlider />
      <BrowseByTypeComponent />
      <hr className="Hrline" />
      <MostSearchedComp />
      <RentalSystemComp />
      <AddsCaruselComp />
      <GlobalBranchesComp/>
      <FooterComponent />
    </>
  );
};

export default HomeComponent;
