import "../styles-button.css";

import React, { useState } from "react";

import classNames from "classnames";

const Pythagoras = () => {
  const [sideA, setSideA] = useState();
  const [sideB, setSideB] = useState();
  const [sideC, setSideC] = useState();
  const [round, setRound] = useState();
  const [result, setResult] = useState();
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (sideA && sideB) {
      setError(false);
      round
        ? setResult(Math.round((sideA * sideB) / 2))
        : setResult((sideA * sideB) / 2);
    } else if (sideA && sideC) {
      round
        ? setResult(Math.round((sideA * sideC) / 2))
        : setResult((sideA * sideC) / 2);
      setError(false);
    } else if (sideB && sideC) {
      round
        ? setResult(Math.round((sideB * sideC) / 2))
        : setResult((sideB * sideC) / 2);
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    setSideA(0);
    setSideB(0);
    setSideC(0);
    setResult(0);
    setSubmitted(false);
  };

  const MainFormula = () => (
    <p className="text-gray-500 font-bold text-xl mb-4">
      Seite c = &#8730;<span className="text-red-600">a&sup2;</span> *
      <span className="text-green-600">b&sup2;</span>
    </p>
  );

  const SecondFormula = () => (
    <p className="text-gray-500 font-bold text-xl mb-4">
      Fläche A = <span className="text-red-600">{sideA ? "a" : "b"}</span> *{" "}
      <span className="text-green-600">{sideB && !sideC ? "b" : "c"}</span> ∻ 2
    </p>
  );

  const Result = () => (
    <p className="font-bold text-xl text-gray-500">
      Fläche A = <span className="text-purple-400 ">{result}</span>
    </p>
  );

  const FormulaAB = () => (
    <div className="flex flex-col items-start justify-center">
      <MainFormula />
      <p className="text-gray-500 font-bold text-xl mb-6">
        Fläche A = <span className="text-red-600">{sideA ? sideA : sideB}</span>{" "}
        *
        <span className="text-green-600">
          {sideB && !sideC ? sideB : sideC}
        </span>
        ∻ 2
      </p>
      <Result />
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full mb-20 mt-12 flex-col">
      <h2 className="text-blue-600 text-3xl mb-7">Pythagoras</h2>
      <p className="p-text mb-2">
        Gib 2 Seiten an, um die dritte Seite zu berechnen
      </p>
      <form className="flex items-start justify-start flex-col shadow-2xl bg-white border border-black rounded">
        <div className="w-full p-10">
          <label htmlFor="a" className="p-text">
            Länge Seite a:
          </label>
          <input
            type="number"
            name="a"
            className={classNames(
              "bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg",
              { "border-none cursor-default shadow-none": sideB && sideC }
            )}
            value={sideA}
            onChange={(event) => setSideA(event.target.value)}
            id="funkystyling"
            disabled={sideB && sideC}
          />
          <label htmlFor="a" className="p-text">
            Länge Seite b:
          </label>
          <input
            type="number"
            name="b"
            className={classNames(
              "bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg",
              { "border-none cursor-default shadow-none": sideA && sideC }
            )}
            value={sideB}
            onChange={(event) => setSideB(event.target.value)}
            disabled={sideA && sideC}
          />
          <label htmlFor="a" className="p-text">
            Länge Seite c:
          </label>
          <input
            type="number"
            name="c"
            className={classNames(
              "bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg",
              { "border-none cursor-default shadow-none": sideB && sideA }
            )}
            value={sideC}
            onChange={(event) => setSideC(event.target.value)}
            disabled={sideB && sideA}
          />
          <input
            type="checkbox"
            name="round"
            id="round"
            className="mt-10"
            checked={round}
            onChange={() => setRound(!round)}
            disabled={submitted}
          />
          <label htmlFor="round" className="p-text ml-4">
            Ergebnis gerundet anzeigen
          </label>
          <div className="flex items-center justify-center">
            <button
              className="SubmitButton border border-black rounded p-2 w-32 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
              onClick={handleSubmit}
            >
              Ausrechnen
            </button>
          </div>
          <div className="flex items-center justify-around mt-10">
            <p className="p-text">
              Die Seite beträgt:
              {submitted && round ? <span className="text-lg"> ⋍</span> : " "}
              <span className="text-blue-800">
                {submitted && result ? result + "cm" : null}
              </span>
            </p>
            <button
              className="hover:text-blue-800 border-b-2 border-transparent hover:border-blue-800 text-gray-500 font-bold"
              onClick={handleReset}
            >
              Werte löschen
            </button>
          </div>
          <div className="flex items-center justify-center mt-16">
            <p className="text-red-500 font-bold">
              {error
                ? "Es müssen 2 Seiten angegeben werden um die Fläche berechnen zu können."
                : null}
            </p>
          </div>
        </div>
      </form>
      <div className="flex flex-row items-start justify-center mt-32 mb-32 w-full">
        <div className="p-text">
          <h3 className="text-2xl mb-4">Formel</h3>
          <p className="mb-5">
            Sobald man 2 Seiten hat kann man mit der Formeln unten die Seite
            welche noch fehlt berechnen
          </p>
          <MainFormula />
        </div>
        <div className="w-96 border-4 border-blue-500 rounded p-5  ml-36">
          <h3 className="text-2xl font-bold text-gray-500 mb-4">Lösung</h3>
          {result ? <FormulaAB /> : null}
        </div>
      </div>
    </div>
  );
};

export default Pythagoras;
