import Aux from "../Aux";
import React from "react";
import { inputButton, inputField } from "./Input.css";

const InputField = () => (
  <Aux>
    <input placeholder="Enter text..." className={inputField} />
    <button className={inputButton}>Send</button>
  </Aux>
);
export default InputField;
