import React, {Component} from "react";
class Classprops extends Component {
	render()
	{
		return (
			<div>
			<h1> Hello {this.props.name}, from {this.props.place} Welcome to the Institue</h1>
			</div>

		);
	}
}
export default Classprops;