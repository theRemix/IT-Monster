import React from 'react';

// Require CSS
require('./slide5.css');

function format(float){
  return float.toFixed().toString().split('').reduce(function(number, digit, i, a){
    return number + ( (a.length-1 - i % 3 === 3 && i < a.length-1) ? digit + "," : digit );
  }, '');
}

export class Slide5 extends React.Component {

  state = {
    animating : false
  }

  constructor(props){
    super(props);

    this.distance = React.createRef();
    this.monster = React.createRef();
    this.label = React.createRef();
    this.moonDistance = 238900;

  }

  animate = timestamp => {
    if(this.state.animating){
      var stepDistance = ( this.distance.current.clientWidth / ( .52 * document.body.clientWidth ) * this.moonDistance );
      this.label.current.innerText = stepDistance > this.moonDistance / 2 ? format(stepDistance) + " mi" : format(stepDistance);
    } else {
      this.label.current.innerText = format(this.moonDistance) + " mi";
      this.monster.current.classList.add('monster-animate');
    }
    window.requestAnimationFrame(this.animate);
  }

  setAnimating = () => {
    this.setState({ animating : true });
    window.requestAnimationFrame(this.animate);
  }

  setNotAnimating = () => {
    this.setState({ animating : false });
  }

  componentDidMount(){
    this.distance.current.addEventListener('animationstart', this.setAnimating);
    this.distance.current.addEventListener('animationend', this.setNotAnimating);
  }

  componentWillUnmount(){
    this.distance.current.removeEventListener('animationstart', this.setAnimating);
    this.distance.current.removeEventListener('animationend', this.setNotAnimating);
  }

  render() {
    return <div className="wrapper">
      <h1>Current Distance to the Moon</h1>
        <div className="container">

          <div className="earth">
            <span>earth</span>
          </div>
          <div className="distance long" ref={this.distance}>
            <span className="distance-label" ref={this.label}></span>
          </div>
          <div className="moon">
            <span>moon</span>
          </div>

        </div>

        <img ref={this.monster} className="monster" src="./assets/worried.svg" alt="IT Monster" />
    </div>;
  }
}

