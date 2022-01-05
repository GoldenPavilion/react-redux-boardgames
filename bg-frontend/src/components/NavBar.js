import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout'
import { Link } from 'react-router-dom';


const NavBar = ({ currentUser }) => {
    return(
        <div className="nav-bar">
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