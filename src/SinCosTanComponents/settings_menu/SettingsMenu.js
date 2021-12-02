import { slide as Menu } from 'react-burger-menu';
import '../Menu.css';

function SettingsMenu(props) {
  return (
    <Menu noOverlay disableAutoFocus isOpen width={375}>
      <label className="centered text-gray-500 font-bold text-2xl">
        Winkel manuell eingeben
      </label>
      <label
        className="centered large-print underlined"
        style={{ padding: '1em 0' }}
      >
        θ:
        <input
          type="text"
          style={{ marginLeft: '0.25em' }}
          value={props.degreeAngle}
          onChange={props.handleDegreeAngleChange}
          className="small-input"
        />
        ° ≈
        <input
          type="text"
          style={{ marginLeft: '0.8em', marginRight: '0.25em' }}
          value={props.radianAngle}
          onChange={props.handleRadianAngleChange}
          className="medium-input"
        />
        rad
      </label>
      <label className="centered text-gray-500 font-bold text-2xl ">
        Trigonometric Functions
      </label>
      <div
        className="centered large-print underlined"
        style={{ whitespace: 'nowrap' }}
      >
        <label>
          sin:
          <input
            id="sin-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleTrigSelectionChange}
          />
        </label>
        <label>
          cos:
          <input
            id="cos-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleTrigSelectionChange}
          />
        </label>
        <label>
          tan:
          <input
            id="tan-checkbox"
            type="checkbox"
            defaultChecked
            onChange={props.handleTrigSelectionChange}
          />
        </label>
        <p>&nbsp;</p>
      </div>
      <div className="centered large-print underlined">
        <label className="centered text-gray-500 font-bold text-2xl ">
          Trigonometrische Funktionswerte
        </label>
        <p>&nbsp;</p>
        <label className="centered text-gray-500 text-lg">
          cos(θ) = {props.trigValues.cos}
        </label>
        <br />
        <label className="centered text-gray-500 text-lg">
          sin(θ) = {props.trigValues.sin}
        </label>
        <br />
        <label className="centered text-gray-500 text-lg">
          tan(θ) = {props.trigValues.tan}
        </label>
        <br />
        <p>&nbsp;</p>
      </div>
      <label className="centered text-gray-500 text-lg ">
        <button className="btn-pri">
          <a
            rel="noreferrer"
            href="https://de.serlo.org/mathe/1961/trigonometrie-am-einheitskreis"
            target="_blank"
          >
            Mehr über Trigonomie?
          </a>
        </button>
      </label>
    </Menu>
  );
}

export default SettingsMenu;
