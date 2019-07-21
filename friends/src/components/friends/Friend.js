import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import actions
import { getFriend } from '../../actions/dataActions';

class Friend extends React.Component {
  constructor() {
    super()
    this.state = {
		friend: { }, 
		errMsg: null
    }
  }

	componentDidMount() {
		const id = this.props.match.params.id;
		// call our action
		this.props.getFriend(id);
		this.setState({ friend: this.props.friend })
  }
  
  render() {
	const friend = this.state.friend

    return (
		<div className="friend">
			<h3>{friend.name}</h3>
			<p>{friend.age}</p>
			<p>{friend.email}</p>

			<Link to={`/update/${friend.id}`}>Edit</Link>
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

export default connect(mapStateToProps,mapDispatchToProps)(Friend)