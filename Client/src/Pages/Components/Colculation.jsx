import React from "react";
import ArrowLoan from "../../assets/RightBigArrow.svg";
import {
  ColBgDiv,
  ColBtn,
  ColInputs,
  ColLeft,
  ColLefth1,
  ColLeftP,
  CollResulth4,
  ColMain,
  ColResulth2,
  ColResultName,
  ColResultWrapper,
  ColRight,
  ColRightH1,
  ColRightP,
  LabelsP,
  LeftInputswrapper,
} from "../../Styles/Colculation";

const ColculationComp = () => {
  return (
    <ColBgDiv>
      <div className="ContainerMini">
        <ColMain>
          <ColLeft>
            <ColLefth1>Car Loan Calculator</ColLefth1>
            <ColLeftP>
              Estimate your monthly auto loan payments with this calculator.
            </ColLeftP>
            <LeftInputswrapper>
              <div>
                <LabelsP>Price of vehicle</LabelsP>
                <ColInputs type="text" placeholder="$20,000" />
                <LabelsP>Terms</LabelsP>
                <ColInputs type="text" placeholder="12 months" />
              </div>
              <div>
                <LabelsP>Interest rate</LabelsP>
                <ColInputs type="text" placeholder="5%" />
                <LabelsP>Down payment</LabelsP>
                <ColInputs type="text" placeholder="$12,000" />
              </div>
            </LeftInputswrapper>
            <ColResultWrapper>
              <ColResultName>
                <ColResulth2>Down payment ammout</ColResulth2>
                <ColResulth2>Amount financed</ColResulth2>
                <ColResulth2>Monthly payment</ColResulth2>
              </ColResultName>
              <ColResultName>
                <CollResulth4>$800,00</CollResulth4>
                <CollResulth4>$12,000</CollResulth4>
                <CollResulth4 $Blue>$480,00</CollResulth4>
              </ColResultName>
            </ColResultWrapper>
            <ColBtn>
              Apply for a loan <img src={ArrowLoan} alt="ArrowLoan" />
            </ColBtn>
          </ColLeft>
          <ColRight>
            <ColRightH1>Want to Calculate Your Car Payment?</ColRightH1>
            <ColRightP>
              Match with up to 4 lenders to get the lowest rate available with
              no markups, no fees, and no obligations.
            </ColRightP>
          </ColRight>
        </ColMain>
      </div>
    </ColBgDiv>
  );
};

export default ColculationComp;
