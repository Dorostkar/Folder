import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

const Home = () => (
  <h1>
    <Link to="/login">Click Me</Link>
  </h1>
);
const Login = () => <h1>About Us</h1>;
class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route component={() => <p>404</p>} />
      </Switch>
    );
  }
}

export default App;
