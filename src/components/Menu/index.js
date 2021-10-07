import React, { useState } from "react";
import classNames from "classnames";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Content from "./components/Content";
import MenuLinks from "./components/MenuLinks";
import "./styles.css";

const Menu = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <div className={active ? "ContentContainer active" : "ContentContainer"}>
      <div className="w-full z-10 h-12 left-0 top-0 fixed">
        <div className="w-full flex justify-between items-center text-white">
          <KeyboardEventHandler
            handleKeys={["esc"]}
            onKeyEvent={() => handleClick()}
          />
          <div
            className="h-10 w-10 cursor-pointer fixed top-2 right-3"
            onClick={(event) => handleClick(event)}
          >
            <div className="bar cursor-pointer fixed top-5 right-5 w-8"></div>
          </div>
        </div>
      </div>

      <div className={classNames({
        "main-container": true,
        "overflow-hidden": active,
      })}>
        <MenuLinks />
        <div
          className={classNames({
            "main relative": true,
            "cursor-pointer ": active,
          })}
          onClick={() => {
            if (active) {
              handleClick();
            }
          }}
        >
          <header className="relative w-full min-h-screen">
            <div
              className={classNames({
                "absolute w-full h-auto bg-white": true,
                "rounded-xl": active,
              })}
            >
              <div className="flex flex-col items-center justify-center mt-10">
                <h2 className="text-blue-400 text-4xl">Geo-Rechner</h2>
              </div>
                <Content />
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
