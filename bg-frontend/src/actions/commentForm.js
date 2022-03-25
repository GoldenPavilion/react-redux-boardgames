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