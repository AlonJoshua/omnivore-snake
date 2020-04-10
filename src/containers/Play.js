import React, { Component, Fragment } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Snake from './Snake';

class Play extends Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		// fill play area grid with divs
		const playArea = document.getElementById('container');
		const snakeHead = document.getElementById('snake-head');
		const snakeBody = document.getElementById('snake-body');
		const divArray = [snakeHead, snakeBody];
		let order = 0;
		while (divArray.length < 130) {
			if (order === parseInt(divArray[0].style.order) || 
				order === parseInt(divArray[1].style.order)) {
			order +=1;
			} else {
				const newDiv = document.createElement('div');
				newDiv.style.order = order;
				newDiv.className = 'play-div';
				playArea.appendChild(newDiv);
				divArray.push('newDiv');
				order += 1;	
			}
		}
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
				
				1) tail moves after the snake

				 */}
				<Snake
				/>
				</div>
			</Fragment>
		)
	}
}

export default Play;