import React, { useState } from "react";
import "../styles-button.css";

const Umfang = ({title, triangleType}) => {
  const [sideA, setSideA] = useState();
  const [sideB, setSideB] = useState();
  const [sideC, setSideC] = useState();
  const [round, setRound] = useState(false);
  const [result, setResult] = useState();
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    setError(false);
    if (sideA && sideB && sideC) {
      round
        ? setResult(Math.round(sideA + sideB + sideC))
        : setResult(sideA + sideB + sideC);
    } else setError(true);
  };

  const handleReset = (event) => {
    event.preventDefault();
    setSideA(0);
    setSideB(0);
    setSideC(0);
    setSubmitted(false);
  };

  const Formula = () => (
    <div className="text-lg text-gray-500 font-bold mb-4">
      Umfang U =<span className="text-red-600"> a</span> +
      <span className="text-green-600"> b</span> +
      <span className="text-blue-600"> c</span>
    </div>
  );

  const FormulaSolution = () => (
    <div className="text-lg text-gray-500 font-bold flex justify-start items-start flex-col">
      <Formula />
      <p>
        Umfang U =<span className="text-red-600"> {sideA}</span> +
        <span className="text-green-600"> {sideB}</span> +
        <span className="text-blue-600"> {sideC}</span>
      </p>
      <p className="mt-4">
        Umfang U =<span className="text-purple-400"> {result}</span>
      </p>
    </div>
  );

  return (
    <div className="flex items-center justify-center w-full mb-20 flex-col mt-24">
      <h2 className="text-blue-600 text-3xl mb-7">{title ? `Umfang ${title} berechnen`: "Umfang berechnen"}</h2>
      <p className="text-gray-500 font-bold mb-5">
        Um den Umfang eines Dreiecks ausrechen zu können muss man alle 3 Seiten
        des Dreiecks in cm angeben.
      </p>
      <form className="flex items-start justify-start flex-col shadow-2xl bg-white border border-black rounded">
        <div className="w-full p-10">
          <label htmlFor="a" className="text-lg text-gray-500 font-bold">
            Länge Seite a:
          </label>
          <input
            type="number"
            name="a"
            className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
            value={sideA}
            onChange={(event) => setSideA(parseFloat(event.target.value))}
            id="funkystyling"
          />
          <label htmlFor="a" className="text-lg text-gray-500 font-bold">
            Länge Seite b:
          </label>
          <input
            type="number"
            name="b"
            className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
            value={sideB}
            onChange={(event) => setSideB(parseFloat(event.target.value))}
          />
          <label htmlFor="a" className="text-lg text-gray-500 font-bold">
            Länge Seite c:
          </label>
          <input
            type="number"
            name="c"
            className="bg-gray-100 border border-black w-full rounded h-8 mt-1 mb-3 p-2 focus:ring-2 focus:ring-gray-300 focus:outline-none focus:bg-white focus:border-transparent appearance-none shadow-lg"
            value={sideC}
            onChange={(event) => setSideC(parseFloat(event.target.value))}
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
                ? "Es müssen 3 Seiten angegeben werden um den Umfang berechnen zu können."
                : null}
            </p>
          </div>
        </div>
      </form>
      <div className="flex flex-row items-center justify-center mt-32 mb-32 w-full">
        <div>
          <h3 className="text-2xl font-bold text-gray-500 mb-4">Formel</h3>
          <p className="text-gray-500 font-bold mb-5">
            Die Berechnung des Umfangs U eines Dreiecks ist ganz simpel und für
            alle Dreiecksarten gleich.
          </p>
          <p className="text-gray-500 font-bold mb-5">
            Du addierst hierfür einfach die einzelnen Seitenlängen:
          </p>
          <Formula />
        </div>
        <div className="w-96 border-4 border-blue-500 rounded p-5 ml-36">
          <h3 className="text-2xl font-bold text-gray-500 mb-4">Lösung</h3>
          {sideA && sideB && sideC && submitted ? <FormulaSolution /> : null}
        </div>
      </div>
    </div>
  );
};

export default Umfang;
