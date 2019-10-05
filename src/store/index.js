import {createStore, combineReducers} from 'redux';

import toDoReducer from './todo.store.js';

let reducers = combineReducers({
  toDo: toDoReducer,
})

export default () => createStore(reducers);