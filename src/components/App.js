import React, { Component } from "react";
import { withRouter,Link } from 'react-router-dom'
import '../styles/main.scss'
class App extends Component {
  render() {
    return (

      <div id="menu">
        <Link to="/login">Login</Link>
        <br/>
        <Link to="/forgetPassword">Forget Password</Link>
        <br/>
        <br/>
        <Link to="/dashboard">dashboard</Link>

      {this.props.children}
     
    </div>
    );
  }
}

export default withRouter(App);
