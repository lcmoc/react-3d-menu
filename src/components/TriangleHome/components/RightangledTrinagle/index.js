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

const RightAngledTriangle = () => {
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
      <div className="border-black relative mt-20">
        <div className="Triangle mt-40 mb-24"></div>
        <input
          type="number"
          name="RightAngledRadiusOne"
          className="RightAngledRadiusOne bg-transparent w-10 text-center"
          value={radiusValue}
          disabled
        />
        <input
          type="number"
          name="RightAngledRadiusTwo"
          className="RightAngledRadiusTwo bg-transparent w-10 text-center"
          value={radiusValue}
          disabled
        />
        <input
          type="number"
          name="RightAngledRadiusThree"
          className="RightAngledRadiusThree bg-transparent w-10 text-center"
          value={radiusValue}
          disabled
        />
        <label htmlFor="sideB" className="InputSideC text-center">
          <input
            type="number"
            name="sideC"
            className="border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded"
            onChange={(event) => handleSide(event)}
            value={sideC}
          />
          <p className="text-lg text-gray-500 font-bold">Seite c</p>
        </label>
        <label htmlFor="sideB" className="InputSideB text-center">
          <input
            type="number"
            name="sideB"
            className="border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded appearance-none"
            onChange={(event) => handleSide(event)}
            value={sideB}
          />
          <p className="text-lg text-gray-500 font-bold">Seite b</p>
        </label>
        <label htmlFor="sideA" className="InputSideA text-center">
          <input
            type="number"
            name="sideA"
            className="border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded"
            onChange={(event) => handleSide(event)}
            value={sideA}
          />
          <p className="text-lg text-gray-500 font-bold">Seite a</p>
        </label>
        <label htmlFor="hight" className="RightAngledHight text-center">
          <p className="text-lg">Höhe h</p>
          <input
            type="number"
            name="hight"
            className="bg-transparent focus:border-transparent w-24 text-center"
            onChange={(event) => handleSide(event)}
            value={hight}
          />
        </label>
        <p className="CornerA text-2xl text-gray-500 font-bold">A</p>
        <p className="CornerB text-2xl text-gray-500 font-bold">B</p>
        <p className="CornerC text-2xl text-gray-500 font-bold">C</p>
      </div>
      <div className="flex items-center justify-center mb-32">
        <p className="text-lg text-gray-500 font-bold pr-5">
          Umfang U =
          <input
            type="number"
            name="scope"
            className="bg-transparent focus:border-transparent w-14 text-start p-1"
            onChange={(event) => handleSide(event)}
            value={scope}
          />
        </p>
        <p className="text-lg text-gray-500 font-bold">
          Fläche A =
          <input
            type="number"
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

export default RightAngledTriangle;
