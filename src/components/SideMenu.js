import React, { Component } from 'react';

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

	console.log("clicked");
	e.stopPropagation();
}

toggleMenu() {
  this.setState({
      visible: !this.state.visible
  });
	console.log(this.state)
}

  render(){
		var visibility = "hide";

	 if (this.state.visible) {
		 visibility = "show";
	 }
    return(
      <div id="sideMenu" className={visibility}>
			<div id="controlSideMenu">
				<button onMouseDown={this.handleMouseDown}>boop</button>
			</div>
				<ul>
					<li>My HomePage</li>
					<li>Add Column</li>
					<li>Add Button</li>
				</ul>
			</div>
    );
  }
}
export default SideMenu;
