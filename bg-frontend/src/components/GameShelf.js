import React from 'react';
import { connect } from 'react-redux';
import MyGameCard from './MyGameCard';

const GameShelf = props => {
    const myGames = props.games ? 
        props.games.map(game => 
            <MyGameCard key={game.id} game={game} />) : <div />
    
    return (
        <div>
            {myGames}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        games: state.gameShelfReducer
    }
}

export default connect(mapStateToProps)(GameShelf);