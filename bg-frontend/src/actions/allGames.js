export const setAllGames = games => {
    return {
        type: "SET_ALL_GAMES",
        games
    }
}

export const getAllGames = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/games", {
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
                dispatch(setAllGames(response.data))
            }
        })
        .catch(console.log)
    }
}