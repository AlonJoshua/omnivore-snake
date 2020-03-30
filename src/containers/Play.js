import React, { Component, Fragment } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Snake from './Snake';

class Play extends React.Component {
	constructor() {
		super()
	}

	snakePlace() {
		document.getElementById('snake-head').style.order=1;
		console.log('click');
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
				2) make the snake move

				 */}
				<Snake
				/>
				</div>
				<button 
				onClick={() => this.snakePlace()}
				>
				style
				</button>
			</Fragment>
		)
	}
}

export default Play;