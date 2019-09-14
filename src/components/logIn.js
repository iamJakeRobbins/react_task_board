import React, { Component } from 'react';

class Login extends Component{
  render(){
    return(
      <div>
        <form>
					<div>
						<input type="text" id="userName" placeholder="Enter User Name"></input>
					</div>
					<div>
						<input type="text" id="password" placeholder="Enter Password"></input>
					</div>
          <button>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
export default Login;
