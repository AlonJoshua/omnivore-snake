import React, { Component, Fragment } from 'react';
import Play from './containers/Play';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      route: 'main',
    }
  }

  startBtn(click) {
   return this.setState({ route: 'play' });
  }

  render() {
    const { route } = this.state;
    return (
      route === 'main' ?
      <Fragment>
      <h1 className='titles'>Omnivore Snake</h1>
      <button id='start-btn' onClick={() => {this.startBtn()}}>Press to Starts</button>
      </Fragment>
      : route === 'play' ?
      <Fragment>
      <Play />
      </Fragment>
      : 
      <h1>Error</h1>
    )
  }
}

export default App;
