import './styles.css';

import React, { useState } from 'react';
import {
  nameArea,
  nameRightAngledRadiusOne,
  nameRightAngledRadiusThree,
  nameScope,
  nameSideA,
  nameSideB,
  nameSideC,
  rightAngledRadius,
  round,
  wholeRadius,
} from '../../constants';

import Navigation from '../Navigation'

const RightAngledTriangle = () => {
  const [dimensions, setDimensions] = useState({});
  const [scope, setScope] = useState();
  const [area, setArea] = useState();
  const [hight, setHight] = useState(0);
  const [radiusOne, setRadiusOne] = useState(0);
  const [radiusThree, setRadiusThree] = useState(0);
  const [error, setError] = useState();
  const handleSides = (event) => {
    const value = event?.target?.value;
    const name = event?.target?.name;
    const hight = (value / 2) * Math.sqrt(2);
    const pythagoras = Math.sqrt(Math.pow(value, 2) + Math.pow(value, 2));
    const masaha = round((nameSideB * nameSideC) / 2);

    if ([nameSideB && nameSideC].includes(name)) {
      setDimensions({ ...dimensions, a: pythagoras });
      setArea((value * 4.5) / 2);
      setScope(value * 4);
      setHight(hight);
    } else if ([nameSideC && nameSideB].includes(name)) {
      setDimensions({ ...dimensions, a: pythagoras });
      setArea(masaha);
      setScope(value * 4);
      setHight(hight);
      setArea((value * 4.5) / 2);
      handleSides();
    }
  };

  const handleCalculations = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    if ([nameSideB, nameSideC].includes(name)) {
      handleSides(event);
    } else if (name === nameArea) {
    } else if (name === nameScope) {
    }
  };
  const handleRadius = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    const isToSmall = value > 0 ? true : false;
    const isToBig = value < 89 ? true : false;

    if (name === nameRightAngledRadiusOne) {
      setRadiusOne(value);
      if (isToSmall && isToBig) {
        setError('');
        setRadiusThree(wholeRadius - rightAngledRadius - value);
      } else if (!isToSmall) {
        setError('Der obere Radius ist zu klein');
      } else if (!isToBig) {
        setError('Der obere Radius ist zu gross');
      }
    } else if (name === nameRightAngledRadiusThree) {
      setRadiusThree(value);
      setError("");
      if (isToSmall && isToBig) {
        setError("");
        setRadiusOne(wholeRadius - rightAngledRadius - value);
      } else if (!isToSmall) {
        setError('Der untere Radius ist zu klein');
      } else if (!isToBig) {
        setError('Der untere Radius ist zu gross');
      }
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <h2 className="text-blue-400 text-4xl mt-40">Rechtwinkliges Dreieck</h2>
      <div className="border-black relative mt-20">
        <div className="Triangle mt-40 mb-24"></div>
        <input
          type="number"
          name="RightAngledRadiusOne"
          className="RightAngledRadiusOne bg-transparent w-10 text-center"
          value={radiusOne}
          onChange={(event) => handleRadius(event)}
        />
        <input
          type="number"
          name="RightAngledRadiusTwo"
          className="RightAngledRadiusTwo bg-transparent w-10 text-center"
          value={rightAngledRadius}
          disabled
        />
        <input
          type="number"
          name="RightAngledRadiusThree"
          className="RightAngledRadiusThree bg-transparent w-10 text-center"
          value={radiusThree}
          onChange={(event) => handleRadius(event)}
        />
        <label htmlFor={nameSideC} className="InputSideC text-center">
          <input
            type="number"
            name={nameSideC}
            className="border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded"
            onChange={(event) => handleCalculations(event)}
            value={dimensions.c}
          />
          <p className="text-lg text-gray-500 font-bold">Seite c</p>
        </label>
        <label htmlFor={nameSideB} className="InputSideB text-center">
          <input
            type="number"
            name={nameSideB}
            className="border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded appearance-none"
            onChange={(event) => handleCalculations(event)}
            value={dimensions.b}
          />
          <p className="text-lg text-gray-500 font-bold">Seite b</p>
        </label>
        <label htmlFor={nameSideA} className="InputSideA text-center">
          <input
            type="number"
            name={nameSideA}
            className="border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded"
            onChange={(event) => handleCalculations(event)}
            value={dimensions.a}
          />
          <p className="text-lg text-gray-500 font-bold">Seite a</p>
        </label>
        <label htmlFor="hight" className="RightAngledHight text-center">
          <p className="text-lg">Höhe h</p>

          <input
            type="number"
            name="hight"
            className="bg-transparent focus:border-transparent w-24 text-center"
            onChange={(event) => handleCalculations(event)}
            $
            value={hight}
          />
        </label>
        <p className="CornerA text-2xl text-gray-500 font-bold">A</p>
        <p className="CornerB text-2xl text-gray-500 font-bold">B</p>
        <p className="CornerC text-2xl text-gray-500 font-bold">C</p>
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
      <p className="text-lg text-red-500 font-bold mb-24">{error}</p>
      <Navigation linkPrev="gleichseitigesdreieck"/>
    </div>
  );
};

export default RightAngledTriangle;
