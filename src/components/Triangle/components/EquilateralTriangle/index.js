import React from "react";
import FormulaFilter from "../FormulaFilter/index";
import GleichseitgesDreieck from '../../../../assets/dreieck_gleichseitig.png'
import { EquilateralTriangleType, EquilateralTriangleTitle } from '../constans'

const EquilateralTriangle = () => {
  return (
    <div className="flex items-center justify-center mb-20 flex-col mt-24">
      <h2 className="text-blue-600 text-3xl mb-7">Gleichseitiges Dreieck</h2>
      <h3 className="text-gray-500 text-xl mb-7">
        Eigenschaften des gleichseitigen Dreiecks
      </h3>
      <div className="flex flex-row">
      <img src={GleichseitgesDreieck} alt="gleichseitiges Dreieick" />
      <ul className="text-gray-500 text-lg mb-7 flex flex-col justify-center">
        <li>Alle drei Seiten sind gleich lang</li>
        <li>Alle Winkel sind gleich groß. Jeder Winkel ist 60°.</li>
        <li>Die Seitenhalbierende, Höhen und Winkelhalbierende schneiden sich alle im Mittelpunkt.</li>
      </ul>

      </div>
      <FormulaFilter title={EquilateralTriangleTitle} triangleType={EquilateralTriangleType}/>
    </div>
  );
};

export default EquilateralTriangle;
