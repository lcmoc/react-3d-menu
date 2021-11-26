import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../Home/index";
import Triangle from "../Triangle/index";
import Sinus from "../Sinus/index";

const Content = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/dreieck" component={Triangle} />
      <Route path="/sinus" component={Sinus} />
    </Router>
  );
};

export default Content;
