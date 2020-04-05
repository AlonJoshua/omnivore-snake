import React, { Component, Fragment } from 'react';
import '../App.css';

class Snake extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}


	snakeMoves = (e) => {
		console.log('event keydown: ', e.keyCode)
		const arrowKey = e.keyCode;
		switch (arrowKey) {
			case 39:
				document.getElementById('snake-head').style.order = 1;
				break;
			case 37:
				document.getElementById('snake-head').style.order = -1;
			default:
				break;
		}
	}

	componentDidMount(){
    document.addEventListener("keydown", this.snakeMoves, false);
  }

	render() {
		return (
			<Fragment>
			 <div 
			 id='snake-head'
			 style={{
			 	backgroundColor: 'blue',
			 	order: '0'
			 }}
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