import { createStore, applyMiddleware, compose, combineReducers } from 'redux';

import usersReducer from './reducers/usersReducer';
import currentUserReducer from './reducers/currentUserReducer';
import loginReducer from './reducers/loginReducer';
import newUserReducer from './reducers/newUserReducer';
import gameShelfReducer from './reducers/gameShelfReducer';
import allGamesReducer from './reducers/allGamesReducer';
import searchReducer from './reducers/searchReducer';
import commentReducer from './reducers/commentReducer';

import thunk from 'redux-thunk';

const reducers = combineReducers({
  users: usersReducer,
  currentUserReducer,
  loginReducer,
  newUserReducer,
  gameShelfReducer,
  allGamesReducer,
  searchReducer,
  commentReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;