import React, {Component} from 'react';
import {socket} from '../index.js';

export class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			username: ''
		}
	}
	handleNameChange = (e) => {
		const state = this.state;
		state.username = e.currentTarget.value;
		this.setState(state);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		socket.emit('addUser', this.state.username);
		this.props.addUser(this.state.username);
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit}>
				<input type='text' placeholder='username' onChange={this.handleNameChange} value={this.state.username} />
				<button>Login</button>
			</form>
		)
	}
}