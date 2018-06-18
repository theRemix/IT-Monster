import React from 'react';

// Require CSS
require('./slide1.css');

function format(float){
  return float.toFixed().toString().split('').reduce(function(number, digit, i, a){
    return number + ( (a.length-1 - i % 3 === 3 && i < a.length-1) ? digit + "," : digit );
  }, '');
}

export class Slide1 extends React.Component {

  state = {
    animating : false
  }

  constructor(props){
    super(props);

    this.distance = React.createRef();
    this.gremlinPeek = React.createRef();
    this.gremlin = React.createRef();
    this.label = React.createRef();
    this.moonDistance = 238900;

  }

  animate = timestamp => {
    if(this.state.animating){
      var stepDistance = ( this.distance.current.clientWidth / ( .52 * document.body.clientWidth ) * this.moonDistance );
      if(stepDistance > this.moonDistance / 2){
        this.label.current.innerText = NaN;
        // @bad
        this.gremlinPeek.current.classList.add('gremlin-peek-animate');
        this.gremlin.current.classList.add('gremlin-animate');
      } else {
        this.label.current.innerText = format(stepDistance);
      }
      window.requestAnimationFrame(this.animate);
    } else {
      this.label.current.innerText = NaN;
    }
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

        <img ref={this.gremlinPeek} className="gremlin-peek" src="./assets/gremlin-head.png" alt="gremlin peek" />
        <img ref={this.gremlin} className="gremlin" src="./assets/grommet-gremlin-rockin_v2.svg" alt="gremlin" />
    </div>;
  }
}

