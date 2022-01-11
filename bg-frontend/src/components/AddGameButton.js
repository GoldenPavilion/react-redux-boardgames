import React, { Component } from 'react';

class AddGameButton extends Component {
    state = {
        buttonText: "Add To Shelf",
        disabled: false
    }

    render(){
        const userGames = this.props.currentUser.attributes.games
        const currentGame = this.props.game
    
        if(userGames.some(game => game.name === currentGame.name)){
            return(<button className="btn btn-secondary" disabled="true">Shelved!</button>)
        } else {
            return(<button className="btn btn-secondary" onClick={this.props.handleClick}>Add To Shelf</button>)
        }
    }
}

export default AddGameButton; 