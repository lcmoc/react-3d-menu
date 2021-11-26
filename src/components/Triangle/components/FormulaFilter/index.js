import React, { useState } from "react";

import Fläche from "../Fläche";
import { RightAngledTriangleType } from "../constans";
import RightangledTriangleArea from "../RightAngledTriangle/components/Fläche/index";
import TriangleHight from "../TriangleHight";
import Umfang from "../Umfang";
import { data } from "../../data"

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

  const Checkbox = (props) => {
    return (
      <div className="flex items-start justify-start flex-col p-2">
        <label
          htmlFor={triangleType + `-filter-${props?.id || props?.name}` || null}
          className="text-lg text-gray-500 font-bold"
        >
          <input
            type="checkbox"
            name={triangleType + `-filter-${props?.name}` || null}
            id={triangleType + `-filter-${props?.id || props?.name}` || null}
            onChange={(event) => handleCheckboxChange(event)}
            className="mr-4"
            checked={mathFilter.includes(triangleType + `-filter-${props?.name || props.id}`)}
            key={triangleType +`-checkbox-${props?.name ? props.name : props?.id}`}
          />
          {props?.txt || null}
        </label>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center flex-col mb-24 mt-16 w-full">
      <form
        action=""
        className="flex flex-row justify-between border border-black rounded"
      >
        {data.map((item, index) => index < 3 ? <Checkbox id={item.id} name={item.name} txt={item.txt}/>: null)}
      </form>
      {mathFilter.includes(triangleType + "-filter-triangleArea") ? (
        <CurrentTriangleAreaCalculation />
      ) : null}
      {mathFilter.includes(triangleType + "-filter-triangleHight") ? (
        <TriangleHight title={title} triangleType={triangleType} />
      ) : null}
      {mathFilter.includes(triangleType + "-filter-triangleScope") ? (
        <Umfang title={title} triangleType={triangleType} />
      ) : null}
    </div>
  );
};

export default FormulaFilter;
