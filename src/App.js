import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import Pick from './components/pick'
import Workouts from './components/workouts'
import Error from './components/error'
import Navigation from './components/navigation'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/pick" component={Pick} />
            <Route path="/workouts" component={Workouts} />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};
export default App
