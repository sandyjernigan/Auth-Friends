import React from 'react'
import { connect } from 'react-redux';
import { Route, NavLink, withRouter } from "react-router-dom"
import { Friend, Friends, CreateFriend, UpdateFriend } from "./friends/"
import Login from './Login'
// import actions
import { getData } from '../actions/dataActions';

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      friends: []
    }
  }

	componentDidMount() {
		// call our action
		this.props.getData();
  }
  
  logout = (evt) => {
    evt.preventDefault()

    localStorage.removeItem('token')
    this.props.history.push('/login')
  }

  render() {
    const { friends } = this.props;
    console.log(this.props.isLoading)

    if (this.props.isLoading) {
      // return something here to indicate that you are fetching data
      return <div>Loading ... </div>;
    }

    return (
      <div className="App">
        <header>
          <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/friends">Friends</NavLink>
            <NavLink to="/new">Add a New Friend</NavLink>
            <button type="button" onClick={this.logout}>Logout</button>
          </nav>
        </header>

        <Route exact path="/login" component={Login} />
        <Route path="/friends" exact render={props => <Friends {...props} friends={friends} />} />
        <Route path="/friends/:id" render={props => <Friend {...props} friends={friends} />} />
        <Route path="/new" render={props => <CreateFriend {...props} />} />
        <Route path="/update/:id" render={props => <UpdateFriend {...props} friends={friends} />} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		friends: state.dataReducer.friends,
		isLoading: state.dataReducer.isLoading,
		errMsg: state.dataReducer.errMsg
	}
}

const mapDispatchToProps = { getData };

export default withRouter(
  connect(mapStateToProps,mapDispatchToProps)(Home)
)