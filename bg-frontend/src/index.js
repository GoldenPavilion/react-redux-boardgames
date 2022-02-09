import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.css';

//import usersReducer from './reducers/usersReducer';
//import currentUserReducer from './reducers/currentUserReducer';
//import loginReducer from './reducers/loginReducer';
//import newUserReducer from './reducers/newUserReducer';
//import gameShelfReducer from './reducers/gameShelfReducer';
//import allGamesReducer from './reducers/allGamesReducer';
//import searchReducer from './reducers/searchReducer';

//const reducers = combineReducers({
//  users: usersReducer,
//  currentUserReducer,
// loginReducer,
//  newUserReducer,
//  gameShelfReducer,
//  allGamesReducer,
//  searchReducer
//})

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore( 
  // reducers, 
  //composeEnhancer(applyMiddleware(thunk))
//)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
