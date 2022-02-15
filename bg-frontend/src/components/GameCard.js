import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddGameButton from './AddGameButton';

const GameCard = props => {    

    const game = props.game.attributes 
    const ids = { game_id: parseInt(props.game.id), user_id: parseInt(props.currentUser.id) }

    debugger
    return (
        <div className="card" style={{width: 320}}>
            <img className="card-img-top" src={ game.img } alt="Game Title"></img>
            <div className="card-body">
                <h3 className="card-title">{ game.name } ({ game.year_published})</h3>
                <Link key={props.game.id} to={`${props.game.id}`} state={{ game: props.game}}>Details</Link>
                <p className="card-text">Players: { game.min_players } - { game.max_players }</p>
                <p className="card-text">Play Time: { game.min_playtime } - { game.max_playtime }</p>
                <p className="card-text">Description: { game.description_preview }</p>
                <AddGameButton currentUser={props.currentUser} game={game} ids={ids} />
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer
    }
}

export default connect(mapStateToProps)(GameCard);