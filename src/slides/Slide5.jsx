import React from 'react';

// Require CSS
require('./slide5.css');

export class Slide5 extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <h1>Current Distance to the Moon</h1>
        <div className="container">
          <div className="earth-static">
            <span>earth</span>
          </div>
          <div className="distance-static">
            <span className="distance-label-static">NaN</span>
          </div>
          <div className="moon-static">
            <span>moon</span>
          </div>
        </div>
        <img
          id="monster04"
          src="./assets/monster_worried.svg"
          alt="Worried looking IT Monster"
        />
      </div>
    );
  }
}
