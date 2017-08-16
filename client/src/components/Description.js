import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { DescriptionTitle, PagePad, PlainText } from '../styles/Styling';
class Description extends Component {
  render() {
    return (
      <PagePad>


        <DescriptionTitle>Welcome to DragonCon 2017</DescriptionTitle>
        <PlainText>Largest multi-media, popular culture convention focusing on <br/>
          science fiction and fantasy, gaming, comics, literature, art, music, and film <br/>
          in the universe!</PlainText>

        <img src={"http://i.imgur.com/ybf9pB5.jpg"} />  
          <br/>

                {/* Favorite Event and Push Data to User Page */}
        <button>Click To Save Event</button>
      </PagePad>
    );
  }
}

export default Description;
