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