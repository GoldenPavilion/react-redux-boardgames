import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddGameButton from './AddGameButton'

class GameCard extends Component {    

    render(){
        const game = this.props.game.attributes 
        const ids = { game_id: parseInt(this.props.game.id), user_id: parseInt(this.props.currentUser.id) }

        return (
            <div className="card" style={{width: 320}}>
                <img className="card-img-top" src={ game.img } alt="Game Title"></img>
                <div className="card-body">
                    <h3 className="card-title">{ game.name } ({ game.year_published})</h3>
                    <p className="card-text">Players: { game.min_players } - { game.max_players }</p>
                    <p className="card-text">Play Time: { game.min_playtime } - { game.max_playtime }</p>
                    <p className="card-text">Description: { game.description_preview }</p>
                    <AddGameButton currentUser={this.props.currentUser} game={game} ids={ids} />
                </div>
            </div>
    )}
}


const mapStateToProps = state => {
    return {
        currentUser: state.currentUserReducer
    }
}

export default connect(mapStateToProps)(GameCard);