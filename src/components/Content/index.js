import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/index';
import Triangle from '../Triangle/index';
import Trigonomie from '../Trigonomie/index';
const Content = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/dreieck" component={Triangle} />
      <Route path="/trigonomie" component={Trigonomie} />
    </Router>
  );
};

export default Content;
