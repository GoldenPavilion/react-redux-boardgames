import React from 'react';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import AddGameButton from './AddGameButton';

const GameCard = props => {    

    const game = props.game.attributes;
    const navigate = useNavigate(); 
    const ids = { game_id: parseInt(props.game.id), user_id: parseInt(props.currentUser.id) };

    const handleOnClick = () => {
        navigate(`/games/${props.games.id}`)
    }

    return (
        <div className="card" style={{width: 320}}>
            {/*<Link key={props.game.id} to={`${props.game.id}`} state={{ game: props.game}}>*/}
                <img className="card-img-top" width="280" height="280" src={ game.img } alt="Game Title" />
            {/* </Link> */}
            <div className="card-body">
                <h3 className="card-title">{ game.name } ({ game.year_published})</h3>
                <br />
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