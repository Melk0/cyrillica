import React from 'react';
import ReactDOM from 'react-dom';
import Booking from './Booking'
import './header'
import Head from './header'
import Floor from './floor.js';
import Footer from './footer'

ReactDOM.render(<Booking />, document.getElementById('booking'));
ReactDOM.render(<Head />, document.getElementById('head'));
ReactDOM.render(<Floor />, document.getElementById('floor1'));
ReactDOM.render(<Footer />, document.getElementById('footer'));