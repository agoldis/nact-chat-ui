import { API_HOST, API_PORT } from '../../config';
import superagent from 'superagent';
import withPromise from 'superagent-promise';
const agent = withPromise(superagent, Promise);
agent.BASE_URL = `http://${API_HOST}:${API_PORT}`;
export default agent;
