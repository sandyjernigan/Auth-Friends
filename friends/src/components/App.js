import React from 'react'
import { Route, NavLink, withRouter } from "react-router-dom"
import { Friend, Friends, CreateFriend, UpdateFriend } from "./friends/"
import Home from './Home'


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

        <Route path="/" exact render={() => <Home />} />
        <Route path="/friends" exact render={props => <Friends />} />
        <Route path="/friends/:id" render={props => <Friend />} />
        <Route path="/new" render={props => <CreateFriend />} />
        <Route path="/update/:id" render={props => <UpdateFriend />} />
      </div>
    );
  }
}

export default App;