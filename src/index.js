import React from 'react';
import ReactDOM from 'react-dom';
import 'bootswatch/dist/journal/bootstrap.min.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchProjects } from './redux/projects.actions';
import { fetchComponents } from './redux/components.actions';

let newStore = store();

newStore.dispatch(fetchProjects());
newStore.dispatch(fetchComponents());

ReactDOM.render(
  <Provider store={newStore}>
    <App />
  </Provider>,
  document.getElementById('root'));
