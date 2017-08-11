import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Location extends Component {

    constructor() {
        super();
        this.state = {
            location: []
        }
    }

    componentWillMount() {

        axios.get("/api/location").then((res) => {
                console.log(res);
                this.setState({location: res.data});
                // id: res.data._id, location: res.data.location });
            });
    }

    render() {
        return (
            <div>
              <h1>Hello from Locations</h1>
                <ul>
                {this.state.location.map((location, i) => {
                    return (
                        <li key={i}>
                           <Link to={`/location/${location._id}`}>
                                {location.place}
                           </Link>
                        </li> );
                        })
                    } 
                </ul>
            </div>
        )
    }
}
export default Location;
