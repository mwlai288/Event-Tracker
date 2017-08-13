import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Description extends Component {
  render() {



    return (
      <div>
        <h1>Welcome to DragonCon 2017</h1>
        <p>Largest multi-media, popular culture convention focusing on <br/>
          science fiction and fantasy, gaming, comics, literature, art, music, and film <br/>
          in the universe!</p>

        <img src={"http://i.imgur.com/ybf9pB5.jpg"} />  
          <br/>
        <Link to="/user"><button>My Profile</button></Link>   


                {/* Favorite Event and Push Data to User Page */}
        <button>Click To Save Event</button>
      </div>
    );
  }
}

export default Description;

