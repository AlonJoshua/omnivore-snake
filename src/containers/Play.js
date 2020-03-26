import React, { Component, Fragment } from 'react';
import '../App.css';
import Navbar from '../components/Navbar';
import Snake from './Snake';

class Play extends Component {
	constructor() {
		super()
		this.state = {

		}
	}

	render() {
		return (
			<Fragment>
			<Navbar />
				<div className='play-area'>
				{/*
				
				1) set play area
				2) Snake start at the center of the screen

				 */}
				<Snake />
				</div>
			</Fragment>
		)
	}
}

export default Play;