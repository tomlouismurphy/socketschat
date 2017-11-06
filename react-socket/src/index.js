import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
const io = require('socket.io-client');

export const socket = io.connect('http://localhost:4000')

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();