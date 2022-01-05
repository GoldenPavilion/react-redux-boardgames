const allGamesReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_ALL_GAMES":
            return action.games
        default:
            return state
    }
}

export default allGamesReducer;