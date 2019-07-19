import React from 'react'
import { Route } from "react-router-dom"
import PrivateRoute from './PrivateRoute'
import Home from './Home'
import Login from './Login'

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			errMsg: null
		}
  }
  
  render() {

    const errMsg = this.state.errMsg

    return (
      <div className="App">
        {errMsg && <p className="error">{errMsg}</p>}

        <PrivateRoute path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    );
  }
}

export default App;