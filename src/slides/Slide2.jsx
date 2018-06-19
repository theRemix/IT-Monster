import React from 'react';

// Require CSS
require('./slide2.css');

export class Slide2 extends React.Component {
  render() {
    return (
      <div class="wrapper">
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
          id="monster02"
          src="./assets/monster_happy_peak_a_boo.svg"
          alt="Peak-a-boo IT Monster"
        />
      </div>
    );
  }
}
