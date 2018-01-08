import React from "react";
import { sendJoinRequest } from "../lib/api";
import { connect } from "react-redux";

class Join extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      error: null
    };
  }

  async sendCreationRequest() {
    const { name } = this.state;
    const { closeModal, dispatch } = this.props;

    try {
      const response = await sendJoinRequest(name);
      dispatch({
        type: "SET_NAME",
        payload: {
          name: this.state.name
        }
      });
      closeModal();
    } catch (e) {
      this.setState({
        error:
          e.response.text === "USER_EXISTS"
            ? "User already exists"
            : "Unknown error"
      });
    }
  }

  handleClick(e) {
    e.preventDefault();
    this.sendCreationRequest();
  }

  handleChange({ target }) {
    this.setState({ name: target.value });
  }

  render() {
    return (
      <form>
        <div> {this.state.error ? <div>{this.state.error}</div> : null}</div>
        <label htmlFor="name">Enter your name</label>
        <input id="name" onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>Join</button>
      </form>
    );
  }
}

export default connect()(Join);
