import './App.css';
import React, { Component } from 'react';
import NavBar from "./components/NavBar";
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

const mapStateToProps = state => {
  return {
    currentUser: state.currentUserReducer
  }
}

export default connect(mapStateToProps, { getCurrentUser } )(App);