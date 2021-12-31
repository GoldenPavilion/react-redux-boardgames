import React from 'react';
import { connect } from 'react-redux';
import GameShelf from './GameShelf';

const MainContainer = () => {
    return(
        <div className="main-container">
            <p>THE BODY OF THE APP</p>
            <GameShelf />
        </div>
    )
}

export default MainContainer;