import React, { useState } from "react";
import Fläche from "../Fläche";
import Umfang from "../Umfang";
import TriangleHight from "../TriangleHight";
import { RightAngledTriangleType } from "../constans";
import RightangledTriangleArea from "../RightAngledTriangle/components/Fläche/index";

const FormulaFilter = ({ title, triangleType }) => {
  const [mathFilter, setMathFilter] = useState([]);

  const handleCheckboxChange = (event) => {
    setMathFilter((prevState) => {
      if (prevState.includes(event.target.name)) {
        return prevState.filter((element) => {
          return element !== event.target.name;
        });
      }
      return [...prevState, event.target.name];
    });
  };

  const CurrentTriangleAreaCalculation = () =>
    triangleType !== RightAngledTriangleType ? (
      <Fläche title={title} triangleType={triangleType} />
    ) : (
      <RightangledTriangleArea />
    );

  console.log("xxx", CurrentTriangleAreaCalculation);

  return (
    <div className="flex items-center justify-center flex-col mb-24 mt-16 w-full">
      <form
        action=""
        className="flex flex-row justify-between border border-black rounded"
      >
        <div className="flex items-start justify-start flex-col p-2">
          <label
            htmlFor="triangleAreaFilter"
            className="text-lg text-gray-500 font-bold"
          >
            <input
              type="checkbox"
              name="triangleAreaFilter"
              id="triangleAreaFilter"
              onChange={(event) => handleCheckboxChange(event)}
              className="mr-4"
            />
            Fläche A
          </label>
        </div>
        <div className="flex items-start justify-end flex-col p-2">
          <label
            htmlFor="highFilter"
            className="text-lg text-gray-500 font-bold"
          >
            <input
              type="checkbox"
              name="highFilter"
              id="highFilter"
              onChange={(event) => handleCheckboxChange(event)}
              className="mr-4"
            />
            Höhe h
          </label>
        </div>
        <div className="flex items-start justify-start flex-col p-2">
          <label
            htmlFor="scopeFilter"
            className="text-lg text-gray-500 font-bold"
          >
            <input
              type="checkbox"
              name="scopeFilter"
              id="scopeFilter"
              onChange={(event) => handleCheckboxChange(event)}
              className="mr-4"
            />
            Umfang U
          </label>
        </div>
      </form>
      {mathFilter.includes("triangleAreaFilter") ? (
        <CurrentTriangleAreaCalculation />
      ) : null}
      {mathFilter.includes("highFilter") ? (
        <TriangleHight title={title} triangleType={triangleType} />
      ) : null}
      {mathFilter.includes("scopeFilter") ? (
        <Umfang title={title} triangleType={triangleType} />
      ) : null}
    </div>
  );
};

export default FormulaFilter;
