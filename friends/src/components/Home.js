import React from 'react'
import { Route, NavLink, withRouter } from "react-router-dom"
import { Friend, Friends, CreateFriend, UpdateFriend } from "./friends/"
import PrivateRoute from './PrivateRoute'
import Login from './Login'

class Home extends React.Component {
  logout = (evt) => {
    evt.preventDefault()

    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/new">Add a New Friend</NavLink>
            <button type="button" onClick={this.logout}>Logout</button>
          </nav>
          {/* <p>{this.state.errMsg}</p> */}
        </header>
        <div className="home">
            <h2>Home</h2>
        </div>

        
        <Route exact path="/login" component={Login} />
        <Route path="/friends" exact render={props => <Friends />} />
        <Route path="/friends/:id" render={props => <Friend />} />
        <Route path="/new" render={props => <CreateFriend />} />
        <Route path="/update/:id" render={props => <UpdateFriend />} />
      </div>
    );
  }
}

export default withRouter(Home);