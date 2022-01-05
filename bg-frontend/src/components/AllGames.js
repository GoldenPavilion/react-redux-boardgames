import React from 'react';
import { connect } from 'react-redux';
import GameCard from './GameCard';

const AllGames = props => {
    const myGames = props.games ? 
        props.games.map(game => <GameCard key={game.id} game={game} />) : <div />
    
    return myGames
}

const mapStateToProps = state => {
    return {
        allGames: state.gameShelfReducer
    }
}

export default connect(mapStateToProps)(AllGames);