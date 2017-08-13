import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Location from './components/Location';
import Event from './components/Event';
import Description from './components/Description';
import User from './components/User';

const Home = () => (
  <div>
    <h1>Welcome to Working Title</h1>
  <Link to="/location"><button>Click to Begin</button></Link>
  </div> 
)

class App extends Component {
  render() {
    return (
      <Router>
        <div>
         
          <div>
            <Route exact path="/" component={Home}/>
            <Route exact path="/location" component={Location}/>
            <Route exact path="/location/:id/event" component={Event}/>
            <Route exact path="/event/:eventId/description" component={Description}/>
            <Route exact path="/user" component={User}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;