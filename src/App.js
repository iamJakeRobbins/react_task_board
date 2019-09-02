import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom"
import Column from './components/Column'
import CreateNew from './components/CreateNew'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/Login'
import Task from './components/Task'


class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <Login />
        <div>
          This Styling will include a cool little slide transition once a user logs in, This will bring up their board.
        </div>
        <p> app content begins  </p>
        </header>
      </div>
    );
  }
}

export default App;
