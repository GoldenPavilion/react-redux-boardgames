import React from 'react';
import { connect } from 'react-redux';
import GameShelf from './GameShelf';

const MainContainer = ({ currentUser }) => {
    return(
        <div className="main-container">
            { currentUser ? <GameShelf /> : <p>THE BODY OF THE APP</p>}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer
    }
}

export default connect(mapStateToProps)(MainContainer);