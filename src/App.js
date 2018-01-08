import React from "react";
import { connect } from "react-redux";
import { grid } from "./App.css";
import { Chat } from "./Chat";
import { Modal } from "./Modal";
import { Join } from "./Chat";
import Aux from "./Aux";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: "SHOW_MODAL"
    });
  }
  render() {
    const { name } = this.props;
    return (
      <Aux>
        <Modal preventClose>
          <Join />
        </Modal>
        {name ? <Chat user={name} /> : null}
      </Aux>
    );
  }
}

export default connect(({ name }) => ({ name }))(App);
