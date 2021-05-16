import "./App.css";
import Homepage from "./Homepage/index";
import ContactUs from "./contactus/ContactUs";
import AboutUs from "./aboutus/AboutUs";
import Projects from "./projects/Projects";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Homepage}></Route>
      </Switch>
      <Switch>
        <Route exact path="/contact" component={ContactUs}></Route>
      </Switch>
      <Switch>
        <Route exact path="/about" component={AboutUs}></Route>
      </Switch>
      <Switch>
        <Route exact path="/projects" component={Projects}></Route>
      </Switch>
      {/* <Switch>
        <Redirect to="/"></Redirect>
      </Switch> */}
    </Router>
  );
}

export default App;
