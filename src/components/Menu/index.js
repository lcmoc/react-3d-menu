import React, { useState } from "react";
import classNames from "classnames";
import KeyboardEventHandler from "react-keyboard-event-handler";
import Content from "../Content";
import MenuLinks from "./components/MenuLinks";
import "./styles.css";

const Menu = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    active ? setActive(false) : setActive(true);
  };

  return (
    <div className={active ? "ContentContainer active" : "ContentContainer"}>
      <div className="w-full z-20 h-12 left-0 top-0 fixed">
        <div className="w-full flex justify-between items-center text-white">
          <KeyboardEventHandler
            handleKeys={["esc"]}
            onKeyEvent={() => handleClick()}
          />
          <div
            className="h-10 w-10 cursor-pointer fixed top-2 right-3"
            onClick={(event) => handleClick(event)}
          >
            <div className="bar rounded-sm bg-black h-0.5 transition duration-500 cursor-pointer fixed top-5 right-5 w-8"></div>
          </div>
        </div>
      </div>

      <div
        className={classNames({
          "main-container": true,
          "overflow-hidden filter blur-sm": active,
        })}
      >
        <div
          className={classNames({
            "main relative origin-left z-10 transition duration-500": true,
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
            <Content />
            </div>
          </header>
        </div>
        <div className="flex items-center justify-center">
          <div className="shadow two absolute w-full h-screen top-0 left-0 rounded-xl bg-blue-900"></div>
          <div className="shadow one absolute w-full h-screen top-0 left-0 rounded-xl bg-blue-800"></div>
        </div>
      </div>
      <div
        className={classNames({
          "fixed bottom-5 w-full z-20 flex items-center justify-center": true,
          hidden: !active,
        })}
      >
        <MenuLinks active={active}/>
      </div>
    </div>
  );
};

export default Menu;