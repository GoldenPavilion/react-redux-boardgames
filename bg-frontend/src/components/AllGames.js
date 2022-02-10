import React from 'react';
import { connect } from 'react-redux';
import GameCard from './GameCard';

const AllGames = props => {
    const searchInput = props.searchInput.value
    
    const allGamesResults = props.allGames.length > 0 ? 
        props.allGames.map(game => <GameCard key={game.id} game={game} />) : <div />
    
    const searchResults = props.allGames.filter((game) => game.attributes.name?.toLowerCase() === searchInput?.toLowerCase())
    
    const displayResults = searchResults.length > 0 ?
        searchResults.map(game => <GameCard key={game.id} game={game} />) : <div />

    if (searchInput === ""){
        return allGamesResults;
    } else {
        return displayResults;
    }
}

const mapStateToProps = state => {
    return {
        allGames: state.allGamesReducer,
        searchInput: state.searchReducer
    }
}

export default connect(mapStateToProps)(AllGames);

// searchResults is not a function?