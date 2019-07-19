import React from 'react'
import { Route, NavLink, withRouter } from "react-router-dom"
import { Friend, Friends, CreateFriend, UpdateFriend } from "./friends/"
import PrivateRoute from './PrivateRoute'
import Home from './Home'
import Login from './Login'

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <PrivateRoute path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;