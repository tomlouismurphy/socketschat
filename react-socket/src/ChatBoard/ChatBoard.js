import React, { Component } from 'react';
import {socket} from '../index.js';
import './ChatBoard.css';

export class ChatBoard extends Component {
	constructor(props){
		super(props);
		this.state = {
			messageValue: ''
		}
	}
	handleMessage = (e) => {
		const state = this.state;
		state.messageValue = e.target.value;
		this.setState(state);
	}
	handleSubmit = (e) => {
		e.preventDefault();
		socket.emit('messages', this.state.messageValue);
		const state = this.state;
		state.messageValue = '';
		this.setState(state);
		console.log(this.props.myUsername);
	}
	render() {
		const messages = this.props.messages.map((item, i) => {
			return <li key={i}><span className={this.props.myUsername === item.username ? 'current-user' : ''}>{item.username}</span> : {item.message}</li>
		})
		return(
			<div className="col s6">
				<div className="subset" id="chatBoardContainer">
					<h3>this is the chat board</h3>
						<ul>
							{messages}
						</ul>
						<form onSubmit={this.handleSubmit}>
							<input type='text' value={this.state.messageValue} onChange={this.handleMessage}/>
						</form>
				</div>
			</div>
		)
	}
}