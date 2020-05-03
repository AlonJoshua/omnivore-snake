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
		// snake move system: based on grid div color
		snakeMoves = (e) => {
		const { gameSqueres, snake } = this.state;
		const arrowKey = e.keyCode;

		const findHead = (div) => div.className === 'head';
		const headIndex = gameSqueres.findIndex(findHead);

		const findTail = (div) => div.id === snake[snake.length-1].id;
		const tailIndex = gameSqueres.findIndex(findTail);

		const newBodyArr = () => {
			snake[1].className = 'body';
			gameSqueres[tailIndex].className = 'play-div';
			snake.pop()
		}

		switch (arrowKey) {
			case 38:
				gameSqueres[headIndex - 10].className = 'head';
				snake.unshift(gameSqueres[headIndex - 10]);
				newBodyArr();
				break;
			case 39:
				gameSqueres[headIndex + 1].className = 'head';
				snake.unshift(gameSqueres[headIndex + 1]);
				newBodyArr();
				break;
			case 37:
				gameSqueres[headIndex - 1].className = 'head';
				snake.unshift(gameSqueres[headIndex - 1]);
				newBodyArr();
				break;
			case 40:
				gameSqueres[headIndex + 10].className = 'head';
				snake.unshift(gameSqueres[headIndex + 10]);
				newBodyArr();
				break;
			default:
				break;
		}
		
	}

	componentDidMount() {
		// fill play area grid with divs
		const { gameSqueres } = this.state;
		const playArea = document.getElementById('container');
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
		this.setState({gameSqueres: divArray, snake: [divArray[105], divArray[115], divArray[125]]});

		// create snake head and body

		setTimeout(() => {
			document.addEventListener("keydown", this.snakeMoves, false);
			document.getElementById('106').className = 'head';
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
				1) every time the head moves, the body squares will move accordingly
				
				 */}
				</div>
			</Fragment>
		)
	}
}

export default Play;