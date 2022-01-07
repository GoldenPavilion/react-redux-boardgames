const gameShelfReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_GAME_SHELF":
            return action.games
        case "RESET_GAME_SHELF":
            return null
        default:
            return state
    }
}

export default gameShelfReducer;