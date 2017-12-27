import { API_HOST, API_PORT } from '../../config';

const ws = new WebSocket(`ws://${API_HOST}:${API_PORT}`);
import { getUsers } from '../ChatRooms/';
import { store } from '../store';

ws.onmessage = function(event) {
  const data = JSON.parse(event.data);
  store.dispatch(getUsers(data.id));
};
