import React from 'react';

// Require CSS
require('./slide1.css');

export class Slide5 extends React.Component {


  render() {
    return <div className="wrapper">
          <h1>Current Distance to the Moon</h1>
        <div className="container">

          <div className="earth">
            <span>earth</span>
          </div>
          <div className="distance long">
            <span className="distance-label"></span>
          </div>
          <div className="moon">
            <span>moon</span>
          </div>

        </div>
        <img ref={this.monster} className="monster-pop" src="./assets/monster.png" alt="IT Monster" />
    </div>;
  }
}

