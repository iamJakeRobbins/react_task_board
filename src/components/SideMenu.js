import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SideMenu extends Component{
	constructor(props, context) {
  super(props, context);

  this.state = {
    visible: false
  };

  this.toggleMenu = this.toggleMenu.bind(this);
	this.handleMouseDown = this.handleMouseDown.bind(this);
}

handleMouseDown(e) {
	this.toggleMenu();

	e.stopPropagation();
}

toggleMenu() {
  this.setState({
      visible: !this.state.visible
  });
}

  render(){
		let visibility = this.state.visible ? 'show' : 'hide';

    return(
      <div id="sideMenu" className={visibility}>
			<div id="controlSideMenu">
				<button onClick={this.handleMouseDown}>boop</button>
			</div>
				<ul>
					<li><Link to="/userHome">My Home Page</Link></li>
					<li><button>Add Column</button></li>
					<li><button>Add Button</button></li>
				</ul>
			</div>
    );
  }
}
export default SideMenu;
