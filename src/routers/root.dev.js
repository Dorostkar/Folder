import React from 'react'
// import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from '../devtools/DevTools'
import { Route } from 'react-router-dom'
import App from '../components/App'
import Login from '../components/login/Login'
import Dashboard from '../components/dashboard/Dashboard'



const Root = ({ store }) => (
  <Provider store={store}>
    <div>
      <Route path="/" exact component={App} />
      {/* <Route path="/:login/:name"
             component={Login} /> */}
      <Route path="/login"
             component={Login} />
      
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/dashboard/:category" component={Dashboard} />
      <DevTools />
    </div>
  </Provider>
)

// Root.propTypes = {
//   store: PropTypes.object.isRequired,
// }

export default Root