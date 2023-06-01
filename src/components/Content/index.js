import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../../screens/Home/index";
import Page1 from "../../screens/Page1";
import Page2 from "../../screens/Page2";

const Content = ({ isOn }) => {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/Page1" component={Page1} />
        <Route path="/Page2" component={Page2} />
      </Router>
    </>
  );
};

export default Content;
