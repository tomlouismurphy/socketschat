import React, { Component } from 'react';
import './Chatroom.css';
import {socket} from '../index.js';
import {Users} from '../Users/Users.js';
import {ChatBoard} from '../ChatBoard/ChatBoard.js';
import {ChatOptions} from '../ChatOptions/ChatOptions.js';

export class Chatroom extends Component {
	constructor(props){
		super(props);
		this.state = {
			usernames: [],
			messages: [],
			classification: ['red', 'blue'], 
			myUsername: this.props.myUsername
		}
	}
	componentDidMount() {
		const state = this.state;
		console.log(this.props.myUsername);
		socket.on('users', (arrayOfUserNames) => {
			state.usernames = arrayOfUserNames;
			this.setState(state);
		})
		socket.on('messages', (newMessages) => {
			const state = this.state;
			state.messages = newMessages;
			this.setState(state);
		})
	}
	chooseRoom = (e) => {
		console.log(e.currentTarget);
	}
	render() {
		return(
			<div className="row">
				<Users usernames={this.state.usernames}/>
				<ChatOptions classification={this.state.classification} chooseRoom={this.chooseRoom}/>
				<ChatBoard messages={this.state.messages} myUsername={this.props.myUsername} classification={this.state.classification}/>
			</div>
		)
	}
}