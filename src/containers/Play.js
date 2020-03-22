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
				<Snake />
				</div>
			</Fragment>
		)
	}
}

export default Play;