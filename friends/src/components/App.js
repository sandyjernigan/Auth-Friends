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
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends">Friends</NavLink>
          </nav>
          {/* <p>{this.state.errMsg}</p> */}
        </header>

        <PrivateRoute path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/friends" exact render={props => <Friends />} />
        <Route path="/friends/:id" render={props => <Friend />} />
        <Route path="/new" render={props => <CreateFriend />} />
        <Route path="/update/:id" render={props => <UpdateFriend />} />
      </div>
    );
  }
}

export default App;