import React from 'react';
import { connect } from 'react-redux';

import { grid } from './App.css';

import { ChatRooms } from './ChatRooms';
import { Modal } from './Modal';

import { Join } from './User';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: 'SHOW_MODAL'
    });
  }
  render() {
    return (
      <div className={grid}>
        <Modal>
          <Join />
        </Modal>
        <ChatRooms />
        <div>Conversation</div>
        <div>Users list</div>
      </div>
    );
  }
}

export default connect()(App);
