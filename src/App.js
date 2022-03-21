import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Switch>
          <Route
            path="/home"
            component={Home}
          />          
          <Redirect from='/' to='/home' />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;