import {createStore, combineReducers} from 'redux';

import toDoReducer from './todo.store.js';
import itemReducer from './item.store.js';
import listReducer from './list.store.js';
import formReducer from './form.store.js';

let reducers = combineReducers({
  toDo: toDoReducer,
  item: itemReducer,
  list: listReducer,
  form: formReducer
})

export default () => createStore(reducers);