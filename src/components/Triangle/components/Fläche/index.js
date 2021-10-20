import React, { useState } from "react";
import classNames from "classnames";
import "./styles.css";

const Fläche = () => {
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
      round ? setResult(Math.round((sideA * sideB) / 2)) : setResult((sideA * sideB) / 2);
    } else if (sideA && sideC) {
      setResult((sideA * sideC) / 2);
      setError(false);
    } else if (sideB && sideC) {
      setResult((sideB * sideC) / 2);
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
    setSubmitted(false);
  };

  return (
    <div className="flex items-center justify-center w-full mb-20 flex-col">
      <h2 className="text-blue-600 text-3xl mb-7">Fläche berechnen</h2>
      <p className="text-gray-500 font-bold mb-5">
        Um die Fläche eines Dreiecks ausrechen zu können muss man 2 Seiten des
        Dreiecks in <span className="">cm</span> angeben.
      </p>
      <form className="flex items-start justify-start flex-col shadow-2xl bg-white border border-black rounded">
        <div className="w-full p-10">
          <label htmlFor="a" className="text-lg text-gray-500 font-bold">
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
          <label htmlFor="a" className="text-lg text-gray-500 font-bold">
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
          <label htmlFor="a" className="text-lg text-gray-500 font-bold">
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
          <input type="checkbox" name="round" id="round" className="mt-10" checked={round} onChange={() => setRound(!round)}/>
          <label
            htmlFor="round"
            className="text-lg ml-2 text-gray-500 font-bold"
          >
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
            <p className="text-gray-500 font-bold">
              Die Fläche beträgt:{" "}
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
      <div className="flex flex-col items-center justify-center mt-32 mb-32 w-full">
        <h3 className="text-lg text-blue-600">Dreieck Fläche berechnen Formel</h3>
      </div>
    </div>
  );
};

export default Fläche;
