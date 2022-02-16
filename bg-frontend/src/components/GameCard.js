import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddGameButton from './AddGameButton';

const GameCard = props => {    

    const game = props.game.attributes 
    const ids = { game_id: parseInt(props.game.id), user_id: parseInt(props.currentUser.id) }

    return (
        <div className="card" style={{width: 320}}>
            <img className="card-img-top" src={ game.img } alt="Game Title"></img>
            <div className="card-body">
                <h3 className="card-title">{ game.name } ({ game.year_published})</h3>
                <Link key={props.game.id} to={`${props.game.id}`} state={{ game: props.game}}>Details</Link>
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