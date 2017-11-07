import React, { Component } from 'react';

export class ChatOptions extends Component {
	render() {
		const classification = this.props.classification.map((item, i) => {
			return <li key={i} chooseRoom={this.chooseRoom}>{item}</li>
		})
		return(
			<div className="col s3">
				<div className="subset" id="chatOptionsContainer">
					<h5>Chat List</h5>
						<ul>{classification}</ul>
				</div>
			</div>
		)
	}
}