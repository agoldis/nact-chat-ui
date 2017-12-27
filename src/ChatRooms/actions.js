import { addUser, getUsers as getAPIUsers } from './api';

export const joinRoom = (user, roomId) => async (dispatch, getState) => {
  const response = await addUser(user, roomId);
};

export const getUsers = roomId => async dispatch => {
  const response = await getAPIUsers(roomId);
  dispatch({
    type: 'SET_USERS',
    payload: {
      users: response
    }
  });
};
