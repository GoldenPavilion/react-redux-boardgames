export const setGameShelf = games => {
    return {
        type: "SET_GAME_SHELF",
        games
    }
}

export const resetGameShelf = () => {
    return {
        type: 'RESET_GAME_SHELF'
    }
}

export const getGameShelf = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/my_games", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(setGameShelf(response.data))
                }
            })
            .catch(console.log)
    }
}

// export const addGameToShelf = () => {
   // return {
     //   type: "ADD_GAME_TO_SHELF"
   //}
//}