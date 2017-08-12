import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Event extends Component {
 
    constructor() {
      super();
      this.state = {
        event: [
            {
                name:'' ,
                venue:'' ,
                date: ''
            },
            {
                name: '',
                venue:'' ,
                date:''
            }
        ]
    }
  }

    componentWillMount() {
    axios.get("/api/event").then((res) => {
    const foundData = res.data;
    console.log(res.data);
    var newState = {...this.state};
    newState = foundData;
    this.setState(newState);
    // console.log(this.state)
    });
}

  render() {
      return (
          <div>
            <h1>Hello from Events</h1>
              <ul>
              {this.state.event.map((event, i) => {
                  return (
                      <li key={i}>
                         <Link to={`/location/${event._id}/description`}>
                         {/* {event.name} */}
                         <h2>sup</h2>
                         </Link> 
                       </li> ); 
                      })} 
              </ul>
          </div>
      )
  }
}

Event.defaultProps = {
    name: "",
    venue: "",
    date: ""
 }

export default Event;
