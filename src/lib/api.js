import agent from "../lib/agent";

export function addUser(user, roomId) {
  return agent
    .post(`${agent.BASE_URL}/api/rooms/${roomId}/users`)
    .send({
      user
    })
    .then(response => response.body);
}

export function getUsers(roomId) {
  return agent
    .get(`${agent.BASE_URL}/api/rooms/${roomId}/users`)
    .then(response => response.body);
}

export function sendJoinRequest(name) {
  return agent
    .post(`${agent.BASE_URL}/api/rooms/default/users`)
    .send({
      name
    })
    .end();
}
