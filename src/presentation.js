// Import React
import React from 'react';

// Import Spectacle Core tags
import { Deck } from 'spectacle';
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from './slides';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide1 transition={['fade']} bgColor="primary"></Slide1>
        <Slide2 transition={['fade']} bgColor="primary"></Slide2>
        <Slide3 transition={['fade']} bgColor="primary"></Slide3>
        <Slide4 transition={['fade']} bgColor="primary"></Slide4>
        <Slide5 transition={['fade']} bgColor="primary"></Slide5>
      </Deck>
    );
  }
}
