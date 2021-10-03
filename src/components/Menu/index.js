import React, { useState } from "react";
import "./styles.css";
import classNames from "classnames";

const Menu = () => {
  const [active, setActive] = useState(false);

  const handleClick = (event) => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <div className={active ? "ContentContainer active" : "ContentContainer"}>
      <div className="w-full z-10 h-12 left-0 top-0 fixed">
        <div className="w-full flex justify-between items-center text-white">
          <div
            className="h-6 w-8 cursor-pointer flex items-center justify-end"
            onClick={(event) => handleClick(event)}
          >
            <div className="bar fixed top-0 right-0"></div>
          </div>
        </div>
      </div>

      <div className="main-container">
        <div className="main relative">
          <header>
            <div className={classNames({
                'absolute w-full h-full bg-white': true,
                'rounded-xl': active,
            })}>
              {/* Content */}
              <div className="flex flex-col items-center justify-center mt-10">
                <h2 className="text-blue-400 text-4xl">Geo-Rechner</h2>
              </div>
            </div>
          </header>
        </div>
        <div className="flex items-center justify-center">
        <div className="shadow two absolute w-full h-screen top-0 left-0 rounded-xl bg-blue-900"></div>
          <div className="shadow one absolute w-full h-screen top-0 left-0 rounded-xl bg-blue-800"></div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
