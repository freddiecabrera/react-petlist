import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes'

const dest = document.getElementById('content');
const Routes = routes();
ReactDOM.render( Routes, dest );

window.React = React; // enable debugger
