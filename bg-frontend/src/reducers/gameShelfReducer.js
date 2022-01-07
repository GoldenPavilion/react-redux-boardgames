const gameShelfReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_GAME_SHELF":
            return action.games
        case "RESET_GAME_SHELF":
            return null
        case "UPDATE_GAME_SHELF":
            return action.game
        default:
            return state
    }
}

export default gameShelfReducer;