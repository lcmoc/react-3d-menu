import { IsoscelesTriangleTitle, IsoscelesTriangleType } from '../constans'

import FormulaFilter from "../FormulaFilter/index";
import GleichschenkligesDreieck from '../../../../assets/GleichschenkligesDreieck.png'
import React from "react";

const IsoscelesTriangle = () => {
  return (
    <div className="flex items-center justify-center mb-20 flex-col mt-24">
      <h2 className="text-blue-600 text-3xl mb-7">Gleichschenkliges Dreieck</h2>
      <h3 className="text-gray-500 text-xl mb-7">
        Eigenschaften des gleichschenkligen Dreiecks
      </h3>
      <div className="flex flex-row">
      <img src={GleichschenkligesDreieck} alt="gleichseitiges Dreieick" />
      <ul className="text-gray-500 text-lg mb-7 flex flex-col justify-center">
        <li>Zwei Seiten sind gleich lang</li>
        <li>somit sind auch zwei Winkel gleich gross</li>
      </ul>

      </div>
      <FormulaFilter title={IsoscelesTriangleTitle} triangleType={IsoscelesTriangleType}/>
    </div>
  );
};

export default IsoscelesTriangle;
