import React from 'react';
import { connect } from 'react-redux';

const GameShelf = props => {
    const myGames = props.games.length > 0 ? 
        props.games.forEach(game => <GameCard />) : null

    return myGames
}

const mapStateToProps = state => {
    return {
        games: state.gameShelfReducer,
    }
}

export default connect(mapStateToProps)(GameShelf);