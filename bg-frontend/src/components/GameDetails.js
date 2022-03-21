import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { resetCommentForm } from '../actions/commentForm';
import Comments from './Comments';

const GameDetails = () => {
    debugger
    const location = useLocation();
    const navigate = useNavigate();
    const props = location.state;
    const game = props.game.attributes
    
    useEffect(() => {
        resetCommentForm();
    });

    const handleCloseClick = () => {
        if(location.pathname === `/games/${props.game.id}`){
            navigate('/games')
        } else if (location.pathname === `/my_games/${props.game.id}`){
            navigate('/my_games')
        }
    }

    return (
        <div className="game-page">
            <div className="close">
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseClick}/>
            </div>
            <img className="game-img" src={ game.img } alt="Game Title"></img>
            <div className="details">
                <h2 className="title">{game.name}</h2>
                <p className="text">Release Year: {game.year_published}</p>
                <p className="text">Players: {game.min_players} - {game.max_players}</p>
                <p className="text">Play Time: {game.min_playtime} - {game.max_playtime}</p>
                <p className="text">Description: {game.description_preview}</p>
                <Comments game={ props.game }/>
            </div>
        </div>
    )
}

export default connect(null, { resetCommentForm })(GameDetails);

// reset state on unmount