import { slide as Menu } from 'react-burger-menu';
import '../Menu.css';
import Trigonometric from '../../assets/Einheitskreis.png';

function ValuesMenu(props) {
  return (
    <Menu right noOverlay disableAutoFocus isOpen width={375}>
      <div className="centered">
        <p className="centered text-gray-500 font-bold text-2xl">
          Einheitskreis
        </p>
        <p>&nbsp;</p>

        <img src={Trigonometric} alt="Trigonometric" />
        <br />

        <p className="centered text-gray-500 text-lg">
          Der Einheitskreis ist ein Kreis, dessen Radius die Länge hat und
          dessen Mittelpunkt im Koordinatenursprung liegt.
        </p>
      </div>
    </Menu>
  );
}

export default ValuesMenu;
