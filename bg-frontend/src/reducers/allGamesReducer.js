const allGamesReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_ALL_USERS":
            return action.games
        default:
            return state
    }
}

export default allGamesReducer;