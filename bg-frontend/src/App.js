import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import MainContainer from './components/MainContainer.js'
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      <div className="App">
        <NavBar />
          <Router>
            <Route />
            <Route />
          </Router>
        <MainContainer />
      </div>
    );
  }
}

export default connect(null, { getCurrentUser } )(App);