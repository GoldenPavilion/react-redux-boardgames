import React from 'react';
import { connect } from 'react-redux';
import ProfileContainer from './ProfileContainer';
import Home from './Home'

const MainContainer = ({ currentUser }) => {
    return(
        <div className="main-container">
            { currentUser ? <ProfileContainer key={currentUser.id} user={currentUser} /> : <Home />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer
    }
}

export default connect(mapStateToProps)(MainContainer);