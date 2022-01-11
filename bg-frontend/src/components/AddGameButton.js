import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addGameToShelf } from '../actions/gameShelf';

class AddGameButton extends Component {
    state = {
        buttonText: "Add To Shelf",
        disabled: false
    }

    render(){
        const userGames = this.props.currentUser.attributes.games
        const currentGame = this.props.game
        const ids = this.props.ids

        const handleClick = event => {
            event.preventDefault();
            this.setState({
                buttonText: "SHELVED!",
                disabled: true
            })
            this.props.addGameToShelf(ids)
        }
    
        if(userGames.some(game => game.name === currentGame.name)){
            return(
                <button 
                    className="btn btn-secondary" 
                    disabled="true">
                Shelved!</button>
            )
        } else {
            return(
                <button 
                    className="btn btn-secondary" 
                    onClick={handleClick}
                    disabled={this.state.disabled}>
                {this.state.buttonText}</button>
            )
        }
    }
}

export default connect(null, { addGameToShelf })(AddGameButton); 