import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Location extends Component {

constructor (){
    super();
    this.state = {
        location: ""
    }
}

componentWillMount(){
    axios.get('localhost:3001/api/location').then(res => {
        this.setState({
            id: res.data._id,
            location: res.data.location,
        });
    });
}


  render() {
    return (
     <div>   
      <h1>Hello from Locations</h1>
      {this.props.location.map((location, i) => {
          <div key={i}>
              <Link to={`/location/${location._id}`}>
                </Link>
           </div>     
      })}
     </div>
    );
  }
}

export default Location;

