import React from 'react';

const GameDetails = props => {

    debugger

    return (
        <div className="game-page">
            <img className="game-img" src={ props.game.img } alt="Game Title"></img>
            <div className="details">
                <h2 className="title">{props.game.name}</h2>
                <p className="text">Release Year: {props.game.year_published}</p>
                <p className="text">Players: {props.game.min_players} - {props.game.max_players}</p>
                <p className="text">Play Time: {props.game.min_playtime} - {props.game.max_playtime}</p>
                <p className="text">Description: {props.game.description_preview}</p>
            </div>
        </div>
    )
}

export default GameDetails;