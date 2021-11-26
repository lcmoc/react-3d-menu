import "./styles.css";

import React from "react";

const DescriptionSwitch = ({ isOn, handleToggle, onColor, txt }) => {
  return (
    <div className="ml-3 mt-1">
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox p-10"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && onColor }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default DescriptionSwitch;
