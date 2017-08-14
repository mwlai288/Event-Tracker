import React, { Component } from 'react';
// import styled from 'styled-components';
import axios from 'axios';
import Location from './Location';
// import Event from './Event';


class User extends Component {

// _handleSubmitLocation = (location) => {
//   location.preventDefault();
//   console.log('sup');
//   axios.post('/api/location', 
//         {banana: 'banana', location: this.state.place})
//         .then(res => {
//           console.log("new city");
//           console.log(res.data);
//           this.setState({redirect: true, id: res.data._id});
//         });
// };
// _handleSubmitEvent = (e) => {
//   e.preventDefault();
//   axios.post('/api/event').then((res)=> {
//     console.log('woohoo');
//   }).catch (err => console.log('oops'));
// };

  render()  {
    return (
      <div>
        Hello from User

        <h1>My Profile</h1>
         <br/>
         Will's Favorited Events:
         {/* list of favorited events  */}

        {/* Button to add City */}
        {/* Button to add Event */}
        <br/>
        <form onSubmit={this._handleSubmitLocation}>
        <lable htmlFor="name">Location: </lable> 
        <input 
            onChange={this._handleSubmitLocation}
            value={this.props.location.place}
            type='text' />
        <button> Add New Location </button>
        </form>  
        
        <br/>

        <form onSubmit={this._handleSubmitEvent}>
        <lable htmlFor="name">Event: </lable> 
        <input 
            
            type='text'
            name='location'/>
        <button> Add New Location </button>
        </form>  
        
        <br/>

       <button>Delete Event </button> 

      </div>
    );
  }
}

export default User;

