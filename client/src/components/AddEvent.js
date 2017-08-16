import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AddButton } from '../styles/Styling';
import axios from 'axios';


class AddEvent extends Component {
    constructor () {
        super();
        this.state={
            events: {
                name: '',
                venue: '',
                date: ''
            }
        }
    }

    _handleSubmitEvent = (e) => {
        e.preventDefault();
        console.log(this);
        axios.post('/api/event', this.state).then((res) => {
            console.log('please work');
            this.setState({
                events: res.data
            })
            this.props.getEvents();
        }).catch(err => (err));
        
      };

    _handleChange = (event) => {
        const attributeName = event.target.name;
        const attributeValue = event.target.value;

        const newState = {...this.state.events}
        newState[attributeName] = attributeValue
        this.setState({events: newState})
      }

    render () {
        return (
            <form onSubmit={this._handleSubmitEvent}>
            <label htmlFor="Event">Event: </label> 
            <input 
                onChange={this._handleChange}
                value={this.state.events.name}
                type='text'
                name='name'/>  
            
            <label htmlFor="Event">Venue: </label> 
            <input 
                onChange={this._handleChange}
                value={this.state.events.venue}
                type='text'
                name='venue'/>
      
           <label htmlFor="Event">Date: </label> 
            <input 
                onChange={this._handleChange}
                value={this.state.events.date}
                type='text'
                name='date'/>

         <AddButton> Add New Event </AddButton>
            </form>
            
          
            
     
        );
    }
}


export default AddEvent;