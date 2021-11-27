import "./styles.css";

import React, { useEffect, useState } from "react";
import {
  nameArea,
  nameHight,
  nameRadiusAlpha,
  nameRadiusBeta,
  nameRadiusGamma,
  nameScope,
  nameSideA,
  nameSideB,
  nameSideC,
  powerOfTwo,
  round,
  wholeRadius,
} from "../../constants";

import Navigation from "../Navigation";
import classNames from "classnames";

const IsoscelesTriangle = () => {
  const [dimensions, setDimensions] = useState({});
  const [radiusDimensions, setRadiusDimensions] = useState({});
  const [scope, setScope] = useState();
  const [hight, setHight] = useState();
  const [area, setArea] = useState();

  const handleSides = (event) => {
    const value = event?.target?.value;
    const name = event?.target?.name;
    
    if ([nameSideA, nameSideB].includes(name)) {
      setDimensions({ ...dimensions, a: value, b: value });
    } else if (name === nameSideC && value !== dimensions.a) {
      setDimensions({ ...dimensions, c: value });
      handleSides();
    } else if (area && hight) {
      setDimensions({ ...dimensions, c: (area * 2) / hight });
    } else if (scope && dimensions.c) {
      const currenValue = (scope - dimensions.c) / 2;
      setDimensions({a: currenValue, b: currenValue})
    }
  };

  const handleRadius = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if ([nameRadiusAlpha, nameRadiusBeta].includes(name)) {
      setRadiusDimensions({
        alpha: value,
        beta: value,
        gamma: wholeRadius - value * 2,
      });
    } else if (name === nameRadiusGamma) {
      const radiusAB = (wholeRadius - value) / 2;
      setRadiusDimensions({ alpha: radiusAB, beta: radiusAB, gamma: value });
    }
  };

  const calculateHight = () => {
    if (dimensions.a && dimensions.c) {
      setHight(
        round(
          Math.sqrt(
            (4 * powerOfTwo(dimensions.a) - powerOfTwo(dimensions.c)) / 4
          )
        )
      );
    } else if (dimensions.c && area) {
      setHight(round((area * 2) / dimensions.c));
    }
  };

  const calculateArea = (value, name) => {
    if (name === nameArea) {
      setArea(value);
      calculateHight();
      handleSides();
    } else if (dimensions.c && hight) {
      setArea(round((hight * dimensions.c) / 2));
    }
  };

  const handleScope = (value, name) => {
    if (name === nameScope) {
      handleSides();
      setScope(value);
    } else if (dimensions.a && dimensions.c) {
      setScope(round(dimensions.a * 2 + parseInt(dimensions.c, 10)));
    }
  };

  useEffect(() => {
    if (dimensions.a || dimensions.c || dimensions.b) {
      calculateHight();
      calculateArea();
      handleScope();
    }
  }, [dimensions.a, dimensions.b, dimensions.c]);

  const handleCalculations = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if ([nameSideA, nameSideB, nameSideC].includes(name)) {
      handleSides(event);
    } else if (
      [nameRadiusAlpha, nameRadiusBeta, nameRadiusGamma].includes(name)
    ) {
      handleRadius(event);
    } else if (name === nameArea) {
      calculateArea(value, name);
    } else if (name === nameScope) {
      handleScope(value, name);
    }
  };

  return (
    <div className="MainContainer">
      <h2 className="text-blue-400 text-4xl mt-40">
        Gleichschenkliges Dreieck
      </h2>
      <div className="IsoTriangle mt-32 mb-28">
        <input
          type="number"
          namee={nameRadiusGamma}
          className="IsoRadiusOne bg-transparent w-10 text-center text-white placeholder-white"
          value={radiusDimensions.gamma}
          onChange={(event) => handleCalculations(event)}
          placeholder="0"
        />
        <input
          type="number"
          name={nameRadiusAlpha}
          className="IsoRadiusTwo bg-transparent w-10 text-center text-white placeholder-white"
          value={radiusDimensions.alpha}
          onChange={(event) => handleCalculations(event)}
          placeholder="0"
        />
        <input
          type="number"
          name={nameRadiusBeta}
          className="IsoRadiusThree bg-transparent w-10 text-center text-white placeholder-white"
          value={radiusDimensions.beta}
          onChange={(event) => handleCalculations(event)}
          placeholder="0"
        />
        <label htmlFor={nameSideC} className="IsoSideC text-center">
          <input
            type="number"
            name={nameSideC}
            className="border border-gray-500 bg-transparent w-24 text-center rounded"
            onChange={(event) => {
              handleCalculations(event);
            }}
            value={dimensions.c}
          />
          <p
            className="text-lg text-gray-500 font-bold"
          >
            Seite c
          </p>
        </label>
        <label htmlFor={nameSideB} className="IsoSideB text-center">
          <input
            type="number"
            name={nameSideB}
            className= "border border-gray-500 bg-transparent w-24 text-center rounded"
            onChange={(event) => handleCalculations(event)}
            value={dimensions.b}
          />
          <p
            className="text-lg text-gray-500 font-bold"
          >
            Seite b
          </p>
        </label>
        <label htmlFor={nameSideA} className="IsoSideA text-center">
          <input
            type="number"
            name={nameSideA}
            className={classNames(
              "border border-gray-500 bg-transparent w-24 text-center rounded",
            )}
            onChange={(event) => handleCalculations(event)}
            value={dimensions.a}
          />
          <p
            className="text-lg text-gray-500 font-bold"
          >
            Seite a
          </p>
        </label>
        <input
          type="number"
          name="hight"
          className="IsoHight bg-transparent focus:border-transparent w-24 text-center text-white"
          onChange={(event) => handleCalculations(event)}
          value={hight}
        />
        <div className="IsoVerticalLine"></div>
        <p className="IsoCornerA text-2xl text-gray-500 font-bold">A</p>
        <p className="IsoCornerC text-2xl text-gray-500 font-bold">C</p>
        <p className="IsoCornerB text-2xl text-gray-500 font-bold">B</p>
      </div>
      <div className="flex items-center justify-center ml-20 mb-10">
        <p className="text-lg text-gray-500 font-bold">
          Umfang U =
          <input
            type="number"
            name={nameScope}
            className="bg-transparent focus:border-transparent text-start p-1 w-24 mr-5"
            onChange={(event) => handleCalculations(event)}
            value={scope}
          />
        </p>
        <p className="text-lg text-gray-500 font-bold">
          Fläche A =
          <input
            type="number"
            name="area"
            className="bg-transparent focus:border-transparent text-start p-1 w-24"
            onChange={(event) => handleCalculations(event)}
            value={area}
          />
        </p>
      </div>
      <p className="text-lg text-red-500 font-bold mb-20"></p>
      <Navigation linkNext="gleichseitigesdreieck"/>
    </div>
  );
};

export default IsoscelesTriangle;
