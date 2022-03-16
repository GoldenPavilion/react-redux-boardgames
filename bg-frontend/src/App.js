import './App.css';
import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import MainContainer from './components/MainContainer.js';
import Login from './components/Login.js';
import SignUp from './components/SignUp.js';
import AllGamesContainer from './components/AllGamesContainer.js';
import GameShelf from './components/GameShelf.js';
import GameDetails from './components/GameDetails.js';
import { connect } from 'react-redux';
import { getCurrentUser, logout } from "./actions/currentUser";
import { getAllGames } from "./actions/allGames";
import { getGameShelf } from "./actions/gameShelf";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    this.props.getCurrentUser();
    this.props.getAllGames();
    this.props.getGameShelf();
  }
  
  componentWillUnmount() {
    logout();
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
              {loggedIn ? 
                <Route exact path='/games' element={<AllGamesContainer />}>
                  <Route path=":gameId" element={<GameDetails />}/>
                </Route> 
                : ""
              }
              {loggedIn ? 
                <Route exact path='/my_games' element={<GameShelf />}>
                  <Route path=":myGameId" element={<GameDetails />}/>
                </Route> 
                : ""
              }
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


export default connect(mapStateToProps, { getCurrentUser, getAllGames, getGameShelf } )(App);

// GameShelf renders (weirdly), but AllGames broken again