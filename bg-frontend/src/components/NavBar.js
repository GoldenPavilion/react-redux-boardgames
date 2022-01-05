import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout'
import { Link } from 'react-router-dom';


const NavBar = ({ currentUser }) => {
    return(
        <div className="nav-bar">
            <Link to="/">Home </Link>
            { !currentUser ? <Link to="/login">Login </Link> : ""}
            { !currentUser ? <Link to="/signup">Sign Up</Link> : ""}
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