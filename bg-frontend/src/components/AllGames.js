import React from 'react';
import { connect } from 'react-redux';
import GameCard from './GameCard';

const AllGames = props => {
    const allGames = props.allGames ? 
        props.allGames.map(game => <GameCard key={game.id} game={game} />) : <div />
    
    return allGames
}

const mapStateToProps = state => {
    return {
        allGames: state.allGamesReducer
    }
}

export default connect(mapStateToProps)(AllGames);