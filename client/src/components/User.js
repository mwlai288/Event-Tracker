import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import axios from 'axios';
import AddEvent from './AddEvent';



class User extends Component {

  constructor() {
    super();
    this.state ={
      location: {
        place: ''
      }
    }
  }

_handleSubmitLocation = (e) => {
  e.preventDefault();
  console.log(this);
  axios.post('/api/location', this.state).then((res) => {
  console.log('please work');
  }).catch(err => (err));
  this.setState({
    location: this.state.location.place
  })
};

_handleChange = (event) => {
  const attributeValue = event.target.value;
  const newState = {...this.state}
  newState.location.place = attributeValue
  this.setState(newState)
}


render()  {
  return (
    <div>
      <h1>My Profile</h1>
       <br/>
       Will's Favorited Events:
       {/* list of favorited events  */}
      {/* Button to add City */}
     
      <br/>
      <form onSubmit={this._handleSubmitLocation}>
    <div>
      <label htmlFor="name">Location: </label> 
      <input 
          onChange={this._handleChange}
          value={this.state.location.place}
          type='text' 
          name='location'
          />
    </div>
      <button> Add New Location </button>
        </form>   

      <AddEvent />

  
       <button>Delete Event </button> 

      </div>
    );
  }
}

export default User;

