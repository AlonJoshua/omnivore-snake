import React, { Component, Fragment } from 'react';
import '../App.css';

class Snake extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<Fragment>
			 <div 
			 id='snake-head'
			 style={{order: 0, backgroundColor: 'blue'}}
			 >
			 </div>
			 <div 
			 className='snake-body'
			 id='snake-body'
			 >
			 </div>
			</Fragment>
		)
	}
}

export default Snake;