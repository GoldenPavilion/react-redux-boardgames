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

export const addComment = (ids) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/comments", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ids)
        })
        .then(resp => resp.json())
        .then (response => {
            dispatch(resetCommentForm())
        })
    }
}