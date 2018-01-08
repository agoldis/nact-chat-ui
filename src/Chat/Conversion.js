import React from "react";
import Aux from "../Aux";
import { connect } from "react-redux";

const Message = ({ message }) => {
  if (message.type === "USER_JOINED") {
    return (
      <div>
        {message.payload.when}: User {message.payload.content} joined the chat
        room
      </div>
    );
  } else {
    <div>
      {message.payload.when}: {message.payload.content}
    </div>;
  }
};

const Conversation = ({ messages }) =>
  React.createElement(Aux, null, ...messages.map(m => <Message message={m} />));

export default connect(({ messages }) => ({ messages }))(Conversation);
