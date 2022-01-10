import React from 'react';
import { connect } from 'react-redux';
import GameCard from './GameCard';

const GameShelf = props => {
    const myGames = props.games ? 
        props.games.map(game => 
            <GameCard key={game.id} game={game} />) : <div />
    
    return myGames
}

const mapStateToProps = state => {
    return {
        games: state.gameShelfReducer
    }
}

export default connect(mapStateToProps)(GameShelf);