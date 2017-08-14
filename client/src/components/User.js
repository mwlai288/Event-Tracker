import React, { Component } from 'react';
// import styled from 'styled-components';
import axios from 'axios';



class User extends Component {

  constructor() {
    super();
    this.state ={
      location: {
        place: ''
      }
    }
  }

_handleSubmitLocation = (location) => {
  location.preventDefault();
  console.log('sup');
  axios.post('/api/location', this.state).then((res) => {
    console.log('please work');
  }).catch(err => (err));
};
// _handleSubmitEvent = (e) => {
//   e.preventDefault();
//   axios.post('/api/event').then((res)=> {
//     console.log('woohoo');
//   }).catch (err => console.log('oops'));
// };

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
            onChange={this._handleSubmitLocation}
            value={this.state.location.place}
            type='text' 
            />
      </div>
        <button> Add New Location </button>
        </form>  
        
        <br/>

         {/* Button to add Event */}
        {/* <form onSubmit={this._handleSubmitEvent}>
        <lable htmlFor="name">Event: </lable> 
        <input 
            
            type='text'
            name='location'/>
        <button> Add New Event </button>
        </form>   */}
        
        <br/>

       <button>Delete Event </button> 

      </div>
    );
  }
}

export default User;

