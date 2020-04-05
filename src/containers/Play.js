import React, { Component, Fragment } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Snake from './Snake';

class Play extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const playArea = document.getElementById('container');
		console.log('play-area:', playArea);
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
				
				1) fill the play area with div squares
				2) Snake start at the center of the screen

				 */}
				<Snake
				/>
				</div>
			</Fragment>
		)
	}
}

export default Play;