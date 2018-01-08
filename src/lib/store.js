import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = Object.assign({}, window.__PRELOADED_STATE__, {
  users: [],
  isModalOpen: false
});

const reducer = (state = { users: [], name: null, messages: [] }, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      return { ...state, isModalOpen: true };
    case "CLOSE_MODAL":
      return { ...state, isModalOpen: false };
    case "SET_USERS":
      return { ...state, users: action.payload.users };
    case "SET_NAME":
      return { ...state, name: action.payload.name };
    case "CREATE_MESSAGES":
      return {
        ...state,
        messages: [...state.messages, ...action.payload.messages]
      };
    default:
      return state;
  }
};
export const store = createStore(reducer, applyMiddleware(thunk));
