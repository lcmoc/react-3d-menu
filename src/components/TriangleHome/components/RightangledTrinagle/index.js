import "./styles.css";

import React, { useEffect, useState } from "react";
import {
  nameArea,
  nameRightAngledRadiusOne,
  nameRightAngledRadiusThree,
  nameScope,
  nameSideA,
  nameSideB,
  nameSideC,
  powerOfTwo,
  rightAngledRadius,
  round,
  wholeRadius,
} from "../../constants";

import Navigation from "../Navigation";

const RightAngledTriangle = () => {
  const [scope, setScope] = useState();
  const [area, setArea] = useState();
  const [hight, setHight] = useState(0);
  const [radiusOne, setRadiusOne] = useState(0);
  const [radiusThree, setRadiusThree] = useState(0);
  const [error, setError] = useState();
  const [lengths, setLengths] = useState({});

  const handleSides = (event) => {
    const value = event?.target?.value;
    const name = event?.target?.name;
    const hight = (value / 2) * Math.sqrt(2);

    const pythagoras = ( a, b, c ) => {
      if(a && b) {
        return Math.sqrt(powerOfTwo(a) + powerOfTwo(b));
      } else if (a && c) {
        return Math.sqrt(Math.pow(c) - Math.pow(a))
      } else if(b && c) {
        return Math.sqrt(Math.pow(c) - Math.pow(b))
      }
    } 

    if (name === nameSideA) {
      setLengths({ ...lengths, a: value });
    } else if (name === nameSideB) {
      setLengths({ ...lengths, b: value });
    } else if (name === nameSideC) {
      setLengths({ ...lengths, c: value });
    }

    if(lengths.a && lengths.b) {
      setLengths({...lengths, c: pythagoras(lengths.a, lengths.b, null)});
    } else if(lengths.c && lengths.a) {
      setLengths({...lengths, b: pythagoras(lengths.a, null, lengths.c)});
    } else if(lengths.c && lengths.b) {
      setLengths({...lengths, a: pythagoras(null, lengths.b, lengths.c)});
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
        setError("");
        setRadiusThree(wholeRadius - rightAngledRadius - value);
      } else if (!isToSmall) {
        setError("Der obere Radius ist zu klein");
      } else if (!isToBig) {
        setError("Der obere Radius ist zu gross");
      }
    } else if (name === nameRightAngledRadiusThree) {
      setRadiusThree(value);
      setError("");
      if (isToSmall && isToBig) {
        setError("");
        setRadiusOne(wholeRadius - rightAngledRadius - value);
      } else if (!isToSmall) {
        setError("Der untere Radius ist zu klein");
      } else if (!isToBig) {
        setError("Der untere Radius ist zu gross");
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
            onChange={(event) => handleSides(event)}
            value={lengths.c}
          />
          <p className="text-lg text-gray-500 font-bold">Seite c</p>
        </label>
        <label htmlFor={nameSideB} className="InputSideB text-center">
          <input
            type="number"
            name={nameSideB}
            className="border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded appearance-none"
            onChange={(event) => handleSides(event)}
            value={lengths.b}
          />
          <p className="text-lg text-gray-500 font-bold">Seite b</p>
        </label>
        <label htmlFor={nameSideA} className="InputSideA text-center">
          <input
            type="number"
            name={nameSideA}
            className="border border-gray-500 bg-transparent focus:border-transparent w-24 text-center rounded"
            onChange={(event) => handleSides(event)}
            value={lengths.a}
          />
          <p className="text-lg text-gray-500 font-bold">Seite a</p>
        </label>
        <label htmlFor="hight" className="RightAngledHight text-center">
          <p className="text-lg">Höhe h</p>

          <input
            type="number"
            name="hight"
            className="bg-transparent focus:border-transparent w-24 text-center"
            onChange={(event) => handleSides(event)}
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
            onChange={(event) => handleSides(event)}
            value={scope}
          />
        </p>
        <p className="text-lg text-gray-500 font-bold">
          Fläche A =
          <input
            type="number"
            name="area"
            className="bg-transparent focus:border-transparent text-start p-1 w-24"
            onChange={(event) => handleSides(event)}
            value={area}
          />
        </p>
      </div>
      <p className="text-lg text-red-500 font-bold mb-24">{error}</p>
      <Navigation linkPrev="gleichseitigesdreieck" />
    </div>
  );
};

export default RightAngledTriangle;
