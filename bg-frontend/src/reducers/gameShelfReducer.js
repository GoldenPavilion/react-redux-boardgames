const gameShelfReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_GAME_SHELF":
            return action.games
        default:
            return state
    }
}

export default gameShelfReducer;