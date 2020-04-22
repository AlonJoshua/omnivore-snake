import React, { Component, Fragment } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';

class Play extends Component {
	constructor(props) {
		super(props)
		this.state ={
			gameSqueres: []
		}
	}

		snakeMoves = (e) => {
		const { gameSqueres } = this.state;
		const arrowKey = e.keyCode;
		const findHead = (div) => div.className === 'head';
		const headIndex = gameSqueres.findIndex(findHead);
		switch (arrowKey) {
			case 38:
				gameSqueres[headIndex - 10].className = 'head';
				gameSqueres[headIndex].className = 'play-div';
				break;
			case 39:
				gameSqueres[headIndex + 1].className = 'head';
				gameSqueres[headIndex].className = 'play-div';
				break;
			case 37:
				gameSqueres[headIndex - 1].className = 'head';
				gameSqueres[headIndex].className = 'play-div';
				break;
			case 40:
				gameSqueres[headIndex + 10].className = 'head';
				gameSqueres[headIndex].className = 'play-div';
				break;
			default:
				break;
		}
	}

	componentDidMount() {
		// fill play area grid with divs
		const playArea = document.getElementById('container');
		// const snakeHead = document.getElementById('snake-head');
		// const snakeBody = document.getElementById('snake-body');
		const divArray = [];
		let order = 0;
		let id = 1;
		while (divArray.length < 130) {
				const newDiv = document.createElement('div');
				newDiv.style.order = order;
				newDiv.id = id.toString();
				newDiv.className = 'play-div';
				playArea.appendChild(newDiv);
				divArray.push(newDiv);
				order += 1;
				id += 1;
		}
		this.setState({gameSqueres: divArray});
		setTimeout(() => {
			document.addEventListener("keydown", this.snakeMoves, false);
			const head = document.getElementById('106');
			head.className = 'head';
			document.getElementById('116').className = 'body';
			document.getElementById('126').className = 'body';
		}, 200);
	}

	render() {
		return (
			<Fragment>
			<Navbar />
				<div 
				className='play-area'
				id='container'
				>
				{/*
				1) create a body for the snake that moves after him
				
				 */}
				</div>
			</Fragment>
		)
	}
}

export default Play;