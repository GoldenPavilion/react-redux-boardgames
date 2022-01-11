import React, { Component } from 'react';

class AddGameButton extends Component {
    state = {
        buttonText: "Add To Shelf",
        disabled: false
    }

    render(){
        const userGames = this.props.currentUser.attributes.games
        const currentGame = this.props.game

        const buttonChange = () => {
            this.setState({
                buttonText: "SHELVED!",
                disabled: true
            })
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
                    onClick={this.props.handleClick}>
                {this.state.buttonText}</button>
            )
        }
    }
}

export default AddGameButton; 