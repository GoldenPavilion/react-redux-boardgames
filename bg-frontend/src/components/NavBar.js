import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetSearchForm } from '../actions/searchForm';

const NavBar = ({ currentUser, resetSearchForm }) => {

    const handleOnClick = () => {
        resetSearchForm();
    }

    return(
        <div className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand">BoardGameShelf</div>
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <Link to="/" className="nav-link" onClick={handleOnClick}>Home </Link>
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

export default connect(mapStateToProps, { resetSearchForm })(NavBar);