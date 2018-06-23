import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const note = "Welcome To My React JS Page !";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Welcome/>
        </header>
        <p className="App-intro">
          {this.props.name} To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

class Welcome extends Component{
  render(){
    return (
      <h1 className="App-title">{note}</h1>
    );
  }
}