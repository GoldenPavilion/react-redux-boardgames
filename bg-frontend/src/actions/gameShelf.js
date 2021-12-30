export const setGameShelf = games => {
    return {
        type: "SET_GAME_SHELF",
        games
    }
}

export const getGameShelf = () => {
    return dispatch => {
        return fetch("http://localhost:3000/api/games", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
            .then(resp => resp.json())
            .then(response => {
                if (response.error) {
                    alert(response.error)
                } else {
                    dispatch(setGameShelf())
                }
            })
            .catch(console.log)
        })
    }
}