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
  wholeRadius,
} from "../../constants";

import classNames from "classnames";

const IsoscelesTriangle = () => {
  const [dimensions, setDimensions] = useState({});
  const [radiusDimensions, setRadiusDimensions] = useState({});
  const [scope, setScope] = useState(0);
  const [hight, setHight] = useState(10);
  const [area, setArea] = useState(0);
  const [errorSides, setErrorSides] = useState();

  const powerOfTwo = (number) => {
    return Math.pow(number, 2);
  };

  const handleSides = (event) => {
    const value = event?.target?.value;
    const name = event?.target?.name;

    if ([nameSideA, nameSideB].includes(name)) {
      setDimensions({ ...dimensions, a: value, b: value });
    } else if (name === nameSideC && value !== dimensions.a) {
      setDimensions({ ...dimensions, c: value });
    } else if(area && hight) {
      setDimensions({...dimensions, c: area * 2 / hight})
    } else {
      setErrorSides(
        "Die Seite C darf nicht so gross sein wie die Seiten A und B"
      );
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
        Math.sqrt((4 * powerOfTwo(dimensions.a) - powerOfTwo(dimensions.c)) / 4)
      );
    } else if (dimensions.c && area) {
      setHight((area * 2) / dimensions.c);
    }
  };

  const calculateArea = (value, name) => {
    if (name === nameArea) {
      setArea(value);
      calculateHight();
      handleSides();
    } else if (dimensions.c && hight) {
      setArea((hight * dimensions.c) / 2);
    }
  };

  useEffect(() => {
    if (dimensions.a || dimensions.c || dimensions.b) {
      calculateHight();
      calculateArea();
      setScope(dimensions.a * 2 + parseInt(dimensions.c, 10));
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
          name={nameRadiusGamma}
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
            className={classNames(
              "border border-gray-500 bg-transparent w-24 text-center rounded",
              {
                "border-red-500 focus:border-red-500 text-red-500": errorSides,
              }
            )}
            onChange={(event) => {
              handleCalculations(event);
            }}
            value={dimensions.c}
          />
          <p
            className={classNames("text-lg text-gray-500 font-bold", {
              "text-red-500": errorSides,
            })}
          >
            Seite c
          </p>
        </label>
        <label htmlFor={nameSideB} className="IsoSideB text-center">
          <input
            type="number"
            name={nameSideB}
            className={classNames(
              "border border-gray-500 bg-transparent w-24 text-center rounded",
              {
                "border-red-500 focus:border-red-500 text-red-500": errorSides,
              }
            )}
            onChange={(event) => handleCalculations(event)}
            value={dimensions.b}
          />
          <p
            className={classNames("text-lg text-gray-500 font-bold", {
              "text-red-500": errorSides,
            })}
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
              {
                "border-red-500 focus:border-red-500 text-red-500": errorSides,
              }
            )}
            onChange={(event) => handleCalculations(event)}
            value={dimensions.a}
          />
          <p
            className={classNames("text-lg text-gray-500 font-bold", {
              "text-red-500": errorSides,
            })}
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
      <p className="text-lg text-red-500 font-bold mb-20">{errorSides}</p>
    </div>
  );
};

export default IsoscelesTriangle;
