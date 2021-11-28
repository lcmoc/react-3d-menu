import { Route, BrowserRouter as Router } from 'react-router-dom';
import EquilateralTriangle from '../TriangleHome/components/EquilateralTriangle';
import Home from '../Home/index';
import IsoscelesTriangle from '../TriangleHome/components/IsoscelesTriangle';
import RightAngledTriangle from '../TriangleHome/components/RightangledTrinagle';
import Triangle from '../Triangle/index';
import TriangleHome from '../TriangleHome/index';
import Trigonomie from '../Trigonomie/index';

const Content = ({ isOn }) => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/dreieck" component={isOn ? Triangle : TriangleHome} />
        <Route path="/gleichseitigesdreieck" component={EquilateralTriangle} />
        <Route path="/rechtwinklig" component={RightAngledTriangle} />
        <Route path="/gleichschenklig" component={IsoscelesTriangle} />
        <Route path="/trigonomie" component={Trigonomie} />
      </Router>
    </>
  );
};

export default Content;
