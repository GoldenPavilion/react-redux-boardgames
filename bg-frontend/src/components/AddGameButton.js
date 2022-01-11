import React from 'react';

const AddGameButton = props => {

    const userGames = props.currentUser.attributes.games
    const currentGame = props.game
    
    if(userGames.some(game => game.name === currentGame.name)){
        return(<button className="btn btn-secondary" disabled="true">Shelved!</button>)
    } else {
        return(<button className="btn btn-secondary" onClick={props.handleClick}>Add To Shelf</button>)
    }
}

export default AddGameButton; 