import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import Pick from './components/pick'
import Workouts from './components/workouts'
import Table from './components/table'
import Error from './components/error'
import Navigation from './components/navigation'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      data: [],
    }
  }

componentDidMount() {
  fetch('http://afternoon-fjord-79118.herokuapp.com/api/groups')
    .then(blob => blob.json())
    .then(data => {
    this.setState({
      data: data
    })
    })

}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/pick"  render={(props) => <Pick {...this.state} isAuthed={true}/> }/>
            <Route path="/workouts" component={Workouts} />
            <Route component={Error}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
};
export default App
