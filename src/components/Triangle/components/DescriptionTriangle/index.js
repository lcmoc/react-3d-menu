import "./styles.css";

import React, { useState } from "react";

import classNames from "classnames";

const DescriptionTriangle = () => {
  const [isTextAVisible, setIsTextAVisible] = useState(true);
  const [isTextBVisible, setIsTextBVisible] = useState(false);
  const [isTextCVisible, setIsTextCVisible] = useState(false);

  const handleTextSideA = () => {
    setIsTextAVisible(!isTextAVisible);
    setIsTextBVisible(false);
    setIsTextCVisible(false);
  };

  const handleTextSideB = () => {
    setIsTextBVisible(!isTextBVisible);
    setIsTextAVisible(false);
    setIsTextCVisible(false);
  };

  const handleTextSideC = () => {
    setIsTextCVisible(!isTextCVisible);
    setIsTextAVisible(false);
    setIsTextBVisible(false);
  };

  const TextSideA = () => {
    return (
      <div className="p-text">
        <h3 className="text-red-600">Seite A</h3>
        <p>Die Seite a ligt dem Eckpunkt A gegenüber und verbindet die Punkte B und C.</p>
      </div>
    );
  };

  const TextSideB = () => {
    return (
      <div className="p-text">
        <h3 className="text-green-600">Seite B</h3>
        <p>Die Seite b ligt dem Eckpunkt B gegenüber und verbindet die Punkte A und C.</p>
      </div>
    );
  };

  const TextSideC = () => {
    return (
      <div className="p-text">
        <h3 className="text-blue-600">Seite C</h3>
        <p>Die Seite c ligt dem Eckpunkt C gegenüber und verbindet die Punkte A und B.</p>
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-row items-center justify-around">
        <div className="flex flex-col items-start mr-28">
          <div
            onClick={() => handleTextSideB()}
            className={classNames(
              "triangle flex items-center justify-center w-10 h-44 border-r-4 border-black hover:border-green-500 hover:text-green-500 cursor-pointer",
              { "border-green-500 text-green-500 ": isTextBVisible }
            )}
          >
            <span>b</span>
          </div>
          <div
            onClick={() => handleTextSideA()}
            className={classNames(
              "triangle2 flex items-center justify-center border-l-4 border-black w-10 h-44  cursor-pointer hover:border-red-600 hover:text-red-600",
              { "border-red-600 text-red-600": isTextAVisible }
            )}
          >
            <span>a</span>
          </div>
          <div
            onClick={() => handleTextSideC()}
            className={classNames(
              "triangle3 flex items-center justify-center border-t-4 border-black h-10 hover:border-blue-600 hover:text-blue-600 cursor-pointer",
              { "border-blue-600 text-blue-600": isTextCVisible }
            )}
          >
            <span>c</span>
          </div>
        </div>
        <div className="flex flex-col items-start justify-center w-full h-full">
          {isTextAVisible ? <TextSideA /> : null}
          {isTextBVisible ? <TextSideB /> : null}
          {isTextCVisible ? <TextSideC /> : null}
        </div>
      </div>
    </div>
  );
};

export default DescriptionTriangle;
