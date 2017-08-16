import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import axios from 'axios';

import AddEvent from './AddEvent'



class Location extends Component {

    constructor() {
        super();
        this.state = {
            location: [],
            search: ""
        };
    }

    updateSearch(event){ 
        this.setState({search: event.target.value});
    }

    componentWillMount() {
            axios.get("/api/location").then((res) => {
            console.log(res);
            this.setState({location: res.data});
            });
    }

    render() {
        let filterLocation = this.state.location.filter((location) => {
                return location.place.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div>
              <h1>Choose Your City</h1>

              <input type="text" 
                     placeholder ='Search'
                     value={this.state.search}
                     onChange={this.updateSearch.bind(this)} />

                <ul>
                {filterLocation.map((location, i) => {
                    return (
                        <li key={i}>
                           <Link to={`/location/${location._id}/event`}>
                                {location.place}
                           </Link>
                        </li> );
                        })} 
                </ul>
               

        
            </div>
        )
    }
}
export default Location;
