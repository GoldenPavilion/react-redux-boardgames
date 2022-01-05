import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout'
import { Link } from 'react-router-dom';


const NavBar = ({ currentUser }) => {
    return(
        <div className="nav-bar">
            <Link to="/">Home </Link>
            <Link to="/login">Login </Link>
            <Link to="/signup">Sign Up</Link>
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