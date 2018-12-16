import React from 'react'
// import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import App from './App'
import App from '../components/App'
import Login from '../components/login/Login'


const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" component={App} />
      <Route path="/:login/:name"
             component={Login} />
      <Route path="/:login"
             component={Login} />
    </div>
  </Provider>
)

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// }
export default Root