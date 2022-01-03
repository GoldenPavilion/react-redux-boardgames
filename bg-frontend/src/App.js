import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import MainContainer from './components/MainContainer.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }
  
  render() {
    return (
      <Router>
      <div className="App">
        <NavBar />
            <Route exact path='/login' component={Login} />
            <Route exact path='/signup' component={SignUp} />
        <MainContainer />
      </div>
      </Router>
    );
  }
}

export default connect(null, { getCurrentUser } )(App);