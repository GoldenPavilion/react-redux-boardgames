import React from 'react';
import { connect } from 'react-redux';
import Login from './Login'
import Logout from './Logout'
import SignUp from './SignUp'

const NavBar = ({ currentUser }) => {
    return(
        <div className="nav-bar">
            { currentUser ? <p>Hello { currentUser.attributes.username }</p> : ""}
            { currentUser ? <Logout /> : ""}
        </div>
    )
}

const mapStateToProps = state => {
   return {
     currentUser: state.currentUserReducer
   }
}

export default connect(mapStateToProps)(NavBar);