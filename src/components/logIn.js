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
				<div>
					This Styling will include a cool little slide transition once a user logs in, This will bring up their board.
				</div>
				<p> app content begins  </p>
      </div>
    );
  }
}
export default Login;
