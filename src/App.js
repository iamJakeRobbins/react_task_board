import React, { Component } from 'react';
import './style/App.css';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Column from './components/Column';
import CreateNew from './components/CreateNew';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/Login';
import Task from './components/Task';
import SideMenu from './components/SideMenu';
import UserHome from './components/UserHome';


class App extends Component {
  render(){
    return (
			<BrowserRouter>
	      <div className="App">
					<SideMenu />
					<Switch>
						<Route exact path='/' component={Login}/>
						<Route exact path='/userHome' component={UserHome}/>
					</Switch>
	      </div>
			</BrowserRouter>
    );
  }
}

export default App;
