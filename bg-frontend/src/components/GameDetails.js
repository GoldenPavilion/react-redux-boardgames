import React from 'react';
import { useLocation } from 'react-router-dom';

const GameDetails = () => {

    const location = useLocation();
    const props = location.state;
    const game = props.game.attributes

    return (
        <div className="game-page">
            <img className="game-img" src={ game.img } alt="Game Title"></img>
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