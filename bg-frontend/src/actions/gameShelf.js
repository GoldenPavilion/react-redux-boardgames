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

export const addGameToShelf = (ids) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/user_games", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ids)
        })
        .then(resp => resp.json())
        .then (response => {
            dispatch(resetGameShelf())
            dispatch(getGameShelf())
        })
    }
}