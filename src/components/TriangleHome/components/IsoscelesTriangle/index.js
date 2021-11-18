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

const IsoscelesTriangle = () => {
  const [sideC, setSideC] = useState();
  const [sideB, setSideB] = useState();
  const [sideA, setSideA] = useState();
  const [scope, setScope] = useState(0);
  const [hight, setHight] = useState(0);
  const [area, setArea] = useState(0);

  const handleSide = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const hight = (value / 2) * Math.sqrt(3);

    if (name && [nameSideA, nameSideB, nameSideC].includes(name)) {
      setSideC(value);
      setSideB(value);
      setSideA(value);
      setScope(value * 3);
      setHight(hight);
      setArea((value * hight) / 2);
    } else if (name === nameScope) {
      const sideLength = Math.round(value / 3);
      const currentHight = hight / 3;
      setScope(value);
      setSideC(sideLength);
      setSideB(sideLength);
      setSideA(sideLength);
      setHight(currentHight);
      setArea((sideLength * currentHight) / 2);
    } else if (name === nameArea) {
      const sideLength = Math.sqrt((value * 4) / Math.sqrt(3));
      setArea(value);
      setSideC(sideLength);
      setSideB(sideLength);
      setSideA(sideLength);
      setHight((Math.sqrt(3) / 2) * sideLength);
      setScope(sideLength * 3);
    } else if (name === nameHight) {
      const sideLength = (value / Math.sqrt(3)) * 2;
      setHight(value);
      setSideC(sideLength);
      setSideB(sideLength);
      setSideA(sideLength);
      setScope(sideLength * 3);
      setArea((sideLength * value) / 2);
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <div className="IsoTriangle mt-40 mb-28">
        <input
          type="number"
          name="inputRadiusOne"
          className="IsoRadiusOne bg-transparent w-10 text-center"
          value={radiusValue}
          disabled
        />
        <input
          type="number"
          name="inputRadiusTwo"
          className="IsoRadiusTwo bg-transparent w-10 text-center"
          value={radiusValue}
          disabled
        />
        <input
          type="number"
          name="inputRadiusThree"
          className="IsoRadiusThree bg-transparent w-10 text-center"
          value={radiusValue}
          disabled
        />
        <label htmlFor="sideC" className="IsoSideC text-center">
          <input
            type="number"
            name="sideC"
            className="border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded"
            onChange={(event) => handleSide(event)}
            value={sideC}
          />
          <p className="text-lg text-gray-500 font-bold">Seite c</p>
        </label>
        <label htmlFor="sideB" className="IsoSideB text-center">
          <input
            type="number"
            name="sideB"
            className="border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded appearance-none"
            onChange={(event) => handleSide(event)}
            value={sideB}
          />
          <p className="text-lg text-gray-500 font-bold">Seite b</p>
        </label>
        <label htmlFor="sideA" className="IsoSideA text-center">
          <input
            type="number"
            name="sideA"
            className="border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded"
            onChange={(event) => handleSide(event)}
            value={sideA}
          />
          <p className="text-lg text-gray-500 font-bold">Seite a</p>
        </label>
        <input
          type="number"
          name="hight"
          className="IsoHight bg-transparent focus:border-transparent w-24 text-center"
          onChange={(event) => handleSide(event)}
          value={hight}
        />
        <div className="IsoVerticalLine"></div>
        <p className="IsoCornerA text-2xl text-gray-500 font-bold">A</p>
        <p className="IsoCornerB text-2xl text-gray-500 font-bold">B</p>
        <p className="IsoCornerC text-2xl text-gray-500 font-bold">C</p>
      </div>
      <div className="flex items-center justify-center ml-20 mb-32">
        <p className="text-lg text-gray-500 font-bold">
          Umfang U =
          <input
            type="number"
            name="scope"
            className="bg-transparent focus:border-transparent text-start p-1 w-24 mr-5"
            onChange={(event) => handleSide(event)}
            value={scope}
          />
        </p>
        <p className="text-lg text-gray-500 font-bold">
          Fläche A =
          <input
            type="number"
            name="area"
            className="bg-transparent focus:border-transparent text-start p-1 w-24"
            onChange={(event) => handleSide(event)}
            value={area}
          />
        </p>
      </div>
    </div>
  );
};

export default IsoscelesTriangle;
