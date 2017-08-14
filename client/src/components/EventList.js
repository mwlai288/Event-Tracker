import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class EventList extends Component {

    constructor() {
        super();
        this.state = {
          events: [
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
        // const id = this.props.match.params.eventId;
        const locationId = this.props.match.params.locationId;
        console.log(locationId)
        axios.get(`/api/location/${locationId}`).then((res) => {
        console.log(res);
        this.setState({events: res.data.events})
    });
    }

    render() {
        return (
            <ul>
            {this.state.events.map((event, i) => {
                return (
                    <li key={i}>
                       <Link to={'/event/:eventId/description'}>
                       {event.name}
                       {event.venue}
                       {event.date}
                       </Link> 
                     </li> ); 
                    })} 
            </ul>
        )
    }
}


export default EventList;
