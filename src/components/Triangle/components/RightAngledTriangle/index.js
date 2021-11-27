import "../styles-button.css";

import { RightAngledTriangleTitle, RightAngledTriangleType } from "../constans";

import FormulaFilter from "../FormulaFilter";
import Pythagoras from "../Pythagoras";
import React from "react";
import RechtwinkligesDreieck from "../../../../assets/RechtwinkligesDreieck.svg";

const RightAngledTriangle = () => {
  return (
    <div className="flex items-center justify-center mb-20 flex-col mt-24">
      <h2 className="text-blue-600 text-3xl mb-7">Rechtwinkliges Dreieck</h2>
      <h3 className="text-gray-500 text-xl mb-7">
        Eigenschaften des rechtwinkligen Dreiecks
      </h3>
      <div className="flex flex-row">
        <img
          src={RechtwinkligesDreieck}
          alt="Rechtwinkliges Dreieck"
          className="w-80"
        />
        <ul className="text-gray-500 text-lg mb-7 flex flex-col justify-center">
          <li>Das Dreieck besitzt immer einen Rechten Winkel</li>
        </ul>
      </div>
      <FormulaFilter
        title={RightAngledTriangleTitle}
        triangleType={RightAngledTriangleType}
      />
      <Pythagoras />
    </div>
  );
};

export default RightAngledTriangle;
