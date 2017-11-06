import React, { Component } from 'react';
import './App.css';
import {socket} from './index.js';
import {Login} from './Login/Login.js';
import {Chatroom} from './Chatroom/Chatroom.js';

class App extends Component {
  constructor(){
    super();
    this.state = {
      myUsername: '',
      loggedIn: false
    }
  }
  componentDidMount() {
    socket.on('message', (data) => {
      console.log(data);
    })
  }
  addUser = (user) => {
    const state = this.state;
    state.myUsername = user;
    state.loggedIn = !state.loggedIn;
    this.setState(state);
    console.log(this.state);
  }
  render() {
    return (
      <div>
        {this.state.loggedIn ? <Chatroom myUsername={this.state.myUsername}/> : <Login addUser={this.addUser}/>}

      </div>
    );
  }
}

export default App;
