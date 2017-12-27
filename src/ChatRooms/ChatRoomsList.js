import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { joinRoom, getUsers } from './actions';

function Room({ room, onClick }) {
  return <div onClick={onClick}>{room.name}</div>;
}

function ChatRoomsList({ rooms = [], users = [], joinRoom, getUsers }) {
  return (
    <div>
      <div onClick={getUsers.bind(null, 'default')}>get</div>
      {users.map(user => <Room key={user} room={{ name: user }} />)}
      {rooms.map(room => (
        <Room
          key={room.id}
          room={room}
          onClick={joinRoom.bind(
            null,
            { id: 'userA', name: 'someIUser' },
            room.id
          )}
        />
      ))}
    </div>
  );
}

function stateToProps(state, props) {
  return {
    users: state.users,
    rooms: [
      {
        active: true,
        id: 'default',
        name: 'default'
      }
    ]
  };
}

export default compose(connect(stateToProps, { joinRoom, getUsers }))(
  ChatRoomsList
);
