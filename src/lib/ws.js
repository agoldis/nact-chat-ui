import { API_HOST, API_PORT } from "../../config";
import { store } from "./store";
import { getUsers, createMessages } from "./actions";

const ws = new WebSocket(`ws://${API_HOST}:${API_PORT}`);

ws.onmessage = function(event) {
  const data = JSON.parse(event.data);
  if (data.event === "USER_JOINED") {
    store.dispatch(getUsers(data.id));
    store.dispatch(
      createMessages([
        {
          type: "USER_JOINED",
          payload: data.payload
        }
      ])
    );
  }
};
