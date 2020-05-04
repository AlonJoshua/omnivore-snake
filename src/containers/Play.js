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
		const { gameSqueres, snake, lastMove } = this.state;
		const arrowKey = e.keyCode;

		const findHead = (div) => div.className === 'head';
		const headIndex = gameSqueres.findIndex(findHead);
		const headId = gameSqueres[headIndex].id;

		const findTail = (div) => div.id === snake[snake.length-1].id;
		const tailIndex = gameSqueres.findIndex(findTail);

		const findRightBorder = (div) => div.className === 'play-div' && div.id % 10 === 0;

		const findLeftBorder = (div) => div.className === 'play-div' && div.id % 10 - 1 === 0;

		const newBodyArr = () => {
			snake[1].className = 'body';
			gameSqueres[tailIndex].className = 'play-div';
			snake.pop()
		}

		// move functions
		const movesUp = () => {
			// can't cross top border
			if (!gameSqueres[headIndex - 10]) {
				// this.setState({snake: lastMove});
				console.log('game over: top cross')
			} else {
				gameSqueres[headIndex - 10].className = 'head'
				snake.unshift(gameSqueres[headIndex - 10]);
				newBodyArr();
			}
		}

		const movesRight = () => {
			// can't skip to left border
			const leftBorderArr = gameSqueres.filter(findLeftBorder).map(e => e.id);
			if (leftBorderArr.some(id => parseInt(id) === parseInt(headId) + 1)) {
				console.log('game over: right cross')
			} else if (!gameSqueres[headIndex + 1]) {
				console.log('game over: right cross')
			} else {
				gameSqueres[headIndex + 1].className = 'head'
				snake.unshift(gameSqueres[headIndex + 1]);
				newBodyArr();
			}
		}

		const movesDown = () => {
			// can't cross bottom border
			if (!gameSqueres[headIndex + 10]) {
				// this.setState({snake: lastMove});
				console.log('game over: bottom cross')
			} else {
				gameSqueres[headIndex + 10].className = 'head'
				snake.unshift(gameSqueres[headIndex + 10]);
				newBodyArr();
			}
		}

		const movesLeft = () => {
			// can't cross left border
			const rightBorderArr = gameSqueres.filter(findRightBorder).map(e => e.id);
			if (rightBorderArr.some(id => parseInt(id) === parseInt(headId) - 1)) {
				console.log('game over: left cross')
			} else if (!gameSqueres[headIndex - 1]) {
				console.log('game over: left cross')
			} else {
				gameSqueres[headIndex - 1].className = 'head'
				snake.unshift(gameSqueres[headIndex - 1]);
				newBodyArr();
			}
		}

		switch (arrowKey) {
			case 38:
				movesUp();
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
			snake: [divArray[105], divArray[115], divArray[125]],
			lastMove: [divArray[105], divArray[115], divArray[125]]
		});

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
				1) make moves valid with no border or body cross
				
				 */}
				</div>
			</Fragment>
		)
	}
}

export default Play;