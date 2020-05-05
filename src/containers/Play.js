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

		// head values
		const findHead = (div) => div.className === 'head';
		const headIndex = gameSqueres.findIndex(findHead);
		const headId = parseInt(gameSqueres[headIndex].id);

		// tail tip values
		const findTail = (div) => div.id === snake[snake.length-1].id;
		const tailIndex = gameSqueres.findIndex(findTail);

		// border arrays
		const findRightBorder = (div) => div.className === 'play-div' && div.id % 10 === 0;
		const findLeftBorder = (div) => div.className === 'play-div' && div.id % 10 - 1 === 0;
		const leftBorderIdArr = gameSqueres.filter(findLeftBorder).map(e => parseInt(e.id));
		const rightBorderArr = gameSqueres.filter(findRightBorder).map(e => parseInt(e.id));

		// food values
		const findFood = (div) => div.className ==='food';
		const foodIdArr = gameSqueres.filter(findFood).map(e => parseInt(e.id))

		// check for eating
		const eatFood = (id) => {
			return id === headId - 10 || 
			id === headId + 10 ||
			id === headId - 1 ||
			id === headId + 1
		}
		const snakeAte = () => foodIdArr.some(eatFood)

		// move functions
		const newBodyArr = () => {
			if (snakeAte()) {
				// body grow
				snake[1].className = 'body';
			} else {
				snake[1].className = 'body';
				gameSqueres[tailIndex].className = 'play-div';
				snake.pop()
			}
		}

		const movesUp = () => {
			// can't cross top border
			if (!gameSqueres[headIndex - 10]) {
				console.log('game over: top cross')
			} else if (gameSqueres[headIndex - 10].className === 'body') {
				// can't cross body
				console.log('game over: body cross')
			} else {
				gameSqueres[headIndex - 10].className = 'head'
				snake.unshift(gameSqueres[headIndex - 10]);
				newBodyArr();
			}
		}

		const movesRight = () => {
			// can't skip to left border
			if (leftBorderIdArr.some(id => id === headId + 1)) {
				console.log('game over: right cross')
			} else if (!gameSqueres[headIndex + 1]) {
			// can't cross right bottom border
				console.log('game over: right cross')
			} else if (gameSqueres[headIndex + 1].className === 'body') {
				// can't cross body
				console.log('game over: body cross')
			} else {
				gameSqueres[headIndex + 1].className = 'head'
				snake.unshift(gameSqueres[headIndex + 1]);
				newBodyArr();
			}
		}

		const movesDown = () => {
			// can't cross bottom border
			if (!gameSqueres[headIndex + 10]) {
				console.log('game over: bottom cross')
			} else if (gameSqueres[headIndex + 10].className === 'body') {
				// can't cross body
				console.log('game over: body cross')
			} else {
				gameSqueres[headIndex + 10].className = 'head'
				snake.unshift(gameSqueres[headIndex + 10]);
				newBodyArr();
			}
		}

		const movesLeft = () => {
			// can't skip to right border
			if (rightBorderArr.some(id => id === headId - 1)) {
				console.log('game over: left cross')
			} else if (!gameSqueres[headIndex - 1]) {
			// can't cross left top corner
				console.log('game over: left cross')
			} else if (gameSqueres[headIndex - 1].className === 'body') {
				// can't cross body
				console.log('game over: body cross')
			} else {
				gameSqueres[headIndex - 1].className = 'head'
				snake.unshift(gameSqueres[headIndex - 1]);
				newBodyArr();
			}
		}

		switch (arrowKey) {
			case 38:
				movesUp();
				snakeAte();
				break;
			case 39:
				movesRight();
				break;
			case 37:
				movesLeft();
				break;
			case 40:
				movesDown();
				break;
			default:
				break;
		}
		
	}

	componentDidMount() {
		// fill play area grid with divs
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
		this.setState({
			gameSqueres: divArray, 
			snake: [divArray[105], divArray[115], divArray[125]]
		});

		// create snake head and body

		setTimeout(() => {
			document.addEventListener("keydown", this.snakeMoves, false);
			document.getElementById('106').className = 'head';
			document.getElementById('116').className = 'body';
			document.getElementById('126').className = 'body';
			document.getElementById('45').className = 'food';
			document.getElementById('25').className = 'food';

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

				1) If snake head cross body, game over
				
				 */}
				</div>
			</Fragment>
		)
	}
}

export default Play;