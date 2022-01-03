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
            <button>Login</button>
            <button>Sign Up</button>
            {/* { currentUser ? <Logout /> : <Login /> }
            { currentUser ? <div /> : <SignUp /> }*/}
        </div>
    )
}

const mapStateToProps = state => {
   return {
     currentUser: state.currentUserReducer
   }
}

export default connect(mapStateToProps)(NavBar);