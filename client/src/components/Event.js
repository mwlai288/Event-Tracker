import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Event extends Component {
 
    constructor() {
      super();
      this.state = {
        name: "",
        venue: "",
        date: ""
      }
  }

  componentWillMount() {

      axios.get("/api/event").then((res) => {
              console.log(res);
              this.setState({event: res.data});
          });
  }

  render() {
      return (
          <div>
            <h1>Hello from Events</h1>
              {/* <ul>
              {this.state.event.map((event, i) => {
                  return (
                      <li key={i}>
                         <Link to={`/event/${event._id}`}>
                              {event.name}
                              {event.venue}
                              {event.date}
                         </Link>
                      </li> );
                      })
                  } 
              </ul> */}
          </div>
      )
  }
}

export default Event;
