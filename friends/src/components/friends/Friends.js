import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import actions
import { getData } from '../../actions';

class Friends extends React.Component {
	componentDidMount() {
		// call our action
		this.props.getData();
		console.log(this.props.friends);
	}

	render() {

		console.log("Login: " + localStorage.getItem('token'))
		
		if (this.props.isLoading) {
			// return something here to indicate that you are fetching data
			return <div>Loading ... </div>;
		}
		return (
			<div className="friendslist">

				{this.props.errMsg && <p className="error">{this.props.errMsg}</p>}

				<h2>Friends List</h2>
				{this.props.friends.map((friend) => (
					<Link to={`/friends/${friend.id}`} className="friend-card" key={friend.id}>
						<p>{friend.name}</p>
					</Link>
				))}
			</div>
		);
	}
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = (state) => {
	console.log(state, 'State');
	return {
		friends: state.dataReducer.friends,
		isLoading: state.isLoading,
		errMsg: state.errMsg
	};
};

const mapDispatchToProps = { getData };

export default connect(mapStateToProps, mapDispatchToProps)(Friends);
