import React, { useState } from 'react';
import '../styles-button.css';
import EreaJpeg from '../../../../assets/Flächenihalt.jpeg';

const Fläche = ({ title, triangleType }) => {
  const [high, setHigh] = useState();
  const [sideG, setSideG] = useState();
  const [round, setRound] = useState();
  const [result, setResult] = useState();
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    if (high && sideG) {
      setError(false);
      round
        ? setResult(Math.round(0.5 * sideG * high))
        : setResult(0.5 * sideG * high);
    } else {
      setError(true);
    }
  };

  const handleReset = (event) => {
    event.preventDefault();
    setHigh(0);
    setSideG(0);
    setSubmitted(false);
    setError(false);
  };

  const MainFormula = () => (
    <p className="text-gray-500 font-bold text-xl mb-6">
      Fläche
      <span className="text-purple-500"> A</span> = ½ ·{' '}
      <span className="text-red-500">g</span> ·{' '}
      <span className="text-green-500">h</span>{' '}
    </p>
  );

  const DescFormula = () => (
    <div className="flex items-center justify-center flex-col">
      <div className="flex flex-row text-gray-500 font-bold text-lg">
        <p className=" mb-4 p-2">
          <span className="text-purple-500">A</span> = Flächeninhalt Dreieck
        </p>
        <p className=" mb-4 p-2">
          <span className="text-red-500">g</span> = Grundseite
        </p>
        <p className="mb-4 p-2">
          <span className="text-green-500">h</span> = Höhe der Grundseite
        </p>
      </div>
    </div>
  );

  const Result = () => (
    <p className="font-bold text-xl text-gray-500">
      Fläche <span className="text-purple-500">A</span> ={' '}
      <span className="text-purple-400 ">{result}</span>
    </p>
  );

  const Formula = () => (
    <div className="flex flex-col items-start justify-center">
      <MainFormula />
      <p className="text-gray-500 font-bold text-xl  mb-6">
        Fläche <span className="text-purple-500">A</span> = ½ *
        <span className="text-red-600"> {sideG}</span> *
        <span className="text-green-600"> {high}</span>
      </p>
      <Result />
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full mb-20 flex-col mt-24">
      <h2 className="text-blue-600 text-3xl mb-7 mt-4">
        {title ? `Fläche ${title} berechnen` : 'Fläche berechnen'}
      </h2>
      <p className="text-lg text-gray-500 font-bold mb-2">
        Gib die 2 Längen an, um die Fläche zu berechnen
      </p>
      <form className="flex items-start justify-start flex-col shadow-2xl bg-white border border-black rounded">
        <div className="w-full p-10">
          <label htmlFor="g" className="text-lg text-gray-500 font-bold">
            Länge Grundseite g:
          </label>
          <input
            type="number"
            name="g"
            className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
            value={sideG}
            onChange={(event) => setSideG(event.target.value)}
          />
          <label htmlFor="h" className="text-lg text-gray-500 font-bold">
            Länge Höhe h:
          </label>
          <input
            type="number"
            name="h"
            className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
            value={high}
            onChange={(event) => setHigh(event.target.value)}
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
              Die Fläche beträgt:
              {submitted && round ? <span className="text-lg"> ⋍</span> : ' '}
              <span className="text-blue-800">
                {submitted && result ? result + 'cm' : null}
                &sup2;
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
                ? 'Es müssen 2 Längen angegeben werden um die Fläche berechnen zu können.'
                : null}
            </p>
          </div>
        </div>
      </form>
      <div className="flex flex-row items-start justify-around mt-32 mb-32 w-">
        <div>
          <h3 className="text-2xl font-bold text-gray-500 mb-4">Formel</h3>
          <MainFormula />
          <DescFormula />
          <img src={EreaJpeg} alt="Flächeninhalt" className="h-40 mb-10" />
        </div>
        <div className="w-96 border-4 border-blue-500 rounded p-5 ml-10">
          <h3 className="text-2xl font-bold text-gray-500 mb-4">Lösung</h3>
          {result && sideG && high ? <Formula /> : null}
        </div>
      </div>
    </div>
  );
};

export default Fläche;
