import React from 'react';

const GameDetails = ({ game }) => {

    return (
        <div className="game-page">
            <img className="game-img" src={ game } alt="Game Title"></img>
            <div className="details">
                <h2 className="title">{game.name}</h2>
                <p className="text">Release Year: {game.year_published}</p>
                <p className="text">Players: {game.min_players} - {game.max_players}</p>
                <p className="text">Play Time: {game.min_playtime} - {game.max_playtime}</p>
                <p className="text">Description: {game.description_preview}</p>
            </div>
        </div>
    )
}

export default GameDetails;