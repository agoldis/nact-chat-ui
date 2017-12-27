import agent from '../lib/agent';

const url = roomId => `${agent.BASE_URL}/api/rooms/${roomId}/users`;

export function addUser(user, roomId) {
  return agent
    .post(url(roomId))
    .send({
      user
    })
    .then(response => response.body);
}

export function getUsers(roomId) {
  return agent.get(url(roomId)).then(response => response.body);
}
