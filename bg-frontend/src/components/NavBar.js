import React from 'react';
import { connect } from 'react-redux';
import Logout from './Logout'


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