import React, { Component, Fragment } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Snake from './Snake';

class Play extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		// fill play area grid with divs
		const playArea = document.getElementById('container');
		const snakeHead = document.getElementById('snake-head');
		const snakeBody = document.getElementById('snake-body');
		const divArray = ['snake-head', 'snake-body'];
		while (divArray.length < 130) {
			const newDiv = document.createElement('div');
			playArea.appendChild(newDiv);
			divArray.push('newDiv');
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
				
				1) Snake start at the center of the screen

				 */}
				<Snake
				/>
				</div>
			</Fragment>
		)
	}
}

export default Play;