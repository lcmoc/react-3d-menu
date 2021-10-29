import React, { useState } from "react";
import Fläche from "./components/Fläche/index";
import DescriptionTriangle from "./components/DescriptionTriangle/index";
import Umfang from "./components/Umfang/index";
import DreicekIMG from "../../assets/DreieckIMG.jpeg";
import RightAngledTriangle from "./components/RightAngledTriangle";
import EquilateralTriangle from "./components/EquilateralTriangle/index";
import TriangleHight from "./components/TriangleHight/index";

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
            <label
              htmlFor="triangleArea"
              className="text-lg text-gray-500 font-bold"
            >
              <input
                type="checkbox"
                name="triangleArea"
                id="triangleArea"
                onChange={(event) => handleCheckboxChange(event)}
                className="mr-4"
              />
              Flächenberechnung
            </label>
            <label
              htmlFor="triangleScope"
              className="text-lg text-gray-500 font-bold"
            >
              <input
                type="checkbox"
                name="triangleScope"
                id="triangleScope"
                onChange={(event) => handleCheckboxChange(event)}
                className="mr-4"
              />
              Umfang berechnen
            </label>
            <label
              htmlFor="triangleHight"
              className="text-lg text-gray-500 font-bold"
            >
              <input
                type="checkbox"
                name="triangleHight"
                id="triangleHight"
                onChange={(event) => handleCheckboxChange(event)}
                className="mr-4"
              />
              Höhe berechnen
            </label>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="equilateralTriangle"
              className="text-lg text-gray-500 font-bold"
            >
              <input
                type="checkbox"
                name="equilateralTriangle"
                id="equilateralTriangle"
                onChange={(event) => handleCheckboxChange(event)}
                className="mr-4"
              />
              Gleichseitiges Dreieck
            </label>
            <label
              htmlFor="isoscelesTriangle"
              className="text-lg text-gray-500 font-bold"
            >
              <input
                type="checkbox"
                name="isoscelesTriangle"
                id="isoscelesTriangle"
                onChange={(event) => handleCheckboxChange(event)}
                className="mr-4"
              />
              Gleichschenkliches Dreieck
            </label>
            <label
              htmlFor="rightAngledTriangle"
              className="text-lg text-gray-500 font-bold"
            >
              <input
                type="checkbox"
                name="rightAngledTriangle"
                id="rightAngledTriangle"
                onChange={(event) => handleCheckboxChange(event)}
                className="mr-4"
              />
              Rechtwinckliges Dreieck
            </label>
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
      </div>
    </>
  );
};

export default Triangle;
