import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Location from './components/Location';
import Event from './components/Event';
import EventList from './components/EventList'
import Description from './components/Description';
import User from './components/User';
import {HomePageTitle} from './styles/Styling';
import NavBar from './styles/NavBar';
import styled from 'styled-components';


const Home = () => (
  <div>
  <h1>Welcome to Event Space</h1>
  <Link to="/location"><button>Click to Begin</button></Link>
  <br/>
  <Link to="/user"><button>Profile</button></Link>
  </div>
)


class App extends Component {
  render() {
    return (
      
     <Router>
        <div> 
        <NavBar>
            <Link to="/">Home</Link>
            <Link to="/user">My Profile</Link>
          </NavBar> 
        <div>
          <HomePageTitle>
          <Route exact path="/" component={Home}/>
          </HomePageTitle>
            <Route exact path="/location" component={Location}/>
            <Route exact path="/location/:locationId/event" component={EventList}/>
            <Route exact path="/event/:eventId/description" component={Description}/>
            <Route exact path="/user" component={User}/>
          
          </div>
         </div>
      </Router>
    );
  }
}

export default App;