import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = ({ currentUser }) => {
    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home </Link>
                </li>
                <li className="nav-item">
                    { !currentUser ?<Link to="/login" className="nav-link">Login </Link> : ""}
                </li>
                <li className="nav-item">
                    { !currentUser ? <Link to="/signup" className="nav-link">Sign Up</Link> : ""}
                </li>
                <li className="nav-item">
                    { currentUser ? <Link to="/games" className="nav-link">Games</Link> : ""} 
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
   return {
     currentUser: state.currentUserReducer
   }
}

export default connect(mapStateToProps)(NavBar);