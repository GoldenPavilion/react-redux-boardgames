import React from 'react';
import { connect } from 'react-redux';
import MyGameCard from './MyGameCard';
import { Outlet } from 'react-router-dom';

const GameShelf = props => {
    const myGames = props.games ? 
        props.games.map(game => 
            <MyGameCard key={game.id} game={game} />) : <div />
    
    return (
        <div className="game-shelf">
            <br />
            <Outlet />
            <h1>Your Games:</h1>
            <div className="row">
                {myGames}
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        games: state.gameShelfReducer
    }
}

export default connect(mapStateToProps)(GameShelf);