import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import AddEvent from './AddEvent'

class EventList extends Component {

    constructor() {
        super();
        this.state = {
          events: [
              {
                  name:'' ,
                  venue:'' ,
                  date: '',
                  description: '',
                  imgUrl: ''
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
         this._getEvents()
    }
    
    _getEvents = () => {
        const locationId = this.props.match.params.locationId;
        axios.get(`/api/location/${locationId}`).then((res) => {
            console.log(res);
            this.setState({events: res.data.events})
        });
    }
    render() {
        const id = this.props.match.params.eventsId;
        return (
            
            <div>
                <h1>Pick an Event</h1>
            <ul>
            {this.state.events.map((event, i) => {
                return (
                    <li key={i}>
                       <Link to={`/event/${event._id}/description`}>
                       {event.name}
                       {event.venue}
                       
                       </Link> 
                     </li> 
                     ); 
                    })} 
            </ul>
            <AddEvent getEvents={this._getEvents} />
            </div>
        )
    }
}


export default EventList;
