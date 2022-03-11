export const updateCommentForm = formData => {
    return {
        type: 'UPDATE_COMMENT_FORM',
        formData
    }
}

export const resetCommentForm = () => {
    return {
        type: 'RESET_COMMENT_FORM'
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
                dispatch(updateCommentForm(response.data))
            }
        })
        .catch(console.log)
    }
}