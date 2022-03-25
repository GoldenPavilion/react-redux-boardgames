export const setComments = comments => {
    return {
        type: "SET_COMMENTS",
        comments
    }
}

export const resetComments = () => {
    return {
        type: 'RESET_COMMENTS'
    }
}

export const getComments = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/comments", {
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
                dispatch(setComments(response.data))
            }
        })
        .catch(console.log)
    }
}

export const addComment = (data) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/comments", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then (response => {
            dispatch(resetComments())
            dispatch(getComments())
        })
    }
}