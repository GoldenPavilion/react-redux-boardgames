import React from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import Logout from './Logout'

const NavBar = (data) => {
    return(
        <div className="nav-bar">
            { data.currentUser ? `Hello ${ data.currentUser.username }` : ""}
            { data.currentUser ? <Logout /> : <Login /> }
        </div>
    )
}

const mapStateToProps = state => {
   return {
     currentUser: state.currentUserReducer
   }
}

export default connect(mapStateToProps)(NavBar);