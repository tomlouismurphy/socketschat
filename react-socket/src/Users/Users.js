import React, { Component } from 'react';
import {socket} from '../index.js';

export class Users extends Component {
	constructor(){
		super()
	}
	render() {
		const userbase = this.props.usernames.map((item, i) => {
			return <li key={i}>{item}</li>
		})
		return(
			<div className="col s3">
				<h4>Now Online</h4>
				<div className="subset" id="usersContainer">
					<ul>{userbase}</ul>
				</div>
			</div>
		)
	}
}