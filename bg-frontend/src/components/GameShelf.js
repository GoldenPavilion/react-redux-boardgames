import React from 'react';
import { connect } from 'react-redux';

const GameShelf = () => {
    return(
        <div className="game-shelf">

        </div>
    )
}

const mapStateToProps = state => {
    return {
        games: state.games,
    }
}

export default connect(mapStateToProps)(GameShelf);