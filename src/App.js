import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Clock />
      </div>
    );
  }
}

class Clock extends Component {
	constructor(props) {
		super(props)
		this.state = {date: new Date()};
	}

	componentDidMount() {
		console.log(111)
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		console.log(1111212)
		this.setState({
			date: new Date()
		});
	}

	render() {
		return (
			<div>
				<h1>Hello, World</h1>
				<h2>It is {this.state.date.toLocaleTimeString()}</h2>
			</div>
		)
	}
}

export default App;
