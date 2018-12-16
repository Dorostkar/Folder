import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router} from "react-router-dom";
import Root from './routers/Root'
import configureStore from "./store/configureStore.dev";
import "./styles/main.scss";

const store = configureStore();

ReactDOM.render(
  <Router>
    <Root store={store}/>
  </Router>,
  document.getElementById("app")
);
module.hot.accept();
