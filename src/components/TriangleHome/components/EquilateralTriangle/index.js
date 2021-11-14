import "./styles.css";

import React, { useState } from "react";
import {
  nameArea,
  nameHight,
  nameScope,
  nameSideA,
  nameSideB,
  nameSideC,
  radiusValue,
} from "../../constants";

const EquilateralTriangle = () => {
  const [sideC, setSideC] = useState();
  const [sideB, setSideB] = useState();
  const [sideA, setSideA] = useState();
  const [scope, setScope] = useState(0);
  const [hight, setHight] = useState(0);
  const [area, setArea] = useState(0);

  const handleSide = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const hight = ((value / 2) * Math.sqrt(3));

    if (name && [nameSideA, nameSideB, nameSideC].includes(name)) {
      setSideC(value);
      setSideB(value);
      setSideA(value);
      setScope(value * 3);
      setHight(hight);
      setArea((value * hight) / 2);
    } else if (name === nameScope) {
      const sideLength = Math.round(value / 3);
      const currentHight = hight / 3
      setScope(value);
      setSideC(sideLength);
      setSideB(sideLength);
      setSideA(sideLength);
      setHight(currentHight);
      setArea((sideLength * currentHight) / 2);
    } else if (name === nameArea) {
      const sideLength = Math.sqrt(value * 4 / Math.sqrt(3));
      setArea(value) 
      setSideC(sideLength);
      setSideB(sideLength);
      setSideA(sideLength);
      setHight(Math.sqrt(3) / 2 * sideLength);
      setScope(sideLength * 3)
    } else if (name === nameHight) {
      const sideLength = value / Math.sqrt(3) * 2;
      setHight(value)
      setSideC(sideLength);
      setSideB(sideLength);
      setSideA(sideLength);
      setScope(sideLength * 3)
      setArea((sideLength * value) / 2);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="Triangle mt-32 mb-20">
        <input
          type="text"
          name="inputRadiusOne"
          className="InputRadiusOne bg-transparent w-10 text-center"
          value={radiusValue}
          disabled
        />
        <input
          type="text"
          name="inputRadiusTwo"
          className="InputRadiusTwo bg-transparent w-10 text-center"
          value={radiusValue}
          disabled
        />
        <input
          type="text"
          name="inputRadiusThree"
          className="InputRadiusThree bg-transparent w-10 text-center"
          value={radiusValue}
          disabled
        />
        <input
          type="text"
          name="sideC"
          className="SideC border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded"
          onChange={(event) => handleSide(event)}
          value={sideC}
        />
        <input
          type="text"
          name="sideB"
          className="SideB border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded"
          onChange={(event) => handleSide(event)}
          value={sideB}
        />
        <input
          type="text"
          name="sideA"
          className="SideA border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded"
          onChange={(event) => handleSide(event)}
          value={sideA}
        />
        <input
          type="text"
          name="hight"
          className="Hight bg-transparent focus:border-transparent w-24 text-center"
          onChange={(event) => handleSide(event)}
          value={hight}
        />
        <div className="VerticalLine"></div>
        <p className="CornerA text-2xl text-gray-500 font-bold">A</p>
        <p className="CornerB text-2xl text-gray-500 font-bold">B</p>
        <p className="CornerC text-2xl text-gray-500 font-bold">C</p>
      </div>
      <div className="flex items-center justify-center mb-32">
        <p className="text-lg text-gray-500 font-bold pr-5">
          Umfang U =
          <input
            type="text"
            name="scope"
            className="bg-transparent focus:border-transparent w-14 text-start p-1"
            onChange={(event) => handleSide(event)}
            value={scope}
          />
        </p>
        <p className="text-lg text-gray-500 font-bold">
          Fläche A =
          <input
            type="text"
            name="area"
            className="bg-transparent focus:border-transparent text-start w-14 p-1"
            onChange={(event) => handleSide(event)}
            value={area}
          />
        </p>
      </div>
    </div>
  );
};

export default EquilateralTriangle;
