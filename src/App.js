import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import Pick from './components/pick'
import Workouts from './components/workouts'
import Error from './components/error'
import Navigation from './components/navigation'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      muscleGroups: [],
    }
  }

componentDidMount() {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/'
  fetch(proxyUrl + 'http://afternoon-fjord-79118.herokuapp.com/api/groups')
    .then(blob => blob.json())
    .then(data => {
    let muscleGroups = data.map((muscleObj) => {
        let mgId = {
          name: muscleObj.muscle,
          id: muscleObj._id
        }
        return mgId
    })
    this.setState({
      muscleGroups: muscleGroups
    })
    console.log(this.state)
    })

}

// exercises: Array(7), _id: "5bbcfd508151c71d101b6e81", muscle: "Legs", __v: 1





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
