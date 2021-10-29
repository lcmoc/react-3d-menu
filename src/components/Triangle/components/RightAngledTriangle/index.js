import React from "react";
import "../styles-button.css";
import FormulaFilter from "../FormulaFilter";
import { RightAngledTriangleType, RightAngledTriangleTitle } from "../constans";

const RightAngledTriangle = () => {
  return (
    <div className="flex items-center justify-center mb-20 flex-col mt-24">
      <h2 className="text-blue-600 text-3xl mb-7">Rechtwinkliges Dreieck</h2>

      <FormulaFilter
        title={RightAngledTriangleTitle}
        triangleType={RightAngledTriangleType}
      />
    </div>
  );
};

export default RightAngledTriangle;
