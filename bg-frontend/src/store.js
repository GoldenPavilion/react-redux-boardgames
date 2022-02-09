import { createStore, applyMiddleware, compose, combineReducer } from 'redux';

import usersReducer from './reducers/usersReducer';
import currentUserReducer from './reducers/currentUserReducer';
import loginReducer from './reducers/loginReducer';
import newUserReducer from './reducers/newUserReducer';
import gameShelfReducer from './reducers/gameShelfReducer';
import allGamesReducer from './reducers/allGamesReducer';
import searchReducer from './reducers/searchReducer';

