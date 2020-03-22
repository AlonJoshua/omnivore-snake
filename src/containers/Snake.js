import React, { Component, Fragment } from 'react';
import '../App.css';

class Snake extends Component {
	constructor() {
		super()
		this.state = {

		}
	}

	render() {
		return (
			<Fragment>
			 <div className='snake-head'>
			 </div>
			 <div className='snake-body'>
			 </div>
			 <div className='snake-body'>
			 </div>
			</Fragment>
		)
	}
}

export default Snake;