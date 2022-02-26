import React from 'react';
import { connect } from 'react-redux';
//import ProfileContainer from './ProfileContainer';
import UserProfile from './UserProfile';
import Home from './Home'

const MainContainer = ({ currentUser }) => {
    return(
        <div className="main-container">
            { currentUser ? <UserProfile key={currentUser.id} user={currentUser} /> : <Home />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer
    }
}

export default connect(mapStateToProps)(MainContainer);