import React from "react";
import { grid, users, conversation, inputArea } from "./Chat.css";
import { UsersList } from "../Users";
import Input from "./Input";
import Conversation from "./Conversion";

const Chat = () => (
  <div className={grid}>
    <div className={users}>
      <UsersList />
    </div>
    <div className={conversation}>
      <Conversation />
    </div>
    <div className={inputArea}>
      <Input />
    </div>
  </div>
);
export default Chat;
