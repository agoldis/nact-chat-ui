import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import App from './App';
import './lib/ws';

const Root = (
  <Provider store={store}>
    <App />
  </Provider>
);

const target = document.getElementById('root');
render(Root, target);
