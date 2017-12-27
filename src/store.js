import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = Object.assign({}, window.__PRELOADED_STATE__, {
  users: [],
  isModalOpen: false
});

const reducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, { isModalOpen: true });
    case 'CLOSE_MODAL':
      return Object.assign({}, state, { isModalOpen: false });
    case 'SET_USERS':
      return Object.assign({}, state, { users: action.payload.users });
      break;
    default:
      return state;
  }
};
export const store = createStore(reducer, applyMiddleware(thunk));
