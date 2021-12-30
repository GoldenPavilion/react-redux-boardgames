export const setGameShelf = games => {
    return {
        type: "SET_GAME_SHELF",
        games
    }
}

export const getGameShelf = games => {
    return {
        type: "GET_GAME_SHELF",
        games
    }
}