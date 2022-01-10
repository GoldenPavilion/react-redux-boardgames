import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser }) => {
    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/" className="nav-link" >Home </Link>
            { !currentUser ?<Link to="/login" className="nav-link">Login </Link> : ""}
            { !currentUser ? <Link to="/signup" className="nav-link">Sign Up</Link> : ""}
            { currentUser ? <Link to="/games" className="nav-link">Games</Link> : ""} 
        </div>
    )
}

const mapStateToProps = state => {
   return {
     currentUser: state.currentUserReducer
   }
}

export default connect(mapStateToProps)(NavBar);