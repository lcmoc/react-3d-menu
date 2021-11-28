import React, { useState } from 'react';
import Canvas from './canvas/Canvas.js';
import SettingsMenu from './settings_menu/SettingsMenu.js';
import ValuesMenu from './values_menu/ValuesMenu.js';

import { degToRad, radToDeg } from './utils/angleCalc.js';

function SinCosTanComponents() {
  const [degreeAngle, setDegreeAngle] = useState(null);
  const [radianAngle, setRadianAngle] = useState(null);
  const [trigValues, setTrigValues] = useState({});
  const [angleSelect, setAngleSelect] = useState(true);
  const [trigVisible, setTrigVisible] = useState({
    cos: true,
    sin: true,
    tan: true,
  });
  const [circleDetails, setCircleDetails] = useState({
    axes: true,
    degrees: true,
    radians: true,
    pi: true,
    quadrants: true,
    signs: true,
  });
  const [updateCount, setUpdateCount] = useState(0);

  const updateTrigValues = (radians) => {
    setTrigValues({
      cos: Math.cos(radians).toFixed(5),
      sin: Math.sin(radians).toFixed(5),
      tan: Math.tan(radians).toFixed(5),
    });
  };

  const handleDegreeAngleChange = (event) => {
    const input = event.target.value;
    if (parseInt(input) >= 0 && parseInt(input) <= 360) {
      setDegreeAngle(input);
      setRadianAngle(degToRad(input).toFixed(5));
      updateTrigValues(degToRad(input));
    } else {
      console.log('ANGLE OUT OF BOUNDS');
    }
    setUpdateCount(updateCount + 1);
  };

  const handleRadianAngleChange = (event) => {
    const input = event.target.value;
    setRadianAngle(input);
    setDegreeAngle(radToDeg(input).toFixed(0));
    updateTrigValues(input);
    setUpdateCount(updateCount + 1);
  };

  const handleGraphRadianChange = (radians) => {
    setRadianAngle(radians);
    setDegreeAngle(radToDeg(radians).toFixed(0));
    updateTrigValues(radians);
  };

  const handleAngleSelectionChange = (event) => {
    setAngleSelect(event.target.checked);
    setUpdateCount(updateCount + 1);
  };

  const handleTrigSelectionChange = (event) => {
    const newTrigVisible = trigVisible;
    switch (event.target.id) {
      case 'cos-checkbox':
        newTrigVisible.cos = event.target.checked;
        break;
      case 'sin-checkbox':
        newTrigVisible.sin = event.target.checked;
        break;
      case 'tan-checkbox':
        newTrigVisible.tan = event.target.checked;
        break;
      default:
        break;
    }

    setTrigVisible(newTrigVisible);
    setUpdateCount(updateCount + 1);
  };

  return (
    <div className="App">
      <div className="settings-menu">
        <SettingsMenu
          degreeAngle={degreeAngle}
          radianAngle={radianAngle}
          trigValues={trigValues}
          handleDegreeAngleChange={handleDegreeAngleChange}
          handleRadianAngleChange={handleRadianAngleChange}
          handleAngleSelectionChange={handleAngleSelectionChange}
          handleTrigSelectionChange={handleTrigSelectionChange}
        />
      </div>
      <div className="values-menu">
        <ValuesMenu radianAngle={radianAngle} trigValues={trigValues} />
      </div>

      <Canvas
        radianAngle={radianAngle}
        angleSelect={angleSelect}
        trigVisible={trigVisible}
        circleDetails={circleDetails}
        handleGraphRadianChange={handleGraphRadianChange}
        updateCount={updateCount}
      />
    </div>
  );
}

export default SinCosTanComponents;
