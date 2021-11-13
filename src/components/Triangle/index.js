import React, { useState } from "react";

import DescriptionTriangle from "./components/DescriptionTriangle/index";
import DreicekIMG from "../../assets/DreieckIMG.jpeg";
import EquilateralTriangle from "./components/EquilateralTriangle/index";
import Fläche from "./components/Fläche/index";
import IsoscelesTriangle from "./components/IsoscelesTriangle";
import RightAngledTriangle from "./components/RightAngledTriangle";
import TriangleHight from "./components/TriangleHight/index";
import Umfang from "./components/Umfang/index";
import { data } from "./data";

const Triangle = () => {
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

  const Checkbox = (props) => {
    return (
      <label
        htmlFor={props?.id || props?.name || null}
        className="text-lg text-gray-500 font-bold"
      >
        <input
          type="checkbox"
          name={props?.name || null}
          id={props?.id || props.name || null}
          onChange={(event) => handleCheckboxChange(event)}
          className="mr-4"
          checked={mathFilter.includes(props?.id || props?.name)}
          key={`checkbox-${props?.name ? props.name : props?.id}`}
        />
        {props?.txt || null}
      </label>
    );

    
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center mt-10">
        <h2 className="text-blue-400 text-4xl">Dreieck Berechnungen</h2>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-32 mb-32 flex items-start justify-center flex-col">
          <h3 className="text-gray-500 font-bold text-3xl">
            Was ist ein Dreieck?
          </h3>
          <div className="flex flex-row items-center justify-between">
            <img src={DreicekIMG} alt="Dreieck" className="h-64" />
            <DescriptionTriangle />
          </div>
          <p className="text-gray-500 font-bold text-2xl">
            Ein Dreieck ist eine zweidimensionale geometrische Figur. Es besitzt
            drei Seiten und{" "}
            <span className="block">
              wie der Name schon sagt drei Eckpunkte.
            </span>
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center flex-col mb-40 w-full">
        <h2 className="text-blue-600 text-3xl mb-10">
          Wähle aus was du berechnen willst:
        </h2>
        <form
          action=""
          className="flex flex-row justify-center border border-black rounded p-10"
        >
          <div className="flex flex-col mr-24">
            {data.map((item, index) =>
              index < 3 ? (
                <Checkbox id={item.id} name={item.name} txt={item.txt} />
              ) : null
            )}
          </div>
          <div className="flex flex-col">
            {data.map((item, index) =>
              index > 2 ? (
                <Checkbox id={item.id} name={item.name} txt={item.txt} />
              ) : null
            )}
          </div>
        </form>
      </div>
      <div className="bg-gray-100 border solid border-black">
        {mathFilter.includes("triangleArea") ? <Fläche /> : null}
        {mathFilter.includes("equilateralTriangle") ? (
          <EquilateralTriangle />
        ) : null}
        {mathFilter.includes("rightAngledTriangle") ? (
          <RightAngledTriangle />
        ) : null}
        {mathFilter.includes("triangleScope") ? <Umfang /> : null}
        {/* TODO: Als letztes anzeigen */}
        {mathFilter.includes("triangleHight") ? <TriangleHight /> : null}
        {mathFilter.includes("isoscelesTriangle") ? (
          <IsoscelesTriangle />
        ) : null}
      </div>
    </>
  );
};

export default Triangle;
