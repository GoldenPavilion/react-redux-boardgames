import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import MainContainer from './components/MainContainer.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import AllGamesContainer from './components/AllGamesContainer.js'
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser";
import { getAllGames } from "./actions/allGames";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getAllGames()
  }
  
  render() {
    const { loggedIn } = this.props
    return (
      <Router>
      <div className="App">
        <NavBar />
            <Routes>
              <Route exact path="/" element={<MainContainer />} />
              {!loggedIn ? <Route exact path='/login' element={<Login />} /> : ""}
              {!loggedIn ? <Route exact path='/signup' element={<SignUp />} /> : ""}
              {loggedIn ? <Route exact path='/games' element={<AllGamesContainer />} /> : ""}
            </Routes>
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUserReducer
  })
}


export default connect(mapStateToProps, { getCurrentUser, getAllGames } )(App);