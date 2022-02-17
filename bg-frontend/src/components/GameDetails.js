import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const GameDetails = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const props = location.state;
    const game = props.game.attributes

    const handleCloseClick = () => {
        navigate('/games')
    }

    return (
        <div className="game-page" onClick={handleCloseClick}>
            <div className="close">
                <button type="button" className="btn-close" aria-label="Close" />
            </div>
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

// Add an X button that returns user to /games onClick
// How could I clear the search bar?