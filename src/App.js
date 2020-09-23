import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SSI from "./components/SSI";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={SSI} />
          </Switch>
        </Fragment>
      </Router>
    </div>
  );
}

export default App;
