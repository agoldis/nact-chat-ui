import agent from '../lib/agent';

export function sendJoinRequest(name) {
  return agent
    .post(`${agent.BASE_URL}/api/rooms/default/users`)
    .send({
      name
    })
    .end();
}
