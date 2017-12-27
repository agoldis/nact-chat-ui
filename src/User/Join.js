import React from 'react';
import { sendJoinRequest } from './api';
import { take } from 'rxjs/operators/take';

const reduce = (state = { name: '', error: null }, action = {}) => {
  switch (action.type) {
    case 'SET_NAME':
      return { ...state, name: action.payload.name, error: null };
    case 'USER_EXISTS':
      return { ...state, error: 'User alredy exists' };
    default:
      return state;
  }
};

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = reduce();
  }

  async dispatch(action = {}) {
    this.setState(reduce(this.state, action));
  }

  async _dispatch(action) {
    const { closeModal } = this.props;
    try {
      const response = await action;
      closeModal();
    } catch (e) {
      if (e.response.text === 'USER_EXISTS') {
        this.dispatch({ type: e.response.text });
      }
    }
  }

  async sendCreationRequest() {
    const { name } = this.state;
    this._dispatch(sendJoinRequest(name));
  }

  handleClick(e) {
    e.preventDefault();
    this.sendCreationRequest();
  }

  handleChange({ target }) {
    this.dispatch({ type: 'SET_NAME', payload: { name: target.value } });
  }

  render() {
    return (
      <form>
        {this.state.error ? <div>{this.state.error}</div> : null}
        <label htmlFor="name">Enter your name</label>
        <input id="name" onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>Join</button>
      </form>
    );
  }
}

export default Join;
