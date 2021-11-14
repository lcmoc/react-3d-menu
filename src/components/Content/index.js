import { Route, BrowserRouter as Router } from "react-router-dom";

import EquilateralTriangle from "../TriangleHome/components/EquilateralTriangle";
import Home from "../Home/index";
import Sinus from "../Sinus/index";
import TriangleHome from "../TriangleHome/index";

const Content = () => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/dreieck" component={TriangleHome} />
        <Route path="/sinus" component={Sinus} />
        <Route path="/dreieck/gleichseitigesdreieck" component={EquilateralTriangle} />
      </Router>
    </>
  );
};

export default Content;
