import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getUsers } from "../lib/actions";

function User({ user, onClick }) {
  return <div onClick={onClick}>{user.name}</div>;
}

class UsersList extends React.Component {
  componentWillMount() {
    this.props.getUsers();
  }

  render() {
    const { rooms = [], users = [], getUsers } = this.props;
    return (
      <div>{users.map(user => <User key={user} user={{ name: user }} />)}</div>
    );
  }
}

function stateToProps(state, props) {
  return {
    users: state.users,
    rooms: [
      {
        active: true,
        id: "default",
        name: "default"
      }
    ]
  };
}

export default compose(connect(stateToProps, { getUsers }))(UsersList);
