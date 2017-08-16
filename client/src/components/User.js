import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AddButton } from '../styles/Styling';
import AddLocation from './AddLocation';
import AddEvent from './AddEvent';



class User extends Component {

  constructor() {
    super();
    this.state = {
        firstName: "",
        userName: ""
    };
}

componentWillMount() {
  axios.get ("/api/user").then((res)=> {
    console.log(res);
    this.setState({user: res.data})
  })
}


render()  {
  return (
    <div>
      <h1>My Profile</h1>
       <br/>
    {/* {this.state.user.map((user, i) => {
      return (
        <div key={i}>
          {user.firstName}
          {user.userName} */}
        {/* </div> ); */}
       {/* })} */}
      
      
      <br/> 
      <AddLocation />
      <AddEvent />

  
       <AddButton>Delete Event </AddButton> 

      </div>
    );
  }
}

export default User;
