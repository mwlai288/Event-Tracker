import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import EventList from './EventList';

class Event extends Component {
 
  render() {
      return (
          <div>
            
              <EventList />        
          </div>
      )
    }
}


export default Event;
