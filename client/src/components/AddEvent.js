import React, { Component } from 'react';

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

    _handleSubmitLocation = (e) => {
        e.preventDefault();
        console.log(this);
        axios.post('/api/event', this.state).then((res) => {
        console.log('please work');
        }).catch(err => (err));
        this.setState({
          events: this.props.events.name,
        //   events: this.props.events.venue,
        //   events: this.props.events.date
        })
      };

    _handleChange = (event) => {
        const attributeValue = event.target.value;
        const newState = {...this.state}
        newState.events.name = attributeValue
        // newState.events.venue = attributeValue
        // newState.events.date = attributeValue
        this.setState(newState)
      }

    render () {
        return (
            
            <form onSubmit={this._handleSubmitEvent}>
            <label htmlFor="name">Event: </label> 
            <input 
                onChange={this._handleChange}
                value={this.state.events.name}
                // value={this.state.events.venue}
                // value={this.state.events.date} 
                type='text'
                name='location'/>
            <button> Add New Event </button>
            </form>   
        );
    }
}







export default AddEvent;