import React from "react";
import {
  AddsBotttomdiv,
  AddsBotomNumber,
  AddsBotomP,
  AddsBottomChild,
} from "../../Styles/GlobalBranches";

const GlobalBranchesComp = () => {
  return (
    <div className="ContainerMini">
      <AddsBotttomdiv>
        <AddsBottomChild>
          <AddsBotomNumber>45+</AddsBotomNumber>
          <AddsBotomP>Global Branches</AddsBotomP>
        </AddsBottomChild>
        <AddsBottomChild>
          <AddsBotomNumber>29K</AddsBotomNumber>
          <AddsBotomP>Destinations Collaboration</AddsBotomP>
        </AddsBottomChild>
        <AddsBottomChild>
          <AddsBotomNumber>20+</AddsBotomNumber>
          <AddsBotomP>Years Experience</AddsBotomP>
        </AddsBottomChild>
        <AddsBottomChild>
          <AddsBotomNumber>168K</AddsBotomNumber>
          <AddsBotomP>Happy Customers</AddsBotomP>
        </AddsBottomChild>
        <AddsBottomChild>
          <AddsBotomNumber>15M</AddsBotomNumber>
          <AddsBotomP>User Accounts</AddsBotomP>
        </AddsBottomChild>
      </AddsBotttomdiv>
    </div>
  );
};

export default GlobalBranchesComp;
