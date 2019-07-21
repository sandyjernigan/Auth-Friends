import React from "react"
import { connect } from 'react-redux';
import "./friendsform.css"
// import actions
import { getFriend } from '../../actions/dataActions';
import { putData } from '../../actions/dataActions';

class UpdateFriend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      friend: { }, 
      errMsg: null, 
      putData: this.props.putData
    }
  }

  componentDidMount() {
		const id = this.props.match.params.id;
		// call our action
		this.props.getFriend(id);
    this.setState({ friend: this.props.friend })
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  updateFriend = e => {
    e.preventDefault()
    // const id = this.props.match.params.id
    const { id, name, age, email } = this.state.friend
    const payload = { name, age, email }
    
    putData(id, payload)
    this.props.history.push("/friends")
  }

  deleteFriend = e => {
    e.preventDefault()
    // const id = this.props.match.params.id

    // axios.delete(`http://localhost:5000/friends/${id}`)
    //   .then((response) => {
    //     this.setState({
    //       errMsg: null
    //     })
    //     this.props.updateFriends(response.data)
    //     this.props.history.push("/friends")
    //   })
  }

  render() {
    const { name, age, email } = this.state.friend
    const putData = this.props.putData

    return (
      <div className="createfriend">
        <h2>Update this Friend</h2>
        <form onSubmit={this.updateFriend}>
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
          <input
            type="text"
            name="age"
            onChange={this.handleChange}
            value={age}
          />
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
          <button type="submit">
            Update
          </button>
          <button onClick={this.deleteFriend}>
            Delete
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		friend: state.dataReducer.friend,
		errMsg: state.dataReducer.msg
	}
}

const mapDispatchToProps = { getFriend };

export default connect(mapStateToProps,mapDispatchToProps)(UpdateFriend)
