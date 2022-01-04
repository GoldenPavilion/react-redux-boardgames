import React from 'react';
import { connect } from 'react-redux';
import GameShelf from './GameShelf';
import Home from './Home'

const MainContainer = ({ currentUser }) => {
    return(
        <div className="main-container">
            { currentUser ? <GameShelf /> : <Home />}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer
    }
}

export default connect(mapStateToProps)(MainContainer);