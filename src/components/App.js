import React, { Component } from "react";
import { withRouter,Link } from 'react-router-dom'
class App extends Component {
  render() {
    return (

      <div>
        <Link to="/login">Login</Link>
        
        <br/>
        <Link to="/dashboard/home">dashboard1</Link>
        <br/>
        <Link to="/dashboard/tax">dashboard2</Link>
        <br/>
        <Link to="/dashboard">dashboard</Link>

      {this.props.children}
     
    </div>
    );
  }
}

export default withRouter(App);
