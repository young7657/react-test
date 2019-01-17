import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<Clock />
      	<Toggle />
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

class Toggle extends Component {
	constructor(props) {
		super(props);

		this.state = {isToggleOn: true};

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// this.setState({
		// 	isToggleOn: !this.state.isToggleOn
		// });
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}))
		// this.setState(function(prev) {
		// 	return {
		// 		isToggleOn: !prev.isToggleOn
		// 	}
		// })
	}

	render() {
		return (
			<button onClick={this.handleClick}>
				{this.state.isToggleOn ? 'ON' : 'OFF'}
			</button>
		)
	}
}

export default App;
