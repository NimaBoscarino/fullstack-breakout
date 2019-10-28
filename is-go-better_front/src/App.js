import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import Screens from './screens/index'
const {
  HomeScreen,
  StackInfoScreen
} = Screens

const App = () => {
  return (
    <Router>
      <div>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/stack/:tool">
            <StackInfoScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
