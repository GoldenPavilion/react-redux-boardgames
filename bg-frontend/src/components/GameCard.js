import React from 'react';
import { connect } from 'react-redux';
import { addGameToShelf } from '../actions/gameShelf';

const GameCard = props => {
    const game = props.game.attributes
    
    const handleClick = event => {
        event.preventDefault();
        addGameToShelf(game.id, props.currentUser.id)
    }


    return (
        <div className="game-card">
            <h3>{ game.name } ({ game.year_published})</h3>
            <img src={ game.img } alt="Game Title"></img>
            <p>Players: { game.min_players } - { game.max_players }</p>
            <p>Play Time: { game.min_playtime } - { game.max_playtime }</p>
            <p>Description: { game.description_preview }</p>
            <button onClick={handleClick}>Add To Shelf</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer
    }
}

export default connect(mapStateToProps)(GameCard);