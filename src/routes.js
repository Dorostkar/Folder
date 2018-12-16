
import React from "react";
import { Switch, Route } from "react-router-dom";

import App from "./components/App";
import Login from "./components/login/Login.js"


export default () => (
  
    <App>
      <Switch>
      <Route exact path='/' exact  component={Login} /> {/*if path is / */}
      <Route path="/login" component={Login} /> {/*if path is /about */}
      {/* <Route path="/courses" component={CoursePage} />
      <Route path="/course/:id" component={ManageCoursePage} />
      <Route path="/course" component={ManageCoursePage} /> */}
      </Switch>
    </App>
  
);