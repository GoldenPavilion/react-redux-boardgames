import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser";

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <NavBar />
    );
  }
}

export default connect(null, { getCurrentUser } )(App);