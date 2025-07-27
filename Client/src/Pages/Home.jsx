import React from "react";
import NavbarComponent from "./Components/Navbar";
import FooterComponent from "./Components/Footer";
import SimpleSlider from "./Components/Carusel";
import BrowseByTypeComponent from "./Components/BrowseByType";
import MostSearchedComp from "./Components/MostSearched";
import RentalSystemComp from "./Components/RentalSystem";
import AddsCaruselComp from "./Components/AddCarusel";
import GlobalBranchesComp from "./Components/GlobalBranches";
import FeaturedListingComp from "./Components/FeaturedListing";
import BrendsComp from "./Components/Brends";
import AgentsComp from "./Components/Agents";
import ColculationComp from "./Components/Colculation";
import TheySayComp from "./Components/TheySay";


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
      <GlobalBranchesComp />
      <FeaturedListingComp />
      <BrendsComp />
      <AgentsComp />
      <ColculationComp />
      <TheySayComp/>
      <FooterComponent />
    </>
  );
};

export default HomeComponent;
