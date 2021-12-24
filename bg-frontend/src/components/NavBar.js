import React from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import Logout from './Logout'

const NavBar = ({ currentUser }) => {
    return(
        <div className="nav-bar">
            { currentUser ? <p>Hello { currentUser.username }</p> : ""}
            { currentUser ? <Logout /> : <Login /> }
        </div>
    )
}

const mapStateToProps = state => {
   return {
     currentUser: state.currentUserReducer
   }
}

export default connect(mapStateToProps)(NavBar);