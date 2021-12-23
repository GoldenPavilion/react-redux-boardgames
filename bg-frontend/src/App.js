import './App.css';
import React, { Component } from 'react';
import Login from "./components/Login";
import Logout from "./components/Logout";
import { connect } from 'react-redux';
import { getCurrentUser } from "./actions/currentUser";

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <Login />,
      <Logout />
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    currentUser: state.currentUserReducer
  }
}

export default connect(mapStateToProps, { getCurrentUser } )(App);