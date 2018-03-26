import React, { Component } from 'react';
import Place from './Place';
import places from './data';

class Home extends Component {
  render() {
    return (
      <div>
        <Place 
        data = {places}
        />
      </div>
    );
  }
}

export default Home