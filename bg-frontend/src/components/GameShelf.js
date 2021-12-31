import React from 'react';
import { connect } from 'react-redux';

const GameShelf = props => {
    console.log(props)
    return(
        <div className="game-shelf">

        </div>
    )
}

const mapStateToProps = state => {
    return {
        games: state.gameShelfReducer,
    }
}

export default connect(mapStateToProps)(GameShelf);