import './App.css';
import React, { Component } from 'react';
import Login from "./components/Login";
import { connect } from 'react-redux';
import { getCurrentUser } from "../actions/currentUser";

class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}

export default connect(null, { getCurrentUser } )(App);


