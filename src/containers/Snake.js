import React, { Component, Fragment } from 'react';
import '../App.css';

class Snake extends Component {
	constructor(props) {
		super(props)
		this.state = {
		}
	}


	snakeMoves = (e) => {
		const divs = document.getElementsByClassName('play-div');
		let headOrder = document.getElementById('snake-head').style.order;
		let orderInt = parseInt(headOrder);
		const arrowKey = e.keyCode;
		for (let div in divs) {
			if (div.order === headOrder) {
				div.order--
				console.log(div.order);
			}
		}
		switch (arrowKey) {
			case 38:
				orderInt -= 10;
				orderInt.toString()
				document.getElementById('snake-head').style.order = orderInt;
				break;
			case 39:
				orderInt += 1;
				orderInt.toString()
				document.getElementById('snake-head').style.order = orderInt;
				break;
			case 37:
				orderInt -= 1;
				orderInt.toString()
				document.getElementById('snake-head').style.order = orderInt;
				break;
			case 40:
				orderInt += 10;
				orderInt.toString()
				document.getElementById('snake-head').style.order = orderInt;
				break;
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
			 	order: '53'
			 }}
			 >
			 </div>
			 <div 
			 className='snake-body'
			 id='snake-body'
			 style={{
				 	order: '63'
			 }}
			 >
			 </div>
			</Fragment>
		)
	}
}

export default Snake;