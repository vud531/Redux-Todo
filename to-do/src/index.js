import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoApp from './container/ToDoApp';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import TaskReducer from './reducer/task'
import * as serviceWorker from './serviceWorker';

const store = createStore(
    TaskReducer
)
ReactDOM.render(
<ToDoApp />
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
