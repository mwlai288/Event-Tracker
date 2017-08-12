import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

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
              <h1>Hello from Locations</h1>
                <ul>
                {filterLocation.map((location, i) => {
                    return (
                        <li key={i}>
                           <Link to={`/location/${location._id}`}>
                                {location.place}
                           </Link>
                        </li> );
                        })} 
                </ul>
                <input type="text" 
                       value={this.state.search}
                       onChange={this.updateSearch.bind(this)} />
            </div>
        )
    }
}
export default Location;
